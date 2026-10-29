/**
 * ==============================================================================
 * Y.G ASAFOETIDA — 3D STORY ARROW DELIVERY EVOLUTION (9 SCENARIOS)
 * ==============================================================================
 * Smooth 60FPS motion directly along the arrow path from top to bottom:
 * - NO "3D VIDEO" word tag / badge ("3d word ah mela thookiru")
 * - NO white background box ("background la venam")
 * - Train / vehicle moves all the way from top to bottom of the arrow!
 * - Interactive click opens full 3D Video Theater with ambient sound and controls.
 */

(function () {
  const SCENARIOS = [
    {
      num: '01',
      era: '1931 • Heritage Craft',
      title: 'Rendu Patti Home Preparation',
      desc: 'Two traditional grandmothers (pattis) in South Indian sarees hand-pounding authentic hing in a stone mortar at home.',
      descTa: 'இரண்டு பாட்டிகள் பாரம்பரிய முறைப்படி வீட்டு உரலில் தூய பெருங்காயத்தை இடித்தல்.',
      img: '/images/journey/stage1-grandmothers.jpg',
      cutout: '/images/journey/stage1-pattis-cutout.png',
      w: 80,
      h: 70,
      soundLabel: '🔊 Ambient: Stone Mortar Grinding Rhythm',
      soundType: 'mortar'
    },
    {
      num: '02',
      era: '1932 • Foot Courier',
      title: 'Traditional Walking Delivery',
      desc: 'Barefoot delivery courier in a dhoti walking village lanes carrying a traditional clay pot and cloth shoulder sack.',
      descTa: 'அந்தக் காலத்து மனிதர் வேட்டி கட்டி மண்பானை மற்றும் பையுடன் நடந்து சென்று பெருங்காயம் கொண்டு சேர்த்தல்.',
      img: '/images/journey/stage2-walking.jpg',
      cutout: '/images/journey/stage2-walking-cutout.png',
      w: 64,
      h: 72,
      soundLabel: '🔊 Ambient: Village Footsteps & Breeze',
      soundType: 'footsteps'
    },
    {
      num: '03',
      era: '1940s • Swift Wings',
      title: 'Carrier Pigeon Dispatch',
      desc: 'Swift carrier pigeon soaring with a sealed spice scroll and parcel across towns.',
      descTa: 'புறா தனது சிறகுகளில் தூய பெருங்காய பொட்டலத்தை சுமந்து பறந்து கொண்டு சேர்த்தல்.',
      img: '/images/journey/stage3-pigeon-v3.jpg',
      cutout: '/images/journey/stage3-pigeon-v3.png',
      w: 80,
      h: 58,
      soundLabel: '🔊 Ambient: Pigeon Wing Flutters & Wind',
      soundType: 'wings'
    },
    {
      num: '04',
      era: '1950s • Pedal Power',
      title: 'Vintage Cycle Courier',
      desc: 'Delivery courier riding a vintage black bicycle with front basket and rear wooden crate full of spice boxes.',
      descTa: 'சைக்கிளில் மரப் பெட்டிகளுடன் தெருத்தெருவாக சென்று பெருங்காயம் டெலிவரி செய்தல்.',
      img: '/images/journey/stage4-bicycle-v4.png',
      cutout: '/images/journey/stage4-bicycle-v4.png',
      w: 78,
      h: 82,
      soundLabel: '🔊 Ambient: Vintage Bicycle Bell Ding',
      soundType: 'bell'
    },
    {
      num: '05',
      era: '1970s • Rail Freight',
      title: 'Steam Train Cargo Freight',
      desc: 'Vintage locomotive steam train chugging with proud smoke puffs, hauling wooden freight wagons loaded with hing.',
      descTa: 'நீராவி ரயில் புகையைக் கக்கிக் கொண்டு மாநிலங்கள் தோறும் சரக்குகளை கொண்டு சேர்த்தல்.',
      img: '/images/journey/stage5-train-v3.jpg',
      cutout: '/images/journey/stage5-train-v3.png',
      w: 96,
      h: 52,
      soundLabel: '🔊 Ambient: Locomotive Steam Chug & Whistle',
      soundType: 'train'
    },
    {
      num: '06',
      era: '1990s • Express Dispatch',
      title: 'Motorbike Delivery Rider',
      desc: 'Swift motorcycle delivery rider with helmet and parcel carrier box navigating streets for express dispatches.',
      descTa: 'பைக் ரைடர் ஸ்பீடாக சென்று டோர் டெலிவரி செய்தல்.',
      img: '/images/journey/stage6-motorbike.jpg',
      cutout: '/images/journey/stage6-motorbike-cutout.png',
      w: 78,
      h: 68,
      soundLabel: '🔊 Ambient: Motorcycle Engine Purr & Throttle',
      soundType: 'motorbike'
    },
    {
      num: '07',
      era: '2010s • Logistics Fleet',
      title: 'Modern Delivery Van / Car',
      desc: 'Eco-friendly branded delivery vans and cars cruising across national highways supplying homes & stores.',
      descTa: 'டெலிவரி வேன் மற்றும் கார்களில் நாடு முழுவதும் உள்ள கடைகளுக்கும் வீடுகளுக்கும் விநியோகம்.',
      img: '/images/journey/stage7-van-v3.jpg',
      cutout: '/images/journey/stage7-van-v3.png',
      w: 84,
      h: 74,
      soundLabel: '🔊 Ambient: Modern Highway Logistics Fleet',
      soundType: 'van'
    },
    {
      num: '08',
      era: '2020s • Smart Commerce',
      title: '1-Tap Mobile App Booking',
      desc: 'Customer ordering pure Y.G Asafoetida with 1-tap on a 3D smartphone app with real-time dispatch tracking.',
      descTa: 'நமது மொபைல் ஆப் மூலம் ஒரே கிளிக்கில் பெருங்காயம் ஆர்டர் செய்து லைவ் டிராக்கிங் செய்தல்.',
      img: '/images/journey/stage8-mobile-v3.jpg',
      cutout: '/images/journey/stage8-mobile-v3.png',
      w: 76,
      h: 76,
      soundLabel: '🔊 Ambient: Smartphone Order Ring & Confirmation',
      soundType: 'ping'
    },
    {
      num: '09',
      era: 'Culinary Fulfillment',
      title: 'Pure Kitchen Cooking',
      desc: 'Sprinkling a fragrant pinch of pure golden hing into a sizzling brass kadai of hot South Indian sambar tadka.',
      descTa: 'கடைசியாக சமையலறைக்கு வந்து சூடான சாம்பாரில் தூய பெருங்காயத்தை தாளித்து மணம் வீசச் செய்தல்.',
      img: '/images/journey/stage9-kitchen-v3.jpg',
      cutout: '/images/journey/stage9-kitchen-v3.png',
      w: 72,
      h: 84,
      soundLabel: '🔊 Ambient: Sizzling Brass Kadai Tadka & Aroma',
      soundType: 'sizzle'
    }
  ];

  // Inject CSS
  const styleId = 'yg-story-arrow-rider-styles';
  if (!document.getElementById(styleId)) {
    const st = document.createElement('style');
    st.id = styleId;
    st.textContent = `
      .yg-svg-vehicle-rider {
        transition: transform 0.05s linear;
        cursor: default;
        pointer-events: none;
      }
      .yg-svg-vehicle-rider image {
        transition: transform 0.2s ease, filter 0.2s ease;
      }
      .yg-svg-vehicle-rider:hover image {
        transform: scale(1.18);
        filter: drop-shadow(0 12px 20px rgba(217, 119, 6, 0.6)) !important;
      }

      /* 3D VIDEO THEATER MODAL */
      .yg-react-theater-modal {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(10, 15, 29, 0.92);
        backdrop-filter: blur(14px);
        z-index: 99999;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .yg-react-theater-modal.active {
        display: flex !important;
      }
      .yg-react-theater-container {
        background: #0f172a;
        border: 2px solid #10b981;
        border-radius: 24px;
        max-width: 940px;
        width: 100%;
        overflow: hidden;
        box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.7);
        position: relative;
      }
      .yg-react-screen {
        position: relative;
        width: 100%;
        height: 480px;
        background: #000;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .yg-react-screen img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: transform 12s linear;
      }
      .yg-react-screen img.ken-burns {
        transform: scale(1.18) translate(-1.5%, -1.5%);
      }
    `;
    document.head.appendChild(st);
  }

  // Web Audio Synthesizer
  let audioCtx = null;
  let activeNodes = [];
  function playAudioSynth(type) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      stopAudioSynth();

      const o1 = audioCtx.createOscillator();
      const o2 = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o1.type = 'triangle';
      o1.frequency.setValueAtTime(130.81, audioCtx.currentTime);
      o2.type = 'sine';
      o2.frequency.setValueAtTime(196.00, audioCtx.currentTime);
      g.gain.setValueAtTime(0.04, audioCtx.currentTime);
      o1.connect(g);
      o2.connect(g);
      g.connect(audioCtx.destination);
      o1.start();
      o2.start();
      activeNodes.push(o1, o2);
    } catch(e) {}
  }
  function stopAudioSynth() {
    activeNodes.forEach(n => { try { n.stop(); n.disconnect(); } catch(e){} });
    activeNodes = [];
  }

  let currentIdx = 0;
  let playTimer = null;
  let elapsed = 0;
  const DURATION = 10;

  function ensureModal() {
    const existing = document.getElementById('yg-react-modal');
    if (existing) existing.remove();
  }

  function openModal(idx) {
    // User requested: ella images ah click panalum andha video page varuthu la athu venam
    return;
  }

  function closeModal() {
    pausePlay();
    stopAudioSynth();
    const m = document.getElementById('yg-react-modal');
    if (m) m.classList.remove('active');
  }

  function loadScene(idx) {
    const sc = SCENARIOS[idx];
    document.getElementById('yg-m-era').innerText = sc.era;
    document.getElementById('yg-m-title').innerText = `${sc.num}. ${sc.title}`;
    const img = document.getElementById('yg-m-img');
    img.classList.remove('ken-burns');
    img.src = sc.img;
    setTimeout(() => img.classList.add('ken-burns'), 50);
    document.getElementById('yg-m-sound-lbl').innerText = sc.soundLabel;
    document.getElementById('yg-m-desc-en').innerText = sc.desc;
    document.getElementById('yg-m-desc-ta').innerText = sc.descTa;
    elapsed = 0;
    updateProg();
    playAudioSynth(sc.soundType);
  }

  function updateProg() {
    const pct = Math.min(100, (elapsed / DURATION) * 100);
    document.getElementById('yg-m-prog').style.width = pct + '%';
    document.getElementById('yg-m-time').innerText = `00:0${Math.floor(elapsed)} / 00:${DURATION}`;
  }

  let isPlaying = false;
  function startPlay() {
    isPlaying = true;
    document.getElementById('yg-m-playbtn').innerText = '❚❚ Pause';
    if (playTimer) clearInterval(playTimer);
    playTimer = setInterval(() => {
      elapsed += 0.1;
      if (elapsed >= DURATION) {
        stepScene(1);
      } else {
        updateProg();
      }
    }, 100);
  }

  function pausePlay() {
    isPlaying = false;
    document.getElementById('yg-m-playbtn').innerText = '▶ Play';
    if (playTimer) clearInterval(playTimer);
    stopAudioSynth();
  }

  function togglePlay() {
    if (isPlaying) pausePlay(); else { startPlay(); playAudioSynth(SCENARIOS[currentIdx].soundType); }
  }

  function stepScene(delta) {
    currentIdx = (currentIdx + delta + SCENARIOS.length) % SCENARIOS.length;
    loadScene(currentIdx);
    if (isPlaying) startPlay();
  }

  // Active riders array for smooth requestAnimationFrame loop
  const activeRiders = [];

  function mountStoryEnhancements() {
    // Clean up any old pill boxes, previous static tags, video blocks, or video modal
    document.querySelectorAll('.yg-3d-arrow-card, .yg-3d-arrow-card-mob, .yg-train-lengthened-connector, #yg-react-modal, .yg-react-theater-modal').forEach(el => el.remove());

    const desktopSvgs = document.querySelectorAll('svg[viewBox="0 0 500 90"]');
    desktopSvgs.forEach((svg, idx) => {
      svg.style.display = '';
      if (svg.querySelector('.yg-svg-vehicle-rider')) return;

      // CRITICAL FIX: The arrow curve path contains cubic bezier 'C'!
      // (The first <path> in <svg> is the marker head inside <defs>, NOT the arrow line!)
      const paths = svg.querySelectorAll('path');
      let curvePath = null;
      for (let p of paths) {
        const d = p.getAttribute('d') || '';
        if (d.includes('C')) {
          curvePath = p;
          break;
        }
      }
      if (!curvePath && paths.length > 1) {
        curvePath = paths[1];
      }
      if (!curvePath) return;

      const sc = SCENARIOS[idx % SCENARIOS.length];
      const w = sc.w || 76;
      const h = sc.h || 64;

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'yg-svg-vehicle-rider');
      g.style.filter = 'drop-shadow(0px 8px 14px rgba(0,0,0,0.35))';

      // Pure animated decorative rider — NO video modal popup on click
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = `${sc.title} (${sc.era.split('•')[0].trim()})`;
      g.appendChild(title);

      // ONLY the vehicle cutout image! NO "3D VIDEO" text tag! NO white pill box!
      const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', sc.cutout);
      img.setAttribute('href', sc.cutout);
      img.setAttribute('x', `${-w / 2}`);
      img.setAttribute('y', `${-h / 2}`);
      img.setAttribute('width', `${w}`);
      img.setAttribute('height', `${h}`);
      img.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      g.appendChild(img);

      svg.appendChild(g);

      activeRiders.push({
        g,
        path: curvePath,
        isPaused: false
      });

      g.addEventListener('mouseenter', () => {
        const item = activeRiders.find(r => r.g === g);
        if (item) item.isPaused = true;
      });
      g.addEventListener('mouseleave', () => {
        const item = activeRiders.find(r => r.g === g);
        if (item) item.isPaused = false;
      });
    });
  }

  // Butter-smooth 60FPS requestAnimationFrame movement from TOP of arrow to BOTTOM of arrow
  const MOTION_DURATION = 5500; // 5.5 seconds for complete top-to-bottom and return travel
  let startAnimTime = null;

  function runSmoothVehicleMovement(timestamp) {
    if (!startAnimTime) startAnimTime = timestamp;
    const elapsed = timestamp - startAnimTime;

    // Ping-pong cycle between 0.0 (top of arrow) and 1.0 (bottom arrowhead):
    // cycle goes 0 -> 1 -> 0 continuously
    const cycle = (elapsed % MOTION_DURATION) / MOTION_DURATION;
    // Smooth harmonic sine easing (starts slow, speeds up in curve, decelerates at bottom):
    const progress = 0.5 - 0.5 * Math.cos(cycle * 2 * Math.PI);

    activeRiders.forEach(rider => {
      if (rider.isPaused) return;
      try {
        const totalLen = rider.path.getTotalLength();
        if (totalLen > 0) {
          // Physically position the vehicle at the exact mathematical curve point from top to bottom!
          const pt = rider.path.getPointAtLength(progress * totalLen);
          rider.g.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
        }
      } catch (e) {}
    });

    requestAnimationFrame(runSmoothVehicleMovement);
  }

  requestAnimationFrame(runSmoothVehicleMovement);

  window.ygPlay3dScene = (idx) => openModal(idx);

  setInterval(mountStoryEnhancements, 350);
  window.addEventListener('DOMContentLoaded', mountStoryEnhancements);
})();
