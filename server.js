/**
 * ==============================================================================
 * Y.G ASAFOETIDA — LOCAL PRODUCTION SERVER & API BRIDGE
 * ==============================================================================
 * Serves the full Vite/TanStack frontend with SPA routing fallback,
 * provides full JSON API compatibility matching https://yghing.com,
 * and handles all static assets (images, videos, styles, scripts).
 * ==============================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DATA_FILE = path.join(ROOT_DIR, 'data', 'yg_store.json');
const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

// Safe JSON data loader
function loadStore() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (err) {
    console.error('[Y.G Server] Failed to read yg_store.json:', err.message);
  }
  return { products: [], categories: [], cms: {}, settings: {} };
}

function saveStore(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4), 'utf8');
    return true;
  } catch (err) {
    console.error('[Y.G Server] Failed to save yg_store.json:', err.message);
    return false;
  }
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 5 * 1024 * 1024) req.destroy(); // 5MB limit
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    });
    res.end();
    return;
  }

  const [rawPath] = req.url.split('?');
  const urlPath = decodeURIComponent(rawPath);

  // ----------------------------------------------------------------------------
  // 1. API ROUTES (Mocks & matches production PHP backend)
  // ----------------------------------------------------------------------------
  if (urlPath.startsWith('/api/')) {
    const store = loadStore();

    if (urlPath === '/api/health') {
      sendJson(res, 200, { ok: true, status: 'healthy', timestamp: Date.now() });
      return;
    }

    if (urlPath === '/api/admin/data') {
      sendJson(res, 200, { ok: true, driver: 'json_store', data: store });
      return;
    }

    if (urlPath === '/api/products' && req.method === 'GET') {
      sendJson(res, 200, {
        ok: true,
        source: 'json_store',
        count: (store.products || []).length,
        products: store.products || []
      });
      return;
    }

    const prodMatch = urlPath.match(/^\/api\/products\/([a-zA-Z0-9_-]+)$/);
    if (prodMatch && req.method === 'GET') {
      const slug = prodMatch[1];
      const p = (store.products || []).find(item => item.slug === slug);
      if (p) {
        sendJson(res, 200, { ok: true, product: p });
      } else {
        sendJson(res, 404, { ok: false, error: 'Product not found' });
      }
      return;
    }

    if (urlPath === '/api/cms') {
      sendJson(res, 200, { ok: true, cms: store.cms || {} });
      return;
    }

    if (urlPath === '/api/contact' && req.method === 'POST') {
      const payload = await parseBody(req);
      const inq = {
        id: 'inq-' + Date.now(),
        name: payload.name || 'Anonymous',
        email: payload.email || '',
        phone: payload.phone || '',
        subject: payload.subject || 'General Inquiry',
        message: payload.message || '',
        createdAt: Date.now(),
        isRead: false
      };
      if (!Array.isArray(store.inquiries)) store.inquiries = [];
      store.inquiries.unshift(inq);
      saveStore(store);
      sendJson(res, 200, { ok: true, message: 'Your message has been sent successfully. We will contact you soon!' });
      return;
    }

    if (urlPath === '/api/checkout' && req.method === 'POST') {
      const payload = await parseBody(req);
      const order = {
        id: 'YG-' + Math.floor(100000 + Math.random() * 900000),
        items: payload.items || [],
        subtotal: payload.subtotal || 0,
        shippingFee: payload.shippingFee || 0,
        total: payload.total || 0,
        address: payload.address || {},
        createdAt: Date.now(),
        status: 'Confirmed'
      };
      if (!Array.isArray(store.orders)) store.orders = [];
      store.orders.unshift(order);
      saveStore(store);
      sendJson(res, 200, { ok: true, orderId: order.id, message: 'Order confirmed successfully!' });
      return;
    }

    // Default unknown API fallback
    sendJson(res, 404, { ok: false, error: 'Endpoint not found' });
    return;
  }

  // ----------------------------------------------------------------------------
  // 2. STATIC FILE SERVING WITH SPA FALLBACK
  // ----------------------------------------------------------------------------
  let relPath = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  let filePath = path.join(ROOT_DIR, relPath);

  // Check in ROOT_DIR, then in public directory
  let exists = fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  if (!exists) {
    const publicCandidate = path.join(ROOT_DIR, 'public', relPath);
    if (fs.existsSync(publicCandidate) && fs.statSync(publicCandidate).isFile()) {
      filePath = publicCandidate;
      exists = true;
    }
  }

  // If not found and request does NOT look like a file extension, fallback to index.html (SPA routing)
  if (!exists) {
    const ext = path.extname(relPath);
    if (!ext || ext === '.html') {
      filePath = path.join(ROOT_DIR, 'index.html');
      exists = fs.existsSync(filePath);
    }
  }

  if (!exists) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  try {
    const stream = fs.createReadStream(filePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
    });
    stream.pipe(res);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error: ' + err.message);
  }
});

function startServer(port) {
  server.listen(port, '0.0.0.0', () => {
    console.log('\n================================================================');
    console.log('   🌿 Y.G ASAFOETIDA — LOCAL SERVER RUNNING');
    console.log('================================================================');
    console.log(`   ➜ Local:   http://localhost:${port}/`);
    console.log(`   ➜ Network: http://127.0.0.1:${port}/`);
    console.log('   ➜ Theme:   Emerald (with Saffron, Indigo, Plum switchers)');
    console.log('   ➜ Data:    31 Products & Mayil Agro Foods Contact Synced');
    console.log('================================================================\n');
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
