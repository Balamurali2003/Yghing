import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as products } from "./products-DheZb9xp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DvXJ2d0C.js
var $$splitComponentImporter = () => import("./admin-BM_btMEr.mjs");
var $$splitErrorComponentImporter = () => import("./admin-DFqZUIT2.mjs");
var PRESET_PRODUCT_IMAGES = [
	{
		label: "Gold Powder 100g",
		key: "gold-100",
		url: "/products/100g-gold-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Gold Powder 50g",
		key: "gold-50",
		url: "/products/50g-gold-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Gold Powder 500g",
		key: "gold-500",
		url: "/products/500g-gold-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Premium Powder 100g",
		key: "premium-100",
		url: "/products/100g-premium-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Premium Powder 50g",
		key: "premium-50",
		url: "/products/50g-premium-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Gluten Free 50g",
		key: "gluten-free",
		url: "/products/50g-gluten-free-asafoetida-powder/img-1.jpg"
	},
	{
		label: "Gold Cake 100g",
		key: "cake-100",
		url: "/products/100g-asafoetida-gold-cake/img-1.jpg"
	},
	{
		label: "Gold Cake 50g",
		key: "cake-50",
		url: "/products/50g-asafoetida-gold-cake/img-1.jpg"
	},
	{
		label: "Hing Chips",
		key: "chips",
		url: "/products/hing-chips/img-1.jpg"
	},
	{
		label: "Hing Pellets",
		key: "pellets",
		url: "/products/hing-pellets/img-1.jpg"
	},
	{
		label: "Bottle Jar",
		key: "bottle-jar",
		url: "/products/bottle-jar/img-1.jpg"
	},
	{
		label: "Raw Pure Lump",
		key: "raw-hing",
		url: "/products/hing/img-1.jpg"
	},
	{
		label: "Combo Box",
		key: "combo",
		url: "/products/all-product/img-1.jpg"
	},
	{
		label: "Multigrain Adai Dosa Mix 500g (Front)",
		key: "adai-dosa-front",
		url: "/products/vismaya-multi-millet-adai-dosa-mix/img-1.jpg"
	},
	{
		label: "Multigrain Adai Dosa Mix 500g (Back)",
		key: "adai-dosa-back",
		url: "/products/vismaya-multi-millet-adai-dosa-mix/img-2.jpg"
	}
];
var DEFAULT_EXPORT_DEALS = [
	{
		id: "EXP-2026-001",
		companyName: "Mustafa Centre Wholesale Pte Ltd",
		contactPerson: "K. Rajendran",
		country: "Singapore",
		destinationPort: "Port of Singapore (SGSIN)",
		email: "procurement@mustafacentre.com.sg",
		phone: "+65 6295 5855",
		productType: "Gold Grade Asafoetida Powder (100g & 500g tins)",
		quantityMetric: "1,200 kg",
		dealValueCurrency: "SGD",
		dealValueAmount: 48500,
		stage: "contract_closed",
		paymentTerms: "100% Irrevocable LC at sight",
		incoterms: "CIF Singapore",
		notes: "Certificate of Origin & Phytosanitary clearance documents dispatched.",
		createdAt: "2026-09-10"
	},
	{
		id: "EXP-2026-002",
		companyName: "Tamil Spices Trading LLC",
		contactPerson: "Ahmed Al-Mansoor",
		country: "United Arab Emirates",
		destinationPort: "Jebel Ali Port, Dubai (AEJEA)",
		email: "trade@tamilspicesdubai.ae",
		phone: "+971 4 338 9012",
		productType: "Pure Asafoetida Solid Cake & Raw Lumps",
		quantityMetric: "850 kg",
		dealValueCurrency: "USD",
		dealValueAmount: 32400,
		stage: "negotiation",
		paymentTerms: "30% advance, 70% against BL scan",
		incoterms: "FOB Tuticorin (VOC Port)",
		notes: "Halal compliance documents verified. Moisture content < 8% certified.",
		createdAt: "2026-09-14"
	},
	{
		id: "EXP-2026-003",
		companyName: "Nirav Foods & Spices Inc",
		contactPerson: "Viren Patel",
		country: "United States",
		destinationPort: "Port of New York / New Jersey (USNYC)",
		email: "import@niravfoodsusa.com",
		phone: "+1 (732) 555-0198",
		productType: "Gluten-Free Hing Powder & Hing Chips",
		quantityMetric: "2,500 kg",
		dealValueCurrency: "USD",
		dealValueAmount: 89e3,
		stage: "sample_sent",
		paymentTerms: "50% advance, balance on delivery",
		incoterms: "CIF New York",
		notes: "FDA Registration verified. Awaiting DHL express sample lab sign-off.",
		createdAt: "2026-09-15"
	},
	{
		id: "EXP-2026-004",
		companyName: "Lanka Spice Distributors Ltd",
		contactPerson: "Suren Wickramasinghe",
		country: "Sri Lanka",
		destinationPort: "Port of Colombo (LKCMB)",
		email: "suren@lankaspice.lk",
		phone: "+94 11 234 5678",
		productType: "Compounded Hing Powder (Yellow Label)",
		quantityMetric: "500 kg",
		dealValueCurrency: "USD",
		dealValueAmount: 14200,
		stage: "quoted",
		paymentTerms: "Wire transfer T/T advance",
		incoterms: "FOB Tuticorin",
		notes: "Proforma Invoice PI-2026-88 sent with 30-day price validity.",
		createdAt: "2026-09-17"
	}
];
var DEFAULT_ADMIN_MESSAGES = [
	{
		id: "MSG-101",
		senderName: "Senthil Kumar (Sri Krishna Sweets Vendor)",
		email: "senthil.procure@skb.in",
		phone: "+91 98410 44552",
		category: "wholesale",
		subject: "Monthly 150kg requirement for Tirunelveli & Madurai kitchens",
		message: "Namaskaram YG team, we require 150 kg of pure compounded asafoetida powder every month on a standing contract. Please share trade price slabs, GST invoice details, and dispatch schedule from Tirunelveli works.",
		status: "in_progress",
		receivedAt: "2026-09-17 09:45 AM",
		adminNotes: "Sent initial catalog; waiting for MD approval on 18% slab discount."
	},
	{
		id: "MSG-102",
		senderName: "Marcus Tan (Asian Gourmet Exports, KL)",
		email: "marcus.tan@asiangourmet.com.my",
		phone: "+60 12 345 6789",
		category: "export",
		subject: "Distributorship enquiry for Malaysia & Southeast Asia",
		message: "Hello Y.G Asafoetida management, we distribute authentic South Indian culinary products across hypermarkets in Kuala Lumpur and Penang. We are very interested in becoming your official distributor for Malaysia. Could we organize a Zoom call with your export director this week?",
		status: "unread",
		receivedAt: "2026-09-18 07:15 AM"
	},
	{
		id: "MSG-103",
		senderName: "Dr. Revathi Sundaram",
		email: "revathi.ayur@gmail.com",
		phone: "+91 94432 18900",
		category: "general",
		subject: "Inquiry on gluten-free hing formulation purity",
		message: "Good morning. I am an Ayurvedic practitioner in Coimbatore. I frequently recommend your Gluten-Free Asafoetida to patients with celiac disorder. Could you confirm what natural gum base or flour is utilized in place of wheat starch?",
		status: "replied",
		receivedAt: "2026-09-16 03:20 PM",
		adminNotes: "Replied detailing our natural edible gum and organic rice starch formulation."
	},
	{
		id: "MSG-104",
		senderName: "Heritage Organics Chennai (Private Label)",
		email: "partners@heritageorganics.co.in",
		phone: "+91 98840 99112",
		category: "private_label",
		subject: "White-label packaging & custom bottling request",
		message: "Dear Team, we run an organic brand across 12 stores in Chennai. We would like to co-pack 50g glass jars with our private label design while sourcing your premium Tirunelveli asafoetida as the sole ingredient. Minimum batch size?",
		status: "unread",
		receivedAt: "2026-09-17 11:30 PM"
	}
];
var DEFAULT_DASHBOARD_STATS = {
	totalRevenue: 248900,
	totalOrders: 142,
	ordersPlacedToday: 5,
	pendingReviewsCount: 2,
	openQuestionsCount: 1,
	openTicketsCount: 1,
	lowStockProductsCount: 1,
	stockAlertsCount: 0,
	ordersByStatus: {
		placed: 3,
		packed: 5,
		shipped: 14,
		out: 4,
		delivered: 114,
		cancelled: 2,
		refund_requested: 0,
		refunded: 0
	},
	recentOrders: [],
	recentSalesTrend: [
		{
			date: "12 Sept",
			revenue: 18400,
			orders: 12
		},
		{
			date: "13 Sept",
			revenue: 24200,
			orders: 16
		},
		{
			date: "14 Sept",
			revenue: 31e3,
			orders: 21
		},
		{
			date: "15 Sept",
			revenue: 28900,
			orders: 19
		},
		{
			date: "16 Sept",
			revenue: 34500,
			orders: 23
		},
		{
			date: "17 Sept",
			revenue: 39800,
			orders: 26
		},
		{
			date: "18 Sept",
			revenue: 42100,
			orders: 25
		}
	]
};
var INITIAL_PRODUCTS = products.map((p, idx) => ({
	slug: p.slug,
	name: p.name,
	tagline: p.tagline,
	format: p.format,
	gluten_free: p.glutenFree ? 1 : 0,
	bestseller: p.bestseller ? 1 : 0,
	image: p.image,
	gallery: JSON.stringify(p.gallery || [p.image]),
	description: p.description,
	ingredients: p.ingredients,
	usage: p.usage,
	shelf_life: p.shelfLife || "12 months from packing",
	in_stock: p.inStock !== false ? 1 : 0,
	stock_left: p.stockLeft ?? 50,
	rating: p.rating,
	reviews: p.reviews,
	created_at: 172664e7 - idx * 864e5,
	updated_at: 172664e7,
	variants: (p.variants || []).map((v, vIdx) => ({
		id: v.id,
		product_slug: p.slug,
		label: v.label,
		price: v.price,
		mrp: v.mrp ?? Math.round(v.price * 1.15),
		stock: v.stock ?? 100,
		sort_order: vIdx
	}))
}));
var Route = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Store Admin — Y.G Asafoetida" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { PRESET_PRODUCT_IMAGES as a, INITIAL_PRODUCTS as i, DEFAULT_DASHBOARD_STATS as n, Route as o, DEFAULT_EXPORT_DEALS as r, DEFAULT_ADMIN_MESSAGES as t };
