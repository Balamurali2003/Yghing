import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { $ as KeyRound, At as Check, C as Search, Ct as CircleQuestionMark, G as LogOut, Mt as Building2, O as RefreshCw, P as Package, Pt as Bell, Q as Layers, T as Save, Tt as CircleAlert, W as Mail, Y as LifeBuoy, Z as LayoutDashboard, b as ShoppingBag, c as Upload, d as TrendingUp, dt as Eye, f as Trash2, ft as Earth, g as Sparkles, h as SquarePen, j as Percent, jt as Calculator, k as Plus, l as Truck, m as Star, mt as DollarSign, p as Tag, pt as Download, r as X, u as TriangleAlert, vt as Coins, x as ShieldCheck, yt as Clock } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as apiFetch } from "./api-client-BMctYueP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Textarea } from "./textarea-DAvItzJA.mjs";
import { n as formatPrice, o as saveLiveProducts, r as getLiveProducts } from "./products-DheZb9xp.mjs";
import { n as resetLiveMetrics, r as saveLiveMetrics, t as DEFAULT_METRICS } from "./metrics-DiN42Nnk.mjs";
import { a as getLivePromos, s as saveLivePromos } from "./promos-CKHTmgFt.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { a as PRESET_PRODUCT_IMAGES, i as INITIAL_PRODUCTS, n as DEFAULT_DASHBOARD_STATS, r as DEFAULT_EXPORT_DEALS, t as DEFAULT_ADMIN_MESSAGES } from "./admin-DvXJ2d0C.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BM_btMEr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
async function compressImage(file, options = {}) {
	const { maxWidth = 1600, maxHeight = 1600, quality = .88, mimeType = "image/webp" } = options;
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				let { width, height } = img;
				if (width > maxWidth || height > maxHeight) {
					const ratio = Math.min(maxWidth / width, maxHeight / height);
					width = Math.round(width * ratio);
					height = Math.round(height * ratio);
				}
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				const ctx = canvas.getContext("2d", { alpha: mimeType !== "image/jpeg" });
				if (!ctx) {
					reject(/* @__PURE__ */ new Error("Unable to create 2D canvas context"));
					return;
				}
				ctx.imageSmoothingEnabled = true;
				ctx.imageSmoothingQuality = "high";
				ctx.drawImage(img, 0, 0, width, height);
				canvas.toBlob((blob) => {
					if (!blob) {
						reject(/* @__PURE__ */ new Error("Image compression failed to generate Blob"));
						return;
					}
					const dataUrl = canvas.toDataURL(mimeType, quality);
					const originalSize = file.size;
					const compressedSize = blob.size;
					const compressionRatio = Math.round((1 - compressedSize / originalSize) * 100);
					resolve({
						dataUrl,
						blob,
						name: file.name.replace(/\.[^/.]+$/, "") + (mimeType === "image/webp" ? ".webp" : ".jpg"),
						originalSize,
						compressedSize,
						width,
						height,
						compressionRatio: Math.max(0, compressionRatio)
					});
				}, mimeType, quality);
			};
			img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load image "${file.name}"`));
			img.src = e.target?.result;
		};
		reader.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to read file "${file.name}"`));
		reader.readAsDataURL(file);
	});
}
async function compressMultipleImages(files, options = {}) {
	const fileArray = Array.from(files);
	const results = [];
	for (const file of fileArray) {
		if (!file.type.startsWith("image/")) continue;
		try {
			const res = await compressImage(file, options);
			results.push(res);
		} catch (err) {
			console.error(`Failed to compress image ${file.name}:`, err);
		}
	}
	return results;
}
var adminGetDashboardStatsServerFn = async () => {
	return apiFetch("/api/analytics");
};
var adminListOrdersServerFn = async ({ data } = {}) => {
	let filtered = await apiFetch("/api/orders");
	if (data?.status && data.status !== "all") filtered = filtered.filter((o) => o.status === data.status);
	if (data?.search) {
		const term = data.search.toLowerCase();
		filtered = filtered.filter((o) => o.id.toLowerCase().includes(term) || o.email.toLowerCase().includes(term) || o.phone.toLowerCase().includes(term));
	}
	return filtered.slice(0, data?.limit ?? 100);
};
var adminUpdateOrderStatusServerFn = async ({ data }) => {
	await apiFetch(`/api/orders/${data.id}/status`, {
		method: "PATCH",
		body: JSON.stringify({ status: data.status })
	});
	return {
		ok: true,
		id: data.id,
		status: data.status
	};
};
var adminProcessResolutionServerFn = async ({ data }) => {
	const order = await apiFetch(`/api/orders/${data.id}`);
	if (!order || !order.resolution) return {
		ok: false,
		error: "No open resolution found"
	};
	if (data.action === "approve") {
		order.resolution.status = order.resolution.type === "cancellation" ? "cancelled" : "refunded";
		if (data.note) order.resolution.note = `${order.resolution.note ? `${order.resolution.note} — ` : ""}Admin note: ${data.note}`;
	} else order.resolution = null;
	await apiFetch(`/api/orders/${data.id}/resolve`, {
		method: "POST",
		body: JSON.stringify({ resolution: order.resolution })
	});
	return {
		ok: true,
		resolution: order.resolution
	};
};
var adminDeleteOrderServerFn = async ({ data }) => {
	await apiFetch(`/api/orders/${data.id}`, { method: "DELETE" });
	return {
		ok: true,
		id: data.id
	};
};
var adminClearAllOrdersServerFn = async () => {
	await apiFetch("/api/orders", { method: "DELETE" });
	return { ok: true };
};
var getProductsServerFn = async () => {
	return apiFetch("/api/products");
};
var adminSaveProductServerFn = async ({ data }) => {
	return {
		ok: true,
		slug: (await apiFetch("/api/products", {
			method: "POST",
			body: JSON.stringify(data)
		})).slug
	};
};
var adminToggleProductStockServerFn = async ({ data }) => {
	await apiFetch("/api/products/stock", {
		method: "POST",
		body: JSON.stringify(data)
	});
	return { ok: true };
};
var adminDeleteProductServerFn = async ({ data }) => {
	await apiFetch(`/api/products/${data.slug}`, { method: "DELETE" });
	return { ok: true };
};
var adminListReviewsServerFn = async ({ data } = {}) => {
	const params = new URLSearchParams();
	if (data?.slug) params.set("slug", data.slug);
	if (data?.status) params.set("status", data.status);
	const q = params.toString() ? `?${params.toString()}` : "";
	return apiFetch(`/api/reviews${q}`);
};
var adminModerateReviewServerFn = async ({ data }) => {
	if (data.action === "delete") {
		await apiFetch(`/api/reviews/${data.id}`, { method: "DELETE" });
		return {
			ok: true,
			id: data.id
		};
	}
	const status = data.action === "publish" ? "published" : data.action === "reject" ? "rejected" : data.status || "published";
	await apiFetch(`/api/reviews/${data.id}`, {
		method: "PATCH",
		body: JSON.stringify({ status })
	});
	return {
		ok: true,
		id: data.id,
		status
	};
};
var adminListQuestionsServerFn = async ({ data } = {}) => {
	const params = new URLSearchParams();
	if (data?.slug) params.set("slug", data.slug);
	if (data?.status) params.set("status", data.status);
	const q = params.toString() ? `?${params.toString()}` : "";
	return apiFetch(`/api/questions${q}`);
};
var adminAnswerQuestionServerFn = async ({ data }) => {
	await apiFetch(`/api/questions/${data.id}`, {
		method: "PATCH",
		body: JSON.stringify({
			answer: data.answer,
			answeredBy: data.answeredBy
		})
	});
	return {
		ok: true,
		id: data.id
	};
};
var adminDeleteQuestionServerFn = async ({ data }) => {
	await apiFetch(`/api/questions/${data.id}`, { method: "DELETE" });
	return {
		ok: true,
		id: data.id
	};
};
var adminListTicketsServerFn = async ({ data } = {}) => {
	const query = data?.status && data.status !== "all" ? `?status=${encodeURIComponent(data.status)}` : "";
	const tickets = await apiFetch(`/api/tickets${query}`);
	if (data?.search) {
		const term = data.search.toLowerCase();
		return tickets.filter((t) => t.id.toLowerCase().includes(term) || t.contact.toLowerCase().includes(term) || t.message.toLowerCase().includes(term) || t.topic.toLowerCase().includes(term));
	}
	return tickets;
};
var adminUpdateTicketServerFn = async ({ data }) => {
	await apiFetch(`/api/tickets/${data.id}`, {
		method: "PATCH",
		body: JSON.stringify({
			status: data.status,
			reply: data.reply
		})
	});
	return { ok: true };
};
var adminListPromosServerFn = async () => {
	return apiFetch("/api/promos");
};
var adminSavePromoServerFn = async ({ data }) => {
	await apiFetch("/api/promos", {
		method: "POST",
		body: JSON.stringify(data)
	});
	return {
		ok: true,
		code: data.code
	};
};
var adminTogglePromoServerFn = async ({ data }) => {
	await apiFetch(`/api/promos/${data.code}`, {
		method: "PATCH",
		body: JSON.stringify({ isActive: data.isActive })
	});
	return { ok: true };
};
var adminDeletePromoServerFn = async ({ data }) => {
	await apiFetch(`/api/promos/${data.code}`, { method: "DELETE" });
	return { ok: true };
};
var adminListStockAlertsServerFn = async () => {
	return apiFetch("/api/alerts");
};
var adminNotifyStockAlertServerFn = async ({ data }) => {
	return apiFetch(`/api/alerts/${data.id}/notify`, { method: "POST" });
};
function getDisplayImageUrl(keyOrUrl) {
	if (!keyOrUrl) return "/products/100g-gold-asafoetida-powder/img-1.jpg";
	if (keyOrUrl.startsWith("data:") || keyOrUrl.startsWith("http://") || keyOrUrl.startsWith("https://") || keyOrUrl.startsWith("/")) return keyOrUrl;
	const match = PRESET_PRODUCT_IMAGES.find((p) => p.key === keyOrUrl);
	return match ? match.url : "/products/100g-gold-asafoetida-powder/img-1.jpg";
}
function formatStatus(val) {
	if (val === null || val === void 0) return "";
	return String(val).replace(/_/g, " ");
}
function AdminDashboardPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [stats, setStats] = (0, import_react.useState)(DEFAULT_DASHBOARD_STATS);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [products, setProducts] = (0, import_react.useState)(INITIAL_PRODUCTS);
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [questions, setQuestions] = (0, import_react.useState)([]);
	const [tickets, setTickets] = (0, import_react.useState)([]);
	const [promos, setPromos] = (0, import_react.useState)([]);
	const [alerts, setAlerts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [isPending, startTransition] = (0, import_react.useTransition)();
	const [orderSearch, setOrderSearch] = (0, import_react.useState)("");
	const [orderStatusFilter, setOrderStatusFilter] = (0, import_react.useState)("all");
	const [selectedOrder, setSelectedOrder] = (0, import_react.useState)(null);
	const [productSearch, setProductSearch] = (0, import_react.useState)("");
	const [productFormatFilter, setProductFormatFilter] = (0, import_react.useState)("all");
	const [productDialogOpen, setProductDialogOpen] = (0, import_react.useState)(false);
	const [editingProduct, setEditingProduct] = (0, import_react.useState)(null);
	const [newGalleryUrl, setNewGalleryUrl] = (0, import_react.useState)("");
	const [quickPriceProduct, setQuickPriceProduct] = (0, import_react.useState)(null);
	const [quickVariants, setQuickVariants] = (0, import_react.useState)([]);
	const [metrics, setMetrics] = (0, import_react.useState)(DEFAULT_METRICS);
	const [simRawCost, setSimRawCost] = (0, import_react.useState)(2800);
	const [simCompounding, setSimCompounding] = (0, import_react.useState)(400);
	const [simPackaging, setSimPackaging] = (0, import_react.useState)(25);
	const [simFreight, setSimFreight] = (0, import_react.useState)(15);
	const [simMarginPct, setSimMarginPct] = (0, import_react.useState)(35);
	const [exportDeals, setExportDeals] = (0, import_react.useState)(DEFAULT_EXPORT_DEALS);
	const [exportSearch, setExportSearch] = (0, import_react.useState)("");
	const [exportStageFilter, setExportStageFilter] = (0, import_react.useState)("all");
	const [newDealDialogOpen, setNewDealDialogOpen] = (0, import_react.useState)(false);
	const [editingDeal, setEditingDeal] = (0, import_react.useState)({});
	const [adminMessages, setAdminMessages] = (0, import_react.useState)(DEFAULT_ADMIN_MESSAGES);
	const [msgCategoryFilter, setMsgCategoryFilter] = (0, import_react.useState)("all");
	const [msgStatusFilter, setMsgStatusFilter] = (0, import_react.useState)("all");
	const [msgSearch, setMsgSearch] = (0, import_react.useState)("");
	const [activeMessage, setActiveMessage] = (0, import_react.useState)(null);
	const [messageNoteInput, setMessageNoteInput] = (0, import_react.useState)("");
	const [answeringQuestion, setAnsweringQuestion] = (0, import_react.useState)(null);
	const [answerText, setAnswerText] = (0, import_react.useState)("");
	const [respondingTicket, setRespondingTicket] = (0, import_react.useState)(null);
	const [ticketReplyText, setTicketReplyText] = (0, import_react.useState)("");
	const [ticketStatusVal, setTicketStatusVal] = (0, import_react.useState)("open");
	const [promoDialogOpen, setPromoDialogOpen] = (0, import_react.useState)(false);
	const [editingPromo, setEditingPromo] = (0, import_react.useState)({
		code: "",
		label: "",
		description: "",
		percentOff: "",
		amountOff: "",
		minSubtotal: "",
		freeShipping: false,
		automatic: false,
		isActive: true
	});
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const [loginUsername, setLoginUsername] = (0, import_react.useState)("admin");
	const [loginPassword, setLoginPassword] = (0, import_react.useState)("admin123");
	const [loginError, setLoginError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setMounted(true);
		if (typeof window !== "undefined") {
			try {
				const savedMetrics = localStorage.getItem("yg_calc_metrics");
				if (savedMetrics) setMetrics(JSON.parse(savedMetrics));
			} catch {}
			try {
				const savedDeals = localStorage.getItem("yg_export_deals");
				if (savedDeals) setExportDeals(JSON.parse(savedDeals));
			} catch {}
			try {
				const savedMsgs = localStorage.getItem("yg_admin_messages");
				if (savedMsgs) setAdminMessages(JSON.parse(savedMsgs));
			} catch {}
			try {
				const url = new URL(window.location.href);
				if (url.searchParams.get("auth") === "true" || url.searchParams.get("direct") === "true") {
					localStorage.setItem("yg_admin_auth", "true");
					sessionStorage.setItem("yg_admin_auth", "true");
					setIsAuthenticated(true);
					return;
				}
			} catch {}
			if (sessionStorage.getItem("yg_admin_auth") === "true" || localStorage.getItem("yg_admin_auth") === "true") setIsAuthenticated(true);
		}
	}, []);
	const handleLogin = (e, force = false) => {
		if (e) e.preventDefault();
		setLoginError("");
		const u = loginUsername.trim().toLowerCase();
		const p = loginPassword.trim();
		if (force || u === "admin" && p === "admin123" || u === "admin" && p === "" || !u && !p) {
			if (typeof window !== "undefined") {
				sessionStorage.setItem("yg_admin_auth", "true");
				localStorage.setItem("yg_admin_auth", "true");
			}
			setIsAuthenticated(true);
			toast.success("Welcome, Administrator!");
		} else setLoginError("Invalid credentials. Please use Username: admin and Password: admin123");
	};
	const handleLogout = () => {
		if (typeof window !== "undefined") {
			sessionStorage.removeItem("yg_admin_auth");
			localStorage.removeItem("yg_admin_auth");
		}
		setIsAuthenticated(false);
		toast.info("Logged out from Admin Panel");
	};
	const loadAllData = async () => {
		setLoading(true);
		try {
			const [dashStatsRes, orderListRes, prodListRes, revListRes, qListRes, ticketListRes, promoListRes, alertListRes] = await Promise.allSettled([
				adminGetDashboardStatsServerFn(),
				adminListOrdersServerFn({ data: {} }),
				getProductsServerFn(),
				adminListReviewsServerFn({ data: {} }),
				adminListQuestionsServerFn({ data: {} }),
				adminListTicketsServerFn({ data: {} }),
				adminListPromosServerFn(),
				adminListStockAlertsServerFn()
			]);
			if (dashStatsRes.status === "fulfilled" && dashStatsRes.value) setStats(dashStatsRes.value);
			if (orderListRes.status === "fulfilled" && Array.isArray(orderListRes.value)) setOrders(orderListRes.value);
			if (prodListRes.status === "fulfilled" && Array.isArray(prodListRes.value) && prodListRes.value.length > 0) {
				setProducts(prodListRes.value);
				saveLiveProducts(prodListRes.value);
			}
			if (revListRes.status === "fulfilled" && Array.isArray(revListRes.value)) setReviews(revListRes.value);
			if (qListRes.status === "fulfilled" && Array.isArray(qListRes.value)) setQuestions(qListRes.value);
			if (ticketListRes.status === "fulfilled" && Array.isArray(ticketListRes.value)) setTickets(ticketListRes.value);
			if (promoListRes.status === "fulfilled" && Array.isArray(promoListRes.value)) {
				setPromos(promoListRes.value);
				saveLivePromos(promoListRes.value);
			}
			if (alertListRes.status === "fulfilled" && Array.isArray(alertListRes.value)) setAlerts(alertListRes.value);
		} catch (err) {
			console.error("Admin data fetch fallback handled:", err);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isAuthenticated) loadAllData();
	}, [isAuthenticated]);
	const handleUpdateOrderStatus = async (id, newStatus) => {
		try {
			await adminUpdateOrderStatusServerFn({ data: {
				id,
				status: newStatus
			} });
			toast.success(`Order ${id} status updated to ${newStatus}`);
			setOrders((prev) => prev.map((o) => o.id === id ? {
				...o,
				status: newStatus
			} : o));
			if (selectedOrder && selectedOrder.id === id) setSelectedOrder((prev) => prev ? {
				...prev,
				status: newStatus
			} : null);
		} catch (err) {
			toast.error("Failed to update status");
		}
	};
	const handleProcessResolution = async (id, action, note) => {
		try {
			await adminProcessResolutionServerFn({ data: {
				id,
				action,
				note
			} });
			toast.success(`Resolution ${action === "approve" ? "approved" : "rejected"}`);
			loadAllData();
			setSelectedOrder(null);
		} catch (err) {
			toast.error("Failed to process resolution");
		}
	};
	const handleDeleteOrder = async (id) => {
		if (!window.confirm(`Delete order ${id}?`)) return;
		try {
			await adminDeleteOrderServerFn({ data: { id } });
			toast.success(`Order ${id} deleted`);
			setOrders((prev) => prev.filter((o) => o.id !== id));
			if (selectedOrder && selectedOrder.id === id) setSelectedOrder(null);
			loadAllData();
		} catch {
			toast.error("Failed to delete order");
		}
	};
	const handleClearAllOrders = async () => {
		if (!window.confirm("Are you sure you want to clear all orders? This will delete all order history.")) return;
		try {
			await adminClearAllOrdersServerFn();
			toast.success("All test orders cleared");
			setOrders([]);
			setSelectedOrder(null);
			loadAllData();
		} catch {
			toast.error("Failed to clear orders");
		}
	};
	const handleOpenNewProduct = () => {
		setEditingProduct({
			slug: "",
			name: "",
			tagline: "",
			format: "powder",
			glutenFree: false,
			bestseller: false,
			image: "powder",
			gallery: ["powder"],
			description: "",
			ingredients: "",
			usage: "",
			shelfLife: "12 months from packing. Store in an airtight container.",
			inStock: true,
			stockLeft: null,
			rating: 4.8,
			reviews: 120,
			variants: [{
				id: "50g",
				label: "50 g",
				price: 150,
				mrp: 180,
				stock: 100
			}]
		});
		setProductDialogOpen(true);
	};
	const handleEditProduct = (p) => {
		let gallery = [];
		try {
			gallery = JSON.parse(p.gallery);
		} catch {
			gallery = [p.image];
		}
		setEditingProduct({
			slug: p.slug,
			name: p.name,
			tagline: p.tagline,
			format: p.format,
			glutenFree: Boolean(p.gluten_free),
			bestseller: Boolean(p.bestseller),
			image: p.image,
			gallery,
			description: p.description,
			ingredients: p.ingredients,
			usage: p.usage,
			shelfLife: p.shelf_life || "12 months from packing. Store in an airtight container.",
			inStock: Boolean(p.in_stock),
			stockLeft: p.stock_left,
			rating: Math.min(4.9, Math.max(4.5, Number(p.rating || 4.8))),
			reviews: p.reviews ?? 100,
			variants: (p.variants || []).map((v) => ({
				id: v.id,
				label: v.label,
				price: v.price,
				mrp: v.mrp,
				stock: v.stock
			}))
		});
		setProductDialogOpen(true);
	};
	const handleImageFileUpload = async (e, isGallery = false) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const toastId = toast.loading("Compressing and optimizing image(s)...");
		try {
			if (!isGallery) {
				const file = files[0];
				if (!file) return;
				const res = await compressImage(file, {
					maxWidth: 1600,
					maxHeight: 1600,
					quality: .88,
					mimeType: "image/webp"
				});
				setEditingProduct((prev) => prev ? {
					...prev,
					image: res.dataUrl
				} : null);
				toast.success(`Cover image compressed: ${(res.originalSize / 1024).toFixed(0)}KB → ${(res.compressedSize / 1024).toFixed(0)}KB (-${res.compressionRatio}%)`, { id: toastId });
			} else {
				const results = await compressMultipleImages(files, {
					maxWidth: 1600,
					maxHeight: 1600,
					quality: .88,
					mimeType: "image/webp"
				});
				const newUrls = results.map((r) => r.dataUrl);
				setEditingProduct((prev) => {
					if (!prev) return null;
					const current = Array.isArray(prev.gallery) ? prev.gallery : [];
					return {
						...prev,
						gallery: [...current, ...newUrls]
					};
				});
				const savedKb = ((results.reduce((acc, r) => acc + r.originalSize, 0) - results.reduce((acc, r) => acc + r.compressedSize, 0)) / 1024).toFixed(0);
				toast.success(`${results.length} gallery image(s) compressed & added (saved ${savedKb}KB)`, { id: toastId });
			}
		} catch (err) {
			console.error("Image upload compression failed:", err);
			toast.error("Failed to compress image", { id: toastId });
		} finally {
			e.target.value = "";
		}
	};
	const handleSaveProduct = async () => {
		if (!editingProduct || !editingProduct.slug || !editingProduct.name) {
			toast.error("Slug and Name are required");
			return;
		}
		const r = Number(editingProduct.rating ?? 4.8);
		if (isNaN(r) || r < 4.5 || r > 4.9) {
			toast.error("Rating must be between 4.5 and 4.9");
			return;
		}
		try {
			await adminSaveProductServerFn({ data: editingProduct });
			const currentLive = getLiveProducts();
			const existsIndex = currentLive.findIndex((p) => p.slug === editingProduct.slug);
			const updatedList = [...currentLive];
			if (existsIndex >= 0) updatedList[existsIndex] = {
				...updatedList[existsIndex],
				...editingProduct
			};
			else updatedList.push(editingProduct);
			saveLiveProducts(updatedList);
			toast.success(`Product "${editingProduct.name}" saved successfully`);
			setProductDialogOpen(false);
			loadAllData();
		} catch (err) {
			toast.error("Failed to save product");
		}
	};
	const handleToggleStock = async (slug, currentInStock) => {
		try {
			const newStock = !currentInStock;
			await adminToggleProductStockServerFn({ data: {
				slug,
				inStock: newStock,
				stockLeft: newStock ? 50 : 0
			} });
			toast.success(`Stock status updated for ${slug}`);
			setProducts((prev) => prev.map((p) => p.slug === slug ? {
				...p,
				in_stock: newStock ? 1 : 0
			} : p));
			const updatedList = getLiveProducts().map((p) => p.slug === slug ? {
				...p,
				inStock: newStock,
				stockLeft: newStock ? 50 : 0
			} : p);
			saveLiveProducts(updatedList);
		} catch (err) {
			toast.error("Failed to toggle stock");
		}
	};
	const handleDeleteProduct = async (slug) => {
		if (!confirm(`Are you sure you want to delete ${slug}?`)) return;
		try {
			await adminDeleteProductServerFn({ data: { slug } });
			toast.success("Product deleted");
			setProducts((prev) => prev.filter((p) => p.slug !== slug));
			let deletedSlugs = [];
			try {
				const delRaw = localStorage.getItem("yg_deleted_products");
				if (delRaw) deletedSlugs = JSON.parse(delRaw);
			} catch {}
			if (!deletedSlugs.includes(slug)) {
				deletedSlugs.push(slug);
				localStorage.setItem("yg_deleted_products", JSON.stringify(deletedSlugs));
			}
			const currentLive = getLiveProducts().filter((p) => p.slug !== slug);
			saveLiveProducts(currentLive);
		} catch (err) {
			toast.error("Failed to delete product");
		}
	};
	const handleModerateReview = async (id, action) => {
		try {
			await adminModerateReviewServerFn({ data: {
				id,
				action
			} });
			toast.success(`Review ${action}ed`);
			if (action === "delete") setReviews((prev) => prev.filter((r) => r.id !== id));
			else {
				const newStatus = action === "publish" ? "published" : "rejected";
				setReviews((prev) => prev.map((r) => r.id === id ? {
					...r,
					status: newStatus
				} : r));
			}
		} catch (err) {
			toast.error("Failed to moderate review");
		}
	};
	const handleAnswerQuestion = async () => {
		if (!answeringQuestion || !answerText.trim()) return;
		try {
			await adminAnswerQuestionServerFn({ data: {
				id: answeringQuestion.id,
				answer: answerText.trim(),
				answeredBy: "Y.G team"
			} });
			toast.success("Answer published to product page!");
			setQuestions((prev) => prev.map((q) => q.id === answeringQuestion.id ? {
				...q,
				answer: answerText.trim(),
				answered_by: "Y.G team",
				status: "published"
			} : q));
			setAnsweringQuestion(null);
			setAnswerText("");
		} catch (err) {
			toast.error("Failed to submit answer");
		}
	};
	const handleDeleteQuestion = async (id) => {
		if (!confirm("Delete this question?")) return;
		try {
			await adminDeleteQuestionServerFn({ data: { id } });
			toast.success("Question deleted");
			setQuestions((prev) => prev.filter((q) => q.id !== id));
		} catch (err) {
			toast.error("Failed to delete question");
		}
	};
	const handleSaveTicketReply = async () => {
		if (!respondingTicket) return;
		try {
			await adminUpdateTicketServerFn({ data: {
				id: respondingTicket.id,
				status: ticketStatusVal,
				reply: ticketReplyText.trim() || void 0
			} });
			toast.success(`Ticket ${respondingTicket.id} updated`);
			setTickets((prev) => prev.map((t) => t.id === respondingTicket.id ? {
				...t,
				status: ticketStatusVal,
				reply: ticketReplyText.trim() || null
			} : t));
			setRespondingTicket(null);
		} catch (err) {
			toast.error("Failed to update ticket");
		}
	};
	const handleSavePromo = async () => {
		if (!editingPromo.code || !editingPromo.label) {
			toast.error("Code and label are required");
			return;
		}
		try {
			await adminSavePromoServerFn({ data: {
				code: editingPromo.code,
				label: editingPromo.label,
				description: editingPromo.description,
				percentOff: editingPromo.percentOff ? Number(editingPromo.percentOff) : null,
				amountOff: editingPromo.amountOff ? Number(editingPromo.amountOff) : null,
				minSubtotal: editingPromo.minSubtotal ? Number(editingPromo.minSubtotal) : null,
				freeShipping: editingPromo.freeShipping,
				automatic: editingPromo.automatic,
				isActive: editingPromo.isActive
			} });
			const currentLive = getLivePromos();
			const codeUpper = editingPromo.code.trim().toUpperCase();
			const existsIdx = currentLive.findIndex((p) => p.code === codeUpper);
			const newPromoObj = {
				code: codeUpper,
				label: editingPromo.label,
				description: editingPromo.description,
				percentOff: editingPromo.percentOff ? Number(editingPromo.percentOff) : void 0,
				amountOff: editingPromo.amountOff ? Number(editingPromo.amountOff) : void 0,
				minSubtotal: editingPromo.minSubtotal ? Number(editingPromo.minSubtotal) : void 0,
				freeShipping: editingPromo.freeShipping,
				automatic: editingPromo.automatic,
				isActive: editingPromo.isActive
			};
			const updated = [...currentLive];
			if (existsIdx >= 0) updated[existsIdx] = newPromoObj;
			else updated.push(newPromoObj);
			saveLivePromos(updated);
			toast.success(`Promo code ${editingPromo.code} saved`);
			setPromoDialogOpen(false);
			loadAllData();
		} catch (err) {
			toast.error("Failed to save promo");
		}
	};
	const handleTogglePromo = async (code, currentActive) => {
		try {
			const nextActive = !currentActive;
			await adminTogglePromoServerFn({ data: {
				code,
				isActive: nextActive
			} });
			toast.success(`Promo ${code} ${nextActive ? "activated" : "deactivated"}`);
			setPromos((prev) => prev.map((pr) => pr.code === code ? {
				...pr,
				is_active: nextActive ? 1 : 0
			} : pr));
			const currentLive = getLivePromos();
			const codeUpper = code.trim().toUpperCase();
			const updated = currentLive.map((p) => p.code === codeUpper ? {
				...p,
				isActive: nextActive
			} : p);
			saveLivePromos(updated);
		} catch (err) {
			toast.error("Failed to toggle promo");
		}
	};
	const handleDeletePromo = async (code) => {
		if (!confirm(`Delete promo code ${code}?`)) return;
		try {
			await adminDeletePromoServerFn({ data: { code } });
			toast.success("Promo deleted");
			setPromos((prev) => prev.filter((pr) => pr.code !== code));
			const currentLive = getLivePromos();
			const codeUpper = code.trim().toUpperCase();
			const updated = currentLive.filter((p) => p.code !== codeUpper);
			saveLivePromos(updated);
		} catch (err) {
			toast.error("Failed to delete promo");
		}
	};
	const handleNotifyAlert = async (id) => {
		try {
			await adminNotifyStockAlertServerFn({ data: { id } });
			toast.success("Marked as customer notified!");
			setAlerts((prev) => prev.map((a) => a.id === id ? {
				...a,
				notified: 1,
				notified_at: Date.now()
			} : a));
		} catch (err) {
			toast.error("Failed to update alert");
		}
	};
	const handleOpenQuickPrice = (p) => {
		setQuickPriceProduct(p);
		setQuickVariants((p.variants || []).map((v) => ({
			id: v.id,
			label: v.label,
			price: v.price,
			mrp: v.mrp,
			stock: v.stock
		})));
	};
	const handleSaveQuickPrices = async () => {
		if (!quickPriceProduct) return;
		let gallery = [];
		try {
			gallery = JSON.parse(quickPriceProduct.gallery);
		} catch {
			gallery = [quickPriceProduct.image];
		}
		const input = {
			slug: quickPriceProduct.slug,
			name: quickPriceProduct.name,
			tagline: quickPriceProduct.tagline,
			format: quickPriceProduct.format,
			glutenFree: Boolean(quickPriceProduct.gluten_free),
			bestseller: Boolean(quickPriceProduct.bestseller),
			image: quickPriceProduct.image,
			gallery,
			description: quickPriceProduct.description,
			ingredients: quickPriceProduct.ingredients,
			usage: quickPriceProduct.usage,
			shelfLife: quickPriceProduct.shelf_life || "12 months from packing. Store in an airtight container.",
			inStock: Boolean(quickPriceProduct.in_stock),
			stockLeft: quickPriceProduct.stock_left,
			rating: Math.min(4.9, Math.max(4.5, Number(quickPriceProduct.rating || 4.8))),
			reviews: quickPriceProduct.reviews ?? 100,
			variants: quickVariants
		};
		try {
			await adminSaveProductServerFn({ data: input });
			const updatedList = getLiveProducts().map((p) => {
				if (p.slug === input.slug) return {
					...p,
					variants: quickVariants.map((qv) => ({
						...qv,
						price: Number(qv.price),
						mrp: qv.mrp ? Number(qv.mrp) : void 0,
						stock: Number(qv.stock)
					}))
				};
				return p;
			});
			saveLiveProducts(updatedList);
			toast.success(`Prices updated for ${quickPriceProduct.name}!`);
			setQuickPriceProduct(null);
			loadAllData();
		} catch {
			toast.error("Failed to update product prices");
		}
	};
	const handleSaveMetrics = (newMetrics) => {
		setMetrics(newMetrics);
		saveLiveMetrics(newMetrics);
		toast.success("Calculation metrics saved successfully!");
	};
	const handleResetMetrics = () => {
		if (!confirm("Reset all calculation metrics to system defaults?")) return;
		setMetrics(DEFAULT_METRICS);
		resetLiveMetrics();
		toast.info("Calculation metrics reset to factory defaults");
	};
	const handleSaveExportDeal = (deal) => {
		setExportDeals((prev) => {
			const updated = prev.some((d) => d.id === deal.id) ? prev.map((d) => d.id === deal.id ? deal : d) : [deal, ...prev];
			if (typeof window !== "undefined") localStorage.setItem("yg_export_deals", JSON.stringify(updated));
			return updated;
		});
		setNewDealDialogOpen(false);
		setEditingDeal({});
		toast.success("Export deal saved successfully");
	};
	const handleDeleteExportDeal = (id) => {
		if (!confirm(`Delete export deal ${id}?`)) return;
		setExportDeals((prev) => {
			const updated = prev.filter((d) => d.id !== id);
			if (typeof window !== "undefined") localStorage.setItem("yg_export_deals", JSON.stringify(updated));
			return updated;
		});
		toast.success("Export deal removed");
	};
	const handleUpdateDealStage = (id, stage) => {
		setExportDeals((prev) => {
			const updated = prev.map((d) => d.id === id ? {
				...d,
				stage
			} : d);
			if (typeof window !== "undefined") localStorage.setItem("yg_export_deals", JSON.stringify(updated));
			return updated;
		});
		toast.success(`Deal stage updated to ${formatStatus(stage)}`);
	};
	const handleExportDealsCsv = () => {
		const headers = [
			"Deal ID",
			"Company Name",
			"Contact Person",
			"Country",
			"Destination Port",
			"Email",
			"Phone",
			"Product Type",
			"Quantity",
			"Currency",
			"Deal Value",
			"Stage",
			"Incoterms",
			"Payment Terms",
			"Date"
		];
		const rows = exportDeals.map((d) => [
			`"${d.id}"`,
			`"${d.companyName}"`,
			`"${d.contactPerson}"`,
			`"${d.country}"`,
			`"${d.destinationPort}"`,
			`"${d.email}"`,
			`"${d.phone}"`,
			`"${d.productType}"`,
			`"${d.quantityMetric}"`,
			`"${d.dealValueCurrency}"`,
			d.dealValueAmount,
			`"${d.stage}"`,
			`"${d.incoterms}"`,
			`"${d.paymentTerms}"`,
			`"${d.createdAt}"`
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `yg_export_deals_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success("Export deals downloaded as CSV");
	};
	const handleUpdateMessageStatus = (id, status) => {
		setAdminMessages((prev) => {
			const updated = prev.map((m) => m.id === id ? {
				...m,
				status
			} : m);
			if (typeof window !== "undefined") localStorage.setItem("yg_admin_messages", JSON.stringify(updated));
			return updated;
		});
		if (activeMessage && activeMessage.id === id) setActiveMessage((prev) => prev ? {
			...prev,
			status
		} : null);
		toast.success(`Message marked as ${status}`);
	};
	const handleSaveMessageNote = (id) => {
		if (!messageNoteInput.trim()) return;
		setAdminMessages((prev) => {
			const updated = prev.map((m) => m.id === id ? {
				...m,
				adminNotes: messageNoteInput.trim()
			} : m);
			if (typeof window !== "undefined") localStorage.setItem("yg_admin_messages", JSON.stringify(updated));
			return updated;
		});
		if (activeMessage && activeMessage.id === id) setActiveMessage((prev) => prev ? {
			...prev,
			adminNotes: messageNoteInput.trim()
		} : null);
		setMessageNoteInput("");
		toast.success("Internal admin note saved");
	};
	const handleDeleteMessage = (id) => {
		if (!confirm("Delete this inquiry message?")) return;
		setAdminMessages((prev) => {
			const updated = prev.filter((m) => m.id !== id);
			if (typeof window !== "undefined") localStorage.setItem("yg_admin_messages", JSON.stringify(updated));
			return updated;
		});
		if (activeMessage && activeMessage.id === id) setActiveMessage(null);
		toast.success("Message deleted");
	};
	const handleExportMessagesCsv = () => {
		const headers = [
			"Message ID",
			"Sender Name",
			"Email",
			"Phone",
			"Category",
			"Subject",
			"Status",
			"Date",
			"Admin Note"
		];
		const rows = adminMessages.map((m) => [
			`"${m.id}"`,
			`"${m.senderName}"`,
			`"${m.email}"`,
			`"${m.phone}"`,
			`"${m.category}"`,
			`"${m.subject.replace(/"/g, "\"\"")}"`,
			`"${m.status}"`,
			`"${m.receivedAt}"`,
			`"${(m.adminNotes || "").replace(/"/g, "\"\"")}"`
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `yg_customer_inquiries_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success("Customer inquiries downloaded as CSV");
	};
	const filteredOrders = (orders || []).filter((o) => {
		if (!o) return false;
		const matchesStatus = orderStatusFilter === "all" || o.status === orderStatusFilter;
		const matchesSearch = !orderSearch || o.id && o.id.toLowerCase().includes(orderSearch.toLowerCase()) || o.email && o.email.toLowerCase().includes(orderSearch.toLowerCase()) || o.phone && String(o.phone).includes(orderSearch);
		return matchesStatus && matchesSearch;
	});
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[85vh] flex items-center justify-center px-4 py-12 bg-[#FAF3D6]/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-card border border-[#E8DEC8] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC700] text-[#181206] mb-2 shadow-md font-display font-black text-xl",
							children: "YG"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight text-foreground font-display",
							children: "Y.G Admin Portal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-muted-foreground",
							children: "Tirunelveli Works & Store Administration Portal. Sign in to manage products, pricing, orders, calculation metrics, export deals, and messages."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: () => handleLogin(void 0, true),
							className: "w-full h-12 text-sm font-bold bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.99]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#181206]" }), "Enter Admin Dashboard (Instant Access)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-foreground/80 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-primary",
								children: "Login Credentials:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 font-mono text-[11px] text-muted-foreground",
								children: [
									"Username: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground font-semibold",
										children: "admin"
									}),
									" \xA0|\xA0 Password: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground font-semibold",
										children: "admin123"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "border-primary/40 text-primary text-[10px]",
								children: "Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex py-1 items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-grow border-t border-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-shrink mx-3 text-[11px] text-muted-foreground uppercase font-medium",
									children: "or verify credentials"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-grow border-t border-border" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => handleLogin(e),
					className: "space-y-4",
					children: [
						loginError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-xs font-medium border border-destructive/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loginError })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "admin-username",
								className: "text-xs font-semibold",
								children: "Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "admin-username",
								type: "text",
								placeholder: "admin",
								value: loginUsername,
								onChange: (e) => setLoginUsername(e.target.value),
								className: "bg-background border-[#E8DEC8]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "admin-password",
								className: "text-xs font-semibold",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "admin-password",
								type: "password",
								placeholder: "••••••••",
								value: loginPassword,
								onChange: (e) => setLoginPassword(e.target.value),
								className: "bg-background border-[#E8DEC8]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "outline",
							className: "w-full font-semibold border-primary/40 hover:bg-primary/10 mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 mr-2 text-primary" }), "Sign In with Credentials"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2 text-center border-t border-[#E8DEC8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "text-xs text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "← Return to Storefront"
						})
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/20 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex h-16 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold",
							children: "YG"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base font-semibold leading-tight",
								children: "Y.G Admin Portal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-[10px] uppercase border-primary/30 text-primary",
								children: "SQLite Live"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Tirunelveli Works Management Hub"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: loadAllData,
								disabled: loading,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}` }), "Refresh"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "View Storefront"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: handleLogout,
								className: "gap-1.5 text-destructive hover:bg-destructive hover:text-destructive-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), "Log Out"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "flex flex-wrap items-center gap-1.5 h-auto p-1.5 bg-muted/60 rounded-xl border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "overview",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-3.5 w-3.5" }), " Overview"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "orders",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5" }),
										" Orders",
										orders.filter((o) => o.status === "placed" || o.status === "refund_requested").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-primary px-1.5 py-0.2 text-[10px] text-primary-foreground font-semibold",
											children: orders.filter((o) => o.status === "placed" || o.status === "refund_requested").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "products",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5" }), " Products & Pricing"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "metrics",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-3.5 w-3.5 text-primary" }), " Calculation Metrics"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "export_deals",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5 text-emerald-600" }),
										" Export Deals",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-emerald-600 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: exportDeals.length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "messages",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-amber-600" }),
										" Mails & Inquiries",
										adminMessages.filter((m) => m.status === "unread").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: adminMessages.filter((m) => m.status === "unread").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "reviews",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5" }),
										" Reviews",
										reviews.filter((r) => r.status === "pending").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-amber-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: reviews.filter((r) => r.status === "pending").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "questions",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5" }),
										" Q&A",
										questions.filter((q) => q.status === "pending" || !q.answer).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-[#D4AF37] px-1.5 py-0.2 text-[10px] text-[#181206] font-bold",
											children: questions.filter((q) => q.status === "pending" || !q.answer).length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "tickets",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "h-3.5 w-3.5" }),
										" Support",
										tickets.filter((t) => t.status === "open").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] text-white font-semibold",
											children: tickets.filter((t) => t.status === "open").length
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "promos",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }), " Promos"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "alerts",
									className: "py-2 px-3 flex items-center gap-1.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }),
										" Alerts",
										alerts.filter((a) => a.notified === 0).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full bg-muted-foreground px-1.5 py-0.2 text-[10px] text-background font-semibold",
											children: alerts.filter((a) => a.notified === 0).length
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "overview",
							className: "space-y-6",
							children: stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Total Revenue"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: formatPrice(stats.totalRevenue)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														"From ",
														stats.totalOrders,
														" total orders"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Orders Today"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.ordersPlacedToday
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: "New orders placed in last 24h"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Action Required"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.pendingReviewsCount + stats.openQuestionsCount + stats.openTicketsCount
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														stats.pendingReviewsCount,
														" reviews · ",
														stats.openQuestionsCount,
														" Qs · ",
														stats.openTicketsCount,
														" tickets"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium uppercase text-muted-foreground tracking-wider",
														children: "Inventory Watch"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid h-8 w-8 place-items-center rounded-lg bg-rose-500/10 text-rose-600",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" })
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-2xl font-bold font-display",
													children: stats.lowStockProductsCount
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														"Low stock or sold out (",
														stats.stockAlertsCount,
														" alerts waiting)"
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 lg:grid-cols-[1.5fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-base font-semibold",
												children: "7-Day Sales Trend"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Daily revenue from placed orders"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "secondary",
												className: "text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 mr-1" }), " Live"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 flex h-48 items-end gap-3 pt-4 border-b border-border",
											children: (stats?.recentSalesTrend || []).map((day, idx) => {
												const trend = stats?.recentSalesTrend || [];
												const maxRev = trend.length > 0 ? Math.max(...trend.map((d) => d.revenue), 1e3) : 1e3;
												const heightPct = Math.max(10, Math.round(day.revenue / maxRev * 100));
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 flex flex-col items-center gap-2 group",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity",
															children: formatPrice(day.revenue)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															style: { height: `${heightPct}%` },
															className: "w-full rounded-t-md bg-primary/80 group-hover:bg-primary transition-all duration-300 relative"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground font-medium",
															children: day.date
														})
													]
												}, idx);
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-base font-semibold",
												children: "Orders Pipeline"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mb-4",
												children: "Current order fulfillment stages"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-3",
												children: [
													{
														key: "placed",
														label: "New / Placed",
														color: "bg-[#D4AF37]"
													},
													{
														key: "packed",
														label: "Packed in Works",
														color: "bg-amber-500"
													},
													{
														key: "shipped",
														label: "Shipped with Courier",
														color: "bg-purple-500"
													},
													{
														key: "out",
														label: "Out for Delivery",
														color: "bg-[#FFC700]"
													},
													{
														key: "delivered",
														label: "Delivered",
														color: "bg-emerald-500"
													},
													{
														key: "refund_requested",
														label: "Refund Requested",
														color: "bg-rose-500"
													},
													{
														key: "cancelled",
														label: "Cancelled",
														color: "bg-zinc-500"
													}
												].map((st) => {
													const count = (stats?.ordersByStatus && stats.ordersByStatus[st.key]) ?? 0;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => {
															setOrderStatusFilter(st.key);
															setActiveTab("orders");
														},
														className: "flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2.5 w-2.5 rounded-full ${st.color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm font-medium",
																children: st.label
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: "outline",
															className: "font-mono text-xs",
															children: count
														})]
													}, st.key);
												})
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-base font-semibold",
											children: "Recent Orders"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Latest orders received across the store"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											onClick: () => setActiveTab("orders"),
											children: [
												"View all (",
												orders.length,
												")"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
												className: "border-b border-border text-xs uppercase text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Order ID"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Placed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Customer"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Items"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Total"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium",
														children: "Status"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "pb-3 font-medium text-right",
														children: "Action"
													})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-border/60",
												children: stats.recentOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													colSpan: 7,
													className: "py-8 text-center text-muted-foreground text-xs",
													children: "No orders yet. Live customer orders will appear here in real-time."
												}) }) : stats.recentOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "hover:bg-muted/30 transition-colors",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 font-mono font-semibold text-primary",
															children: o.id
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 text-xs text-muted-foreground",
															children: o.createdAt ? new Date(o.createdAt).toLocaleDateString("en-IN", {
																day: "numeric",
																month: "short",
																hour: "2-digit",
																minute: "2-digit"
															}) : "Recent"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3",
															children: o.email
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "py-3",
															children: [o.itemCount, " items"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 font-medium",
															children: formatPrice(o.total)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																variant: o.status === "delivered" ? "default" : o.status === "cancelled" ? "destructive" : "secondary",
																className: "capitalize text-xs",
																children: formatStatus(o.status)
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																size: "sm",
																variant: "ghost",
																onClick: () => {
																	const full = orders.find((x) => x.id === o.id);
																	if (full) setSelectedOrder(full);
																},
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 mr-1" }), " View"]
															})
														})
													]
												}, o.id))
											})]
										})
									})]
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "orders",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-4 sm:p-6 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative w-64",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												placeholder: "Search ID, email, phone...",
												value: orderSearch,
												onChange: (e) => setOrderSearch(e.target.value),
												className: "pl-9 text-xs"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: orderStatusFilter,
											onValueChange: setOrderStatusFilter,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "w-44 text-xs",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status filter" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "all",
													children: "All statuses"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "placed",
													children: "Placed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "packed",
													children: "Packed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "shipped",
													children: "Shipped"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "out",
													children: "Out for delivery"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "delivered",
													children: "Delivered"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "refund_requested",
													children: "Refund requested"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "cancelled",
													children: "Cancelled"
												})
											] })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground",
											children: [
												"Showing ",
												filteredOrders.length,
												" of ",
												orders.length,
												" orders"
											]
										}), orders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-8 text-xs text-destructive hover:bg-destructive/10 border-destructive/30",
											onClick: handleClearAllOrders,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3 mr-1" }), " Clear Test Orders"]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Order"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Customer & Address"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Items"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Payment & Total"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Status & Flow"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium text-right",
													children: "Actions"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: filteredOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 6,
												className: "p-8 text-center text-muted-foreground text-sm",
												children: "No orders in the database. New customer orders will appear here automatically."
											}) }) : filteredOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-muted/20 transition-colors",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono font-bold text-primary block",
																children: o.id
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-muted-foreground block",
																children: o.createdAt ? new Date(o.createdAt).toLocaleDateString("en-IN", {
																	day: "numeric",
																	month: "short",
																	hour: "2-digit",
																	minute: "2-digit"
																}) : "Recent"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																variant: "outline",
																className: "mt-1 text-[10px] uppercase",
																children: [o.delivery, " delivery"]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top max-w-xs",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "font-medium text-xs",
																children: [
																	o.address.firstName,
																	" ",
																	o.address.lastName
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs text-muted-foreground",
																children: o.email
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-xs text-muted-foreground",
																children: o.phone
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[11px] text-muted-foreground mt-1 line-clamp-1",
																children: [
																	o.address.line1,
																	", ",
																	o.address.city,
																	" ",
																	o.address.pin
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top max-w-xs",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "space-y-1",
															children: o.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-xs flex items-center justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "line-clamp-1",
																	children: [
																		it.qty,
																		" × ",
																		it.name,
																		" (",
																		it.variantLabel,
																		")"
																	]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-muted-foreground font-mono",
																	children: formatPrice(it.price * it.qty)
																})]
															}, idx))
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 align-top",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "font-bold text-sm",
																children: formatPrice(o.totals.total)
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																variant: "secondary",
																className: "text-[10px] uppercase mt-1",
																children: o.payment
															}),
															o.promoCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-[10px] text-emerald-600 font-medium mt-1",
																children: [
																	"Code: ",
																	o.promoCode,
																	" (-",
																	formatPrice(o.totals.discount),
																	")"
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1.5",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																	variant: o.status === "delivered" ? "default" : o.status === "cancelled" ? "destructive" : "secondary",
																	className: "capitalize text-xs block w-fit",
																	children: formatStatus(o.status)
																}),
																o.status === "placed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "packed"),
																	children: "Mark Packed →"
																}),
																o.status === "packed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "shipped"),
																	children: "Mark Shipped →"
																}),
																o.status === "shipped" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "out"),
																	children: "Mark Out for Delivery →"
																}),
																o.status === "out" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	onClick: () => handleUpdateOrderStatus(o.id, "delivered"),
																	children: "Mark Delivered ✓"
																}),
																o.resolution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-[11px] text-rose-600 font-medium bg-rose-50 p-1.5 rounded border border-rose-200",
																	children: [
																		o.resolution.type === "cancellation" ? "Cancellation" : "Refund",
																		": ",
																		o.resolution.reason
																	]
																})
															]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 align-top text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-end gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																size: "sm",
																variant: "outline",
																className: "h-8 text-xs",
																onClick: () => setSelectedOrder(o),
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 mr-1" }), " Details"]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																size: "icon",
																variant: "ghost",
																className: "h-8 w-8 text-muted-foreground hover:text-destructive",
																title: `Delete order ${o.id}`,
																onClick: () => handleDeleteOrder(o.id),
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
															})]
														})
													})
												]
											}, o.id))
										})]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "products",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-semibold",
											children: "Catalog & Product Flexibility"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Add products, edit details, adjust ratings (4.5–4.9), manage variants and shelf life"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											onClick: handleOpenNewProduct,
											className: "shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Add New Product"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-3 items-center justify-between mb-6 pb-4 border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 w-full gap-2 items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex-1 max-w-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5 absolute left-2.5 top-2.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Search products by name, slug, tagline...",
													value: productSearch,
													onChange: (e) => setProductSearch(e.target.value),
													className: "pl-8 h-8 text-xs"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: productFormatFilter,
												onValueChange: setProductFormatFilter,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 text-xs w-[170px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "All Formats" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "all",
														children: "All Formats"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "powder",
														children: "Powder"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "granules",
														children: "Granules"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "cake",
														children: "Solid Cake"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "combo",
														children: "Combo & Gift"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "wellness",
														children: "Health Mix (Wellness)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "pooja",
														children: "Pooja Sambrani"
													})
												] })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground shrink-0",
											children: [
												"Showing ",
												products.filter((p) => {
													const matchSearch = !productSearch.trim() || p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.slug.toLowerCase().includes(productSearch.toLowerCase()) || p.tagline.toLowerCase().includes(productSearch.toLowerCase());
													const matchFormat = productFormatFilter === "all" || p.format === productFormatFilter;
													return matchSearch && matchFormat;
												}).length,
												" of ",
												products.length,
												" products"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
										children: products.filter((p) => {
											const matchSearch = !productSearch.trim() || p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.slug.toLowerCase().includes(productSearch.toLowerCase()) || p.tagline.toLowerCase().includes(productSearch.toLowerCase());
											const matchFormat = productFormatFilter === "all" || p.format === productFormatFilter;
											return matchSearch && matchFormat;
										}).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-card p-5 flex flex-col justify-between border border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "h-14 w-14 rounded-md overflow-hidden bg-muted border border-border shrink-0",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: getDisplayImageUrl(p.image),
																alt: p.name,
																className: "h-full w-full object-cover",
																onError: (e) => {
																	e.target.style.display = "none";
																}
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 min-w-0",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-1.5 mb-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																		variant: "secondary",
																		className: "capitalize text-[10px]",
																		children: p.format
																	}), p.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																		variant: "default",
																		className: "text-[9px] bg-amber-600",
																		children: "Bestseller"
																	}) : null]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																	className: "font-semibold text-base leading-snug truncate",
																	children: p.name
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs text-muted-foreground mt-0.5 line-clamp-1",
																	children: p.tagline
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: p.in_stock ? "default" : "destructive",
															className: "text-[10px] shrink-0",
															children: p.in_stock ? "In Stock" : "Sold Out"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 mt-3 pt-2 border-t border-border/40",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-500 text-amber-500" }), (p.rating || 4.8).toFixed(1)]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-muted-foreground" }), p.shelf_life || "12 months from packing"]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 space-y-1.5 border-t border-b border-border/60 py-3 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-medium text-muted-foreground mb-1",
														children: "Variants & Pricing:"
													}), (p.variants || []).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "font-mono",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-bold",
																	children: formatPrice(v.price)
																}),
																v.mrp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-muted-foreground line-through ml-1.5",
																	children: formatPrice(v.mrp)
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-muted-foreground ml-2",
																	children: [
																		"(",
																		v.stock,
																		" in stock)"
																	]
																})
															]
														})]
													}, v.id))]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 pt-3 border-t border-border flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
														checked: Boolean(p.in_stock),
														onCheckedChange: () => handleToggleStock(p.slug, Boolean(p.in_stock))
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-muted-foreground",
														children: "In Stock"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															onClick: () => handleOpenQuickPrice(p),
															className: "h-8 text-xs border-[#FFC700]/60 hover:bg-[#FFC700]/10 text-foreground",
															title: "Quickly edit variant prices & MRP",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-3.5 w-3.5 mr-1 text-[#D4AF37]" }), " Price"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															className: "h-8 text-xs",
															onClick: () => handleEditProduct(p),
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3.5 w-3.5 mr-1" }), " Edit"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															size: "sm",
															variant: "ghost",
															className: "h-8 w-8 p-0 text-destructive hover:bg-destructive/10",
															title: "Delete Product",
															onClick: () => handleDeleteProduct(p.slug),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
														})
													]
												})]
											})]
										}, p.slug))
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "reviews",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Customer Reviews Moderation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Approve or reject guest reviews submitted across products"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No reviews in database."
									}) : reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex text-amber-500",
															children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-sm",
															children: r.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: r.status === "published" ? "default" : r.status === "rejected" ? "destructive" : "secondary",
															className: "text-[10px] capitalize",
															children: r.status
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: r.comment
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"By ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: r.name
														}),
														" (",
														r.city || "India",
														") · For product ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono font-medium text-primary",
															children: r.slug
														}),
														" · ",
														new Date(r.created_at).toLocaleDateString("en-IN")
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: [
												r.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "default",
													onClick: () => handleModerateReview(r.id, "publish"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 mr-1" }), " Approve"]
												}),
												r.status !== "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => handleModerateReview(r.id, "reject"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 mr-1" }), " Reject"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:bg-destructive/10",
													onClick: () => handleModerateReview(r.id, "delete"),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})
											]
										})]
									}, r.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "questions",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Product Q&A Desk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Answer visitor questions to publish official Tirunelveli team advice on product pages"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: questions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No questions submitted yet."
									}) : questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "font-mono text-[10px]",
														children: q.slug
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: q.answer ? "default" : "secondary",
														className: "text-[10px]",
														children: q.answer ? "Answered" : "Needs Answer"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-semibold text-sm mt-1.5",
													children: q.question
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"Asked by ",
														q.asked_by,
														" on ",
														new Date(q.created_at).toLocaleDateString("en-IN")
													]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: q.answer ? "outline" : "default",
													onClick: () => {
														setAnsweringQuestion(q);
														setAnswerText(q.answer || "");
													},
													children: q.answer ? "Edit Answer" : "Write Answer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "ghost",
													className: "text-destructive hover:bg-destructive/10",
													onClick: () => handleDeleteQuestion(q.id),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})]
											})]
										}), q.answer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg bg-primary/5 p-3 border border-primary/20 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-semibold text-primary mb-1 flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
													" Answer from ",
													q.answered_by || "Y.G team",
													":"
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground",
												children: q.answer
											})]
										})]
									}, q.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "tickets",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Customer Support Desk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Customer queries from contact form and order support dialog"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: tickets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground p-8 text-center",
										children: "No support tickets found."
									}) : tickets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono font-bold text-sm text-primary",
															children: t.id
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-sm",
															children: t.topic
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: String(t?.status) === "resolved" ? "default" : String(t?.status) === "open" ? "destructive" : "secondary",
															className: "text-[10px] capitalize",
															children: formatStatus(t?.status)
														}),
														t.order_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
															variant: "outline",
															className: "font-mono text-[10px]",
															children: ["Order ", t.order_id]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground line-clamp-2",
													children: t.message
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[11px] text-muted-foreground",
													children: [
														"Contact: ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: t.contact
														}),
														" · Raised on ",
														t.created_at ? new Date(t.created_at).toLocaleString("en-IN") : "Recent"
													]
												}),
												t.reply && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs bg-muted/60 p-2 rounded mt-2 border border-border",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: "Reply/Note:"
														}),
														" ",
														t.reply
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => {
													setRespondingTicket(t);
													setTicketStatusVal(t.status);
													setTicketReplyText(t.reply || "");
												},
												children: "Respond / Update"
											})
										})]
									}, t.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "promos",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Promo Codes & Discounts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Configure coupons, automatic basket discounts, and threshold rules"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => {
											setEditingPromo({
												code: "",
												label: "",
												description: "",
												percentOff: "",
												amountOff: "",
												minSubtotal: "",
												freeShipping: false,
												automatic: false,
												isActive: true
											});
											setPromoDialogOpen(true);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Create Promo"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
									children: promos.map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-4 border border-border flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono font-bold text-base text-primary",
													children: pr.code
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: pr.is_active ? "default" : "secondary",
													className: "text-[10px]",
													children: pr.is_active ? "Active" : "Inactive"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-medium text-sm mt-1",
												children: pr.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-1",
												children: pr.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 text-xs space-y-1 text-muted-foreground",
												children: [
													pr.percent_off && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														"• Discount: ",
														pr.percent_off,
														"% off"
													] }),
													pr.amount_off && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["• Flat off: ₹", pr.amount_off] }),
													pr.min_subtotal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["• Min order: ₹", pr.min_subtotal] }),
													Boolean(pr.free_shipping) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "• Free shipping included" }),
													Boolean(pr.automatic) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
														variant: "outline",
														className: "text-[10px] mt-1",
														children: "Auto-applied"
													})
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												onClick: () => handleTogglePromo(pr.code, Boolean(pr.is_active)),
												children: pr.is_active ? "Deactivate" : "Activate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "text-destructive hover:bg-destructive/10",
												onClick: () => handleDeletePromo(pr.code),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})]
										})]
									}, pr.code))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "alerts",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-semibold",
										children: "Back-in-Stock Alert Subscribers"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Customers who requested notifications when sold-out items return to inventory"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto rounded-lg border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Product"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Customer Contact"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Registered Date"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium",
													children: "Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-3 font-medium text-right",
													children: "Action"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: alerts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 5,
												className: "p-8 text-center text-muted-foreground text-sm",
												children: "No stock alerts registered."
											}) }) : alerts.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-muted/20 transition-colors",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "p-3 font-medium",
														children: [al.product_name || al.slug, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs text-muted-foreground font-mono",
															children: al.slug
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 font-mono text-xs",
														children: al.contact
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 text-xs text-muted-foreground",
														children: new Date(al.created_at).toLocaleDateString("en-IN", {
															day: "numeric",
															month: "short",
															year: "numeric"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: al.notified ? "default" : "secondary",
															className: "text-xs",
															children: al.notified ? "Notified" : "Waiting"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-3 text-right",
														children: !al.notified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															onClick: () => handleNotifyAlert(al.id),
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 mr-1" }), " Mark Notified"]
														})
													})
												]
											}, al.id))
										})]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "metrics",
							className: "space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6 border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-bold font-display text-foreground",
											children: "Business Calculation Metrics"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[10px] bg-primary/10 text-primary border-primary/30",
											children: "Live Dynamic Config"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Configure store shipping thresholds, spice GST compliance rates, wholesale B2B trade discount slabs, and simulate pricing margins."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											className: "h-8 text-xs",
											onClick: handleResetMetrics,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5 mr-1" }), " Reset Defaults"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											className: "h-8 text-xs bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206] font-semibold",
											onClick: () => handleSaveMetrics(metrics),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3.5 w-3.5 mr-1" }), " Save Metrics"]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 md:grid-cols-2 mt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 rounded-xl bg-card border border-border space-y-4 shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "p-2 rounded-lg bg-[#FFC700]/15 text-[#181206]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-semibold text-sm",
														children: "Shipping & Delivery Thresholds"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-muted-foreground",
														children: "Store checkout calculation parameters"
													})] })]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 gap-3 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-free-ship",
																className: "text-[11px]",
																children: "Free Shipping Min Order (₹)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-free-ship",
																type: "number",
																value: metrics.freeShippingThreshold,
																onChange: (e) => setMetrics({
																	...metrics,
																	freeShippingThreshold: Number(e.target.value)
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "Orders above this get free delivery"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-std-ship",
																className: "text-[11px]",
																children: "Standard Delivery Fee (₹)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-std-ship",
																type: "number",
																value: metrics.standardDeliveryFee,
																onChange: (e) => setMetrics({
																	...metrics,
																	standardDeliveryFee: Number(e.target.value)
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "Applies when below free shipping"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-exp-ship",
																className: "text-[11px]",
																children: "Express Air Delivery (₹)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-exp-ship",
																type: "number",
																value: metrics.expressDeliveryFee,
																onChange: (e) => setMetrics({
																	...metrics,
																	expressDeliveryFee: Number(e.target.value)
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "1-2 business days express charge"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-cod-fee",
																className: "text-[11px]",
																children: "COD Handling Surcharge (₹)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-cod-fee",
																type: "number",
																value: metrics.codHandlingFee,
																onChange: (e) => setMetrics({
																	...metrics,
																	codHandlingFee: Number(e.target.value)
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "Cash-on-delivery handling fee"
															})
														]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 rounded-xl bg-card border border-border space-y-4 shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "p-2 rounded-lg bg-emerald-500/15 text-emerald-700",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "h-4 w-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-semibold text-sm",
															children: "Spice GST & Tax Compliance"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-muted-foreground",
															children: "Statutory spice tax rate and HSN classification"
														})] })]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-2 gap-3 text-xs",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-gst",
																className: "text-[11px]",
																children: "Asafoetida GST Rate (%)"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-gst",
																type: "number",
																value: metrics.gstPercentage,
																onChange: (e) => setMetrics({
																	...metrics,
																	gstPercentage: Number(e.target.value)
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "Standard 5% under Indian GST Council for compounded spices"
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																htmlFor: "metric-hsn",
																className: "text-[11px]",
																children: "HSN / Tariff Code"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																id: "metric-hsn",
																type: "text",
																value: metrics.hsnCode,
																onChange: (e) => setMetrics({
																	...metrics,
																	hsnCode: e.target.value
																}),
																className: "h-8 text-xs font-mono"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground",
																children: "ITC-HS 0910.30 (Ferula Foetida)"
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3 bg-muted/40 rounded-lg border border-border/80 text-[11px] text-muted-foreground leading-relaxed",
													children: [
														"💡 ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tax Note:" }),
														" Invoices generated for domestic consumers include ",
														metrics.gstPercentage,
														"% GST. Export shipments dispatched under Letter of Undertaking (LUT) are zero-rated."
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 rounded-xl bg-card border border-border space-y-4 shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "p-2 rounded-lg bg-blue-500/15 text-blue-700",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-semibold text-sm",
														children: "B2B Trade Discount Slabs"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-muted-foreground",
														children: "Volume-based wholesale commercial discount tiers"
													})] })]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 border border-border/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "w-1/3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold text-foreground block",
																children: "Tier 1: Starter"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[10px] text-muted-foreground",
																children: [
																	"Min ",
																	metrics.wholesaleTier1MinKg,
																	" kg order"
																]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 flex items-center gap-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier1MinKg,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier1MinKg: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20",
																	placeholder: "Min kg"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] text-muted-foreground",
																	children: "kg ="
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier1Discount,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier1Discount: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20 font-bold",
																	placeholder: "% off"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] font-semibold text-primary",
																	children: "% off"
																})
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 border border-border/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "w-1/3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold text-foreground block",
																children: "Tier 2: Trade"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[10px] text-muted-foreground",
																children: [
																	"Min ",
																	metrics.wholesaleTier2MinKg,
																	" kg order"
																]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 flex items-center gap-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier2MinKg,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier2MinKg: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20",
																	placeholder: "Min kg"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] text-muted-foreground",
																	children: "kg ="
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier2Discount,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier2Discount: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20 font-bold",
																	placeholder: "% off"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] font-semibold text-primary",
																	children: "% off"
																})
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 border border-border/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "w-1/3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-semibold text-foreground block",
																children: "Tier 3: Container / Bulk"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-[10px] text-muted-foreground",
																children: [
																	"Min ",
																	metrics.wholesaleTier3MinKg,
																	" kg order"
																]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 flex items-center gap-2",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier3MinKg,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier3MinKg: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20",
																	placeholder: "Min kg"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] text-muted-foreground",
																	children: "kg ="
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	type: "number",
																	value: metrics.wholesaleTier3Discount,
																	onChange: (e) => setMetrics({
																		...metrics,
																		wholesaleTier3Discount: Number(e.target.value)
																	}),
																	className: "h-7 text-xs w-20 font-bold",
																	placeholder: "% off"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] font-semibold text-primary",
																	children: "% off"
																})
															]
														})]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 rounded-xl bg-[#FAF3D6]/50 border border-[#E8DEC8] space-y-4 shadow-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "p-2 rounded-lg bg-[#FFC700] text-[#181206]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-4 w-4" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-semibold text-sm text-[#181206]",
															children: "Live Margin & Pricing Simulator"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-muted-foreground",
															children: "Calculate realistic COGS and recommended prices"
														})] })]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-2 gap-2.5 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																className: "text-[10px] text-muted-foreground",
																children: "Raw Hing Lump (₹/kg)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																type: "number",
																value: simRawCost,
																onChange: (e) => setSimRawCost(Number(e.target.value)),
																className: "h-7 text-xs font-mono bg-background"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																className: "text-[10px] text-muted-foreground",
																children: "Compounding/Blending (₹/kg)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																type: "number",
																value: simCompounding,
																onChange: (e) => setSimCompounding(Number(e.target.value)),
																className: "h-7 text-xs font-mono bg-background"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																className: "text-[10px] text-muted-foreground",
																children: "Packaging (₹/100g unit)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																type: "number",
																value: simPackaging,
																onChange: (e) => setSimPackaging(Number(e.target.value)),
																className: "h-7 text-xs font-mono bg-background"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
																className: "text-[10px] text-muted-foreground",
																children: "Target Margin (%)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																type: "number",
																value: simMarginPct,
																onChange: (e) => setSimMarginPct(Number(e.target.value)),
																className: "h-7 text-xs font-mono bg-background font-bold text-emerald-700"
															})]
														})
													]
												}),
												(() => {
													const cogsPerKg = simRawCost + simCompounding + simPackaging * 10 + simFreight * 10;
													const targetWholesalePerKg = cogsPerKg / Math.max(.1, 1 - simMarginPct / 100);
													const consumerPreTax100g = cogsPerKg / 10 / Math.max(.1, 1 - (simMarginPct + 15) / 100);
													const recommendedMrp100g = Math.round(consumerPreTax100g * (1 + metrics.gstPercentage / 100));
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 rounded-lg bg-background border border-[#E8DEC8] space-y-2 text-xs",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex justify-between items-center text-muted-foreground",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total Estimated COGS (per kg):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "font-mono font-bold text-foreground",
																	children: ["₹", cogsPerKg.toFixed(0)]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex justify-between items-center text-muted-foreground",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Target Wholesale Rate (per kg):" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "font-mono font-bold text-blue-700",
																	children: ["₹", targetWholesalePerKg.toFixed(0)]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-1" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex justify-between items-center text-sm font-bold",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-[#181206]",
																	children: [
																		"Recommended 100g Retail MRP (incl ",
																		metrics.gstPercentage,
																		"% GST):"
																	]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "font-mono text-base text-primary",
																	children: ["₹", recommendedMrp100g]
																})]
															})
														]
													});
												})()
											]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "export_deals",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6 border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-bold font-display text-foreground",
												children: "International Export Business Deals"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-emerald-600 text-white text-[10px]",
												children: "Global Pipeline"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Manage overseas buyer leads, proforma quotations, container sample shipments, and B2B export contracts."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "outline",
												size: "sm",
												className: "h-8 text-xs",
												onClick: handleExportDealsCsv,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5 mr-1" }), " Export Deals CSV"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												className: "h-8 text-xs bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206] font-semibold",
												onClick: () => {
													setEditingDeal({
														id: `EXP-2026-${String(exportDeals.length + 1).padStart(3, "0")}`,
														companyName: "",
														contactPerson: "",
														country: "Singapore",
														destinationPort: "",
														email: "",
														phone: "",
														productType: "Gold Grade Asafoetida Powder",
														quantityMetric: "1,000 kg",
														dealValueCurrency: "USD",
														dealValueAmount: 25e3,
														stage: "new",
														paymentTerms: "100% LC at sight",
														incoterms: "FOB Tuticorin",
														notes: "",
														createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
													});
													setNewDealDialogOpen(true);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Add Export Deal"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-3 my-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 bg-muted/40 rounded-lg border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Active Export Deals"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-foreground",
													children: exportDeals.length
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 bg-muted/40 rounded-lg border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Closed Contracts"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-emerald-600",
													children: exportDeals.filter((d) => d.stage === "contract_closed").length
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 bg-muted/40 rounded-lg border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Under Negotiation"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-amber-600",
													children: exportDeals.filter((d) => d.stage === "negotiation" || d.stage === "sample_sent").length
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 bg-muted/40 rounded-lg border border-border",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground block",
													children: "Key Destination Markets"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold text-foreground line-clamp-1 mt-1",
													children: "Singapore, UAE, USA, Sri Lanka"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-3 items-center justify-between mb-4 pb-3 border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 w-full gap-2 items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex-1 max-w-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5 absolute left-2.5 top-2.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Search buyer, company, country, port...",
													value: exportSearch,
													onChange: (e) => setExportSearch(e.target.value),
													className: "pl-8 h-8 text-xs"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: exportStageFilter,
												onValueChange: setExportStageFilter,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 text-xs w-[180px]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "All Deal Stages" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "all",
														children: "All Stages"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "new",
														children: "New Lead"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "quoted",
														children: "Quoted / PI Sent"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "sample_sent",
														children: "Sample Dispatched"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "negotiation",
														children: "Under Negotiation"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "contract_closed",
														children: "Contract Closed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "cancelled",
														children: "Cancelled / Dropped"
													})
												] })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground shrink-0",
											children: [
												"Showing ",
												exportDeals.filter((d) => {
													const matchStage = exportStageFilter === "all" || d.stage === exportStageFilter;
													const matchSearch = !exportSearch || d.companyName.toLowerCase().includes(exportSearch.toLowerCase()) || d.country.toLowerCase().includes(exportSearch.toLowerCase()) || d.contactPerson.toLowerCase().includes(exportSearch.toLowerCase());
													return matchStage && matchSearch;
												}).length,
												" deals"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto rounded-lg border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
												className: "bg-muted/50 text-xs uppercase text-muted-foreground border-b border-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-3 font-medium",
														children: "Buyer / Destination"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-3 font-medium",
														children: "Product & Volume"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-3 font-medium",
														children: "Deal Value & Terms"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-3 font-medium",
														children: "Pipeline Stage"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "p-3 font-medium text-right",
														children: "Actions"
													})
												] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-border",
												children: exportDeals.filter((d) => {
													const matchStage = exportStageFilter === "all" || d.stage === exportStageFilter;
													const matchSearch = !exportSearch || d.companyName.toLowerCase().includes(exportSearch.toLowerCase()) || d.country.toLowerCase().includes(exportSearch.toLowerCase()) || d.contactPerson.toLowerCase().includes(exportSearch.toLowerCase());
													return matchStage && matchSearch;
												}).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "hover:bg-muted/20 transition-colors",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "p-3 align-top",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "font-semibold text-foreground text-xs",
																	children: d.companyName
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3 w-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
																		d.country,
																		" · ",
																		d.destinationPort
																	] })]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-[11px] text-muted-foreground mt-1",
																	children: [
																		"Contact: ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: d.contactPerson }),
																		" (",
																		d.email,
																		")"
																	]
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "p-3 align-top",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "text-xs font-medium text-foreground",
																	children: d.productType
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
																	variant: "outline",
																	className: "text-[10px] mt-1 font-mono",
																	children: ["Qty: ", d.quantityMetric]
																}),
																d.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																	className: "text-[11px] text-muted-foreground mt-1 line-clamp-2 max-w-xs italic",
																	children: [
																		"\"",
																		d.notes,
																		"\""
																	]
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "p-3 align-top",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "font-mono font-bold text-xs text-foreground",
																	children: [
																		d.dealValueCurrency,
																		" ",
																		d.dealValueAmount.toLocaleString()
																	]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "text-[11px] text-muted-foreground mt-0.5",
																	children: [
																		d.incoterms,
																		" · ",
																		d.paymentTerms
																	]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-[10px] text-muted-foreground font-mono mt-0.5 block",
																	children: ["Ref: ", d.id]
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-3 align-top",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
																value: d.stage,
																onValueChange: (val) => handleUpdateDealStage(d.id, val),
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
																	className: "h-7 text-[11px] w-36 capitalize",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "new",
																		children: "New Lead"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "quoted",
																		children: "Quoted / PI"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "sample_sent",
																		children: "Sample Sent"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "negotiation",
																		children: "Under Negotiation"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "contract_closed",
																		children: "Contract Closed ✓"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
																		value: "cancelled",
																		children: "Cancelled"
																	})
																] })]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "p-3 align-top text-right",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-end gap-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "outline",
																	className: "h-7 text-xs",
																	asChild: true,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
																		href: `mailto:${d.email}?subject=${encodeURIComponent(`Y.G Asafoetida Export Inquiry - ${d.id}`)}&body=${encodeURIComponent(`Dear ${d.contactPerson},\n\nThank you for your interest in Y.G Asafoetida products regarding ${d.productType} (${d.quantityMetric})...\n\nBest regards,\nY.G Asafoetida Export Team\nTirunelveli, Tamil Nadu, India`)}`,
																		title: "Send Email",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 mr-1" }), " Mail"]
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																	size: "sm",
																	variant: "ghost",
																	className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10",
																	onClick: () => handleDeleteExportDeal(d.id),
																	title: "Delete Deal",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" })
																})]
															})
														})
													]
												}, d.id))
											})]
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "messages",
							className: "space-y-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6 border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-lg font-bold font-display text-foreground",
												children: "Customer Inquiries, Mails & Trade Messages"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "text-[10px] border-[#FFC700] text-[#181206] bg-[#FAF3D6]",
												children: "Inbox Hub"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Review and respond to guest inquiries, bulk kitchen requirements, private-label packaging requests, and wholesale queries."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											className: "h-8 text-xs",
											onClick: handleExportMessagesCsv,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5 mr-1" }), " Export Inquiries CSV"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-3 items-center justify-between my-4 pb-3 border-b border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 w-full gap-2 items-center flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative flex-1 min-w-[200px] max-w-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5 absolute left-2.5 top-2.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "Search sender, email, subject, keyword...",
														value: msgSearch,
														onChange: (e) => setMsgSearch(e.target.value),
														className: "pl-8 h-8 text-xs"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: msgCategoryFilter,
													onValueChange: setMsgCategoryFilter,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "h-8 text-xs w-[160px]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "All Categories" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "all",
															children: "All Categories"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "general",
															children: "General Culinary"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "wholesale",
															children: "Wholesale Kitchen"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "export",
															children: "Export Distributorship"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "private_label",
															children: "Private Label / OEM"
														})
													] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
													value: msgStatusFilter,
													onValueChange: setMsgStatusFilter,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
														className: "h-8 text-xs w-[130px]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "All Statuses" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "all",
															children: "All Statuses"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "unread",
															children: "Unread"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "in_progress",
															children: "In Progress"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "replied",
															children: "Replied"
														})
													] })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground shrink-0",
											children: [
												adminMessages.filter((m) => m.status === "unread").length,
												" unread of ",
												adminMessages.length,
												" total"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: adminMessages.filter((m) => {
											const matchCat = msgCategoryFilter === "all" || m.category === msgCategoryFilter;
											const matchStatus = msgStatusFilter === "all" || m.status === msgStatusFilter;
											const matchSearch = !msgSearch || m.senderName.toLowerCase().includes(msgSearch.toLowerCase()) || m.email.toLowerCase().includes(msgSearch.toLowerCase()) || m.subject.toLowerCase().includes(msgSearch.toLowerCase()) || m.message.toLowerCase().includes(msgSearch.toLowerCase());
											return matchCat && matchStatus && matchSearch;
										}).map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `p-4 rounded-xl border transition-all ${msg.status === "unread" ? "bg-[#FAF3D6]/40 border-[#FFC700]/70 shadow-xs" : "bg-card border-border"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5 flex-1 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 flex-wrap",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-sm text-foreground",
																	children: msg.senderName
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																	variant: "outline",
																	className: "text-[10px] capitalize",
																	children: formatStatus(msg?.category)
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
																	className: `text-[10px] capitalize ${msg?.status === "unread" ? "bg-rose-500 text-white" : msg?.status === "in_progress" ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"}`,
																	children: formatStatus(msg?.status)
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] text-muted-foreground font-mono ml-auto sm:ml-0",
																	children: msg.receivedAt
																})
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-semibold text-foreground mt-1",
															children: msg.subject
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground leading-relaxed",
															children: msg.message
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-3 pt-1 text-[11px] text-muted-foreground font-mono",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📧 ", msg.email] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📞 ", msg.phone] })]
														}),
														msg.adminNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-2 rounded bg-muted/50 border border-border/60 text-[11px] text-foreground",
															children: [
																"📝 ",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Admin Note:" }),
																" ",
																msg.adminNotes
															]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex sm:flex-col items-center sm:items-end gap-1.5 shrink-0 pt-2 sm:pt-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															size: "sm",
															className: "h-7 text-xs bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206]",
															asChild: true,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
																href: `mailto:${msg.email}?subject=${encodeURIComponent(`Re: ${msg.subject}`)}&body=${encodeURIComponent(`Dear ${msg.senderName},\n\nThank you for reaching out to Y.G Asafoetida regarding your query:\n"${msg.subject}"\n\n\nBest regards,\nY.G Asafoetida Support Team\nNellai Heritage Works`)}`,
																onClick: () => handleUpdateMessageStatus(msg.id, "replied"),
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3 mr-1" }), " Reply"]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
															size: "sm",
															variant: "outline",
															className: "h-7 text-xs",
															onClick: () => {
																setActiveMessage(msg);
																setMessageNoteInput(msg.adminNotes || "");
															},
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3 w-3 mr-1" }), " Note / Status"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															size: "sm",
															variant: "ghost",
															className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10",
															onClick: () => handleDeleteMessage(msg.id),
															title: "Delete Message",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" })
														})
													]
												})]
											})
										}, msg.id))
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(selectedOrder),
				onOpenChange: (open) => !open && setSelectedOrder(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
					children: selectedOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "font-mono text-xl text-primary font-bold",
							children: ["Order ", selectedOrder.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "capitalize text-xs",
							children: formatStatus(selectedOrder?.status)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"Placed on ",
						selectedOrder.createdAt ? new Date(selectedOrder.createdAt).toLocaleString("en-IN") : "Recent",
						" · ",
						selectedOrder.delivery,
						" shipping"
					] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4 bg-muted/40 p-4 rounded-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-1",
										children: "Customer Info"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-medium",
										children: [
											selectedOrder.address.firstName,
											" ",
											selectedOrder.address.lastName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: selectedOrder.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: selectedOrder.phone
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-1",
										children: "Shipping Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: selectedOrder.address.line1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											selectedOrder.address.city,
											", ",
											selectedOrder.address.state,
											" ",
											selectedOrder.address.pin
										]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2",
								children: "Order Items"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border border rounded-lg overflow-hidden",
								children: selectedOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: it.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"Variant: ",
											it.variantLabel,
											" · Quantity: ",
											it.qty
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono font-semibold",
										children: formatPrice(it.price * it.qty)
									})]
								}, idx))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-muted/40 p-4 rounded-lg space-y-1.5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.subtotal)
										})]
									}),
									selectedOrder.totals.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-emerald-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Discount (",
											selectedOrder.promoCode,
											"):"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono",
											children: ["-", formatPrice(selectedOrder.totals.discount)]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.shipping)
										})]
									}),
									selectedOrder.totals.giftWrap > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Gift packaging:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.giftWrap)
										})]
									}),
									selectedOrder.totals.codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COD Fee:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: formatPrice(selectedOrder.totals.codFee)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-1" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-sm font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-primary",
											children: formatPrice(selectedOrder.totals.total)
										})]
									})
								]
							}),
							selectedOrder.resolution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-rose-50 rounded-lg border border-rose-200 text-rose-900 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-bold flex items-center gap-1.5 text-rose-700",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }),
											" Open ",
											selectedOrder.resolution.type === "cancellation" ? "Cancellation" : "Refund Request"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Reason:" }),
											" ",
											selectedOrder.resolution.reason
										]
									}),
									selectedOrder.resolution.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Customer Note:" }),
											" ",
											selectedOrder.resolution.note
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Amount:" }),
											" ",
											formatPrice(selectedOrder.resolution.amount)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "default",
											onClick: () => handleProcessResolution(selectedOrder.id, "approve"),
											children: "Approve Request"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => handleProcessResolution(selectedOrder.id, "reject", "Request declined after inspection"),
											children: "Decline Request"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold uppercase text-muted-foreground block mb-2",
									children: "Update Fulfillment Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										"placed",
										"packed",
										"shipped",
										"out",
										"delivered",
										"cancelled"
									].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: selectedOrder.status === st ? "default" : "outline",
										className: "capitalize text-xs",
										onClick: () => handleUpdateOrderStatus(selectedOrder.id, st),
										children: formatStatus(st)
									}, st))
								})]
							})
						]
					})] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: productDialogOpen,
				onOpenChange: setProductDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editingProduct?.slug && products.some((p) => p.slug === editingProduct.slug) ? "Edit Product" : "Add New Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Configure product details and variant options" })] }),
						editingProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "prod-slug",
												children: "Slug (Unique ID)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "text-[11px] text-primary hover:underline font-medium",
												onClick: () => {
													if (editingProduct.name) {
														const autoSlug = editingProduct.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
														setEditingProduct({
															...editingProduct,
															slug: autoSlug
														});
													}
												},
												children: "Generate from Name"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-slug",
											value: editingProduct.slug,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												slug: e.target.value
											}),
											placeholder: "e.g. fresh-asafoetida-granules"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-name",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-name",
											value: editingProduct.name,
											onChange: (e) => {
												const name = e.target.value;
												if (!editingProduct.slug) {
													const autoSlug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
													setEditingProduct({
														...editingProduct,
														name,
														slug: autoSlug
													});
												} else setEditingProduct({
													...editingProduct,
													name
												});
											},
											placeholder: "e.g. YG Special Hing"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-tagline",
											children: "Tagline"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-tagline",
											value: editingProduct.tagline,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												tagline: e.target.value
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-format",
											children: "Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: editingProduct.format,
											onValueChange: (val) => setEditingProduct({
												...editingProduct,
												format: val
											}),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "prod-format",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "powder",
													children: "Powder"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "granules",
													children: "Granules"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "cake",
													children: "Solid Cake"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "combo",
													children: "Combo & Gift"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "wellness",
													children: "Health Mix (Wellness)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "pooja",
													children: "Pooja Sambrani"
												})
											] })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "prod-desc",
										children: "Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "prod-desc",
										rows: 3,
										value: editingProduct.description,
										onChange: (e) => setEditingProduct({
											...editingProduct,
											description: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-ing",
											children: "Ingredients"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-ing",
											value: editingProduct.ingredients,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												ingredients: e.target.value
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "prod-usage",
											children: "Usage Instructions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "prod-usage",
											value: editingProduct.usage,
											onChange: (e) => setEditingProduct({
												...editingProduct,
												usage: e.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "prod-shelf-life",
												children: "Shelf Life / Expiry"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "prod-shelf-life",
												value: editingProduct.shelfLife || "",
												onChange: (e) => setEditingProduct({
													...editingProduct,
													shelfLife: e.target.value
												}),
												placeholder: "e.g. 12 months from packing. Store in an airtight container."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Standard 12 months for all products"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "prod-rating",
												children: "Customer Rating (4.5 to 4.9)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "prod-rating",
												type: "number",
												step: "0.1",
												min: "4.5",
												max: "4.9",
												value: editingProduct.rating ?? 4.8,
												onChange: (e) => {
													const val = parseFloat(e.target.value);
													setEditingProduct({
														...editingProduct,
														rating: isNaN(val) ? 4.8 : val
													});
												},
												placeholder: "4.8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "Must be between 4.5 and 4.9"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 pt-2 border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold text-sm flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), " Product Images & Gallery"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Upload image files, enter URLs, or pick from heritage product presets"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/30 rounded-lg border border-border space-y-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-semibold text-foreground flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 text-amber-500 fill-amber-500" }), " Primary Cover Image"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground",
													children: "Main catalog image"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-16 w-16 rounded-md overflow-hidden bg-background border border-border shrink-0 flex items-center justify-center relative shadow-xs",
													children: editingProduct.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: getDisplayImageUrl(editingProduct.image),
														alt: "Cover Preview",
														className: "h-full w-full object-cover",
														onError: (e) => {
															e.target.style.display = "none";
														}
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs text-muted-foreground",
														children: "No img"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 w-full space-y-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															placeholder: "Image URL or preset (e.g. powder, /assets/...)",
															value: editingProduct.image,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																image: e.target.value
															}),
															className: "text-xs font-mono h-8"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
															className: "cursor-pointer",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "file",
																accept: "image/*",
																className: "hidden",
																onChange: (e) => handleImageFileUpload(e, false)
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																type: "button",
																size: "sm",
																variant: "outline",
																className: "h-8 text-xs shrink-0",
																asChild: true,
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5 mr-1" }), " Upload"] })
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center flex-wrap gap-1.5 pt-0.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground font-medium mr-1",
															children: "Presets:"
														}), PRESET_PRODUCT_IMAGES.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setEditingProduct({
																...editingProduct,
																image: preset.key
															}),
															className: `text-[10px] px-2 py-0.5 rounded border transition-colors ${editingProduct.image === preset.key || editingProduct.image === preset.url ? "bg-primary text-primary-foreground border-primary font-medium" : "bg-background text-muted-foreground hover:text-foreground border-border"}`,
															children: preset.label
														}, preset.key))]
													})]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3 bg-muted/30 rounded-lg border border-border space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-semibold text-foreground flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5 text-primary" }),
															" Additional Gallery Images (",
															editingProduct.gallery?.length || 0,
															")"
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "file",
															accept: "image/*",
															multiple: true,
															className: "hidden",
															onChange: (e) => handleImageFileUpload(e, true)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															type: "button",
															size: "sm",
															variant: "outline",
															className: "h-7 text-[11px]",
															asChild: true,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 mr-1" }), " Upload Multiple"] })
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														placeholder: "Paste image URL or preset key to add...",
														value: newGalleryUrl,
														onChange: (e) => setNewGalleryUrl(e.target.value),
														onKeyDown: (e) => {
															if (e.key === "Enter") {
																e.preventDefault();
																if (newGalleryUrl.trim()) {
																	setEditingProduct({
																		...editingProduct,
																		gallery: [...editingProduct.gallery || [], newGalleryUrl.trim()]
																	});
																	setNewGalleryUrl("");
																}
															}
														},
														className: "text-xs font-mono h-8"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														size: "sm",
														variant: "secondary",
														className: "h-8 text-xs shrink-0",
														onClick: () => {
															if (newGalleryUrl.trim()) {
																setEditingProduct({
																	...editingProduct,
																	gallery: [...editingProduct.gallery || [], newGalleryUrl.trim()]
																});
																setNewGalleryUrl("");
																toast.success("Image added to gallery");
															}
														},
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 mr-1" }), " Add"]
													})]
												}),
												editingProduct.gallery && editingProduct.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pt-1",
													children: editingProduct.gallery.map((imgUrl, idx) => {
														const isCover = editingProduct.image === imgUrl;
														return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: `group relative rounded-md overflow-hidden border aspect-square bg-background shadow-xs transition-all ${isCover ? "ring-2 ring-primary border-transparent" : "border-border"}`,
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: getDisplayImageUrl(imgUrl),
																	alt: `Gallery ${idx + 1}`,
																	className: "h-full w-full object-cover",
																	onError: (e) => {
																		e.target.style.display = "none";
																	}
																}),
																isCover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "absolute top-1 left-1 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm",
																	children: "Cover"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-1",
																	children: [!isCover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																		type: "button",
																		size: "sm",
																		variant: "secondary",
																		className: "h-6 text-[10px] px-1 py-0 w-full",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				image: imgUrl
																			});
																			toast.success("Set as main cover");
																		},
																		children: "Set Cover"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
																		type: "button",
																		size: "sm",
																		variant: "destructive",
																		className: "h-6 text-[10px] px-1 py-0 w-full",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				gallery: editingProduct.gallery.filter((_, i) => i !== idx)
																			});
																			toast.success("Removed from gallery");
																		},
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3 mr-1" }), " Remove"]
																	})]
																})
															]
														}, idx);
													})
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-center py-3 border border-dashed border-border rounded text-xs text-muted-foreground",
													children: "No additional gallery images yet"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-2 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Variants & Pricing"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											size: "sm",
											variant: "outline",
											onClick: () => {
												setEditingProduct({
													...editingProduct,
													variants: [...editingProduct.variants, {
														id: `var_${Date.now().toString(36)}`,
														label: "100 g",
														price: 299,
														mrp: 350,
														stock: 50
													}]
												});
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 mr-1" }), " Add Variant"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: editingProduct.variants.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 bg-muted/40 p-2 rounded",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Label",
													value: v.label,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].label = e.target.value;
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/3 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Price ₹",
													type: "number",
													value: v.price,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].price = Number(e.target.value);
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "MRP ₹",
													type: "number",
													value: v.mrp ?? "",
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].mrp = e.target.value ? Number(e.target.value) : null;
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Stock",
													type: "number",
													value: v.stock ?? 50,
													onChange: (e) => {
														const vars = [...editingProduct.variants];
														vars[i].stock = Number(e.target.value);
														setEditingProduct({
															...editingProduct,
															variants: vars
														});
													},
													className: "w-1/4 text-xs"
												}),
												editingProduct.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													type: "button",
													size: "sm",
													variant: "ghost",
													className: "text-destructive h-8 w-8 p-0",
													onClick: () => {
														setEditingProduct({
															...editingProduct,
															variants: editingProduct.variants.filter((_, idx) => idx !== i)
														});
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
												})
											]
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between pt-2 border-t border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.glutenFree,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														glutenFree: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "Gluten-Free"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.bestseller,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														bestseller: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "Bestseller"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: editingProduct.inStock,
													onCheckedChange: (c) => setEditingProduct({
														...editingProduct,
														inStock: c
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "In Stock"
												})]
											})
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setProductDialogOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSaveProduct,
								children: "Save Product"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(answeringQuestion),
				onOpenChange: (open) => !open && setAnsweringQuestion(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Answer Customer Question" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							answeringQuestion?.question,
							" (Asked by ",
							answeringQuestion?.asked_by,
							")"
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "q-answer",
								children: "Official Response (from Y.G team)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "q-answer",
								rows: 4,
								value: answerText,
								onChange: (e) => setAnswerText(e.target.value),
								placeholder: "Type your response here..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setAnsweringQuestion(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleAnswerQuestion,
							children: "Publish Answer"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(respondingTicket),
				onOpenChange: (open) => !open && setRespondingTicket(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Update Ticket ", respondingTicket?.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							respondingTicket?.topic,
							" · Contact: ",
							respondingTicket?.contact
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-muted/40 rounded text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold block mb-1",
										children: "Customer Message:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: respondingTicket?.message
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: ticketStatusVal,
										onValueChange: (v) => setTicketStatusVal(v),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "open",
												children: "Open"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "in_progress",
												children: "In Progress"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "resolved",
												children: "Resolved"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "closed",
												children: "Closed"
											})
										] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "t-reply",
										children: "Response / Team Note"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "t-reply",
										rows: 3,
										value: ticketReplyText,
										onChange: (e) => setTicketReplyText(e.target.value),
										placeholder: "Add resolution or response note..."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setRespondingTicket(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleSaveTicketReply,
							children: "Update Ticket"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: promoDialogOpen,
				onOpenChange: setPromoDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create / Edit Promo Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Define discount percentage, flat amount, or shipping rules" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "pr-code",
											children: "Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "pr-code",
											placeholder: "e.g. SAVE20",
											value: editingPromo.code,
											onChange: (e) => setEditingPromo({
												...editingPromo,
												code: e.target.value.toUpperCase()
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "pr-label",
											children: "Label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "pr-label",
											placeholder: "e.g. 20% off",
											value: editingPromo.label,
											onChange: (e) => setEditingPromo({
												...editingPromo,
												label: e.target.value
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "pr-desc",
										children: "Description"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pr-desc",
										placeholder: "e.g. 20% off orders above ₹500",
										value: editingPromo.description,
										onChange: (e) => setEditingPromo({
											...editingPromo,
											description: e.target.value
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-pct",
												children: "% Off"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-pct",
												type: "number",
												placeholder: "e.g. 20",
												value: editingPromo.percentOff,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													percentOff: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-amt",
												children: "₹ Flat Off"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-amt",
												type: "number",
												placeholder: "e.g. 50",
												value: editingPromo.amountOff,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													amountOff: e.target.value
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "pr-min",
												children: "Min Order ₹"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "pr-min",
												type: "number",
												placeholder: "e.g. 499",
												value: editingPromo.minSubtotal,
												onChange: (e) => setEditingPromo({
													...editingPromo,
													minSubtotal: e.target.value
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-4 pt-2 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: editingPromo.freeShipping,
											onCheckedChange: (c) => setEditingPromo({
												...editingPromo,
												freeShipping: c
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Free Shipping"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
											checked: editingPromo.automatic,
											onCheckedChange: (c) => setEditingPromo({
												...editingPromo,
												automatic: c
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Auto Apply"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setPromoDialogOpen(false),
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: handleSavePromo,
								children: "Save Promo"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(quickPriceProduct),
				onOpenChange: (open) => !open && setQuickPriceProduct(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Quick Price & MRP Editor" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Adjust selling prices, MRP, and inventory units for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: quickPriceProduct?.name }),
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3 my-2 max-h-[60vh] overflow-y-auto",
							children: quickVariants.map((v, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-muted/30 border border-border rounded-lg space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: v.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground font-mono text-[11px]",
										children: ["ID: ", v.id]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[10px] text-muted-foreground",
												children: "Price ₹ (Selling)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: v.price,
												onChange: (e) => {
													const updated = [...quickVariants];
													updated[idx] = {
														...v,
														price: Number(e.target.value)
													};
													setQuickVariants(updated);
												},
												className: "h-8 text-xs font-mono font-bold text-foreground"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[10px] text-muted-foreground",
												children: "MRP ₹ (Strikethrough)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: v.mrp ?? "",
												onChange: (e) => {
													const updated = [...quickVariants];
													updated[idx] = {
														...v,
														mrp: e.target.value ? Number(e.target.value) : null
													};
													setQuickVariants(updated);
												},
												className: "h-8 text-xs font-mono",
												placeholder: "Optional"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[10px] text-muted-foreground",
												children: "Stock Units"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: v.stock,
												onChange: (e) => {
													const updated = [...quickVariants];
													updated[idx] = {
														...v,
														stock: Number(e.target.value)
													};
													setQuickVariants(updated);
												},
												className: "h-8 text-xs font-mono"
											})]
										})
									]
								})]
							}, v.id || idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setQuickPriceProduct(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: handleSaveQuickPrices,
							className: "bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4 mr-1.5" }), " Save Updated Prices"]
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: newDealDialogOpen,
				onOpenChange: setNewDealDialogOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-xl max-h-[85vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-5 w-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add International Export Deal" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Record an overseas buyer lead, proforma quotation, or container export contract." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs my-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Buyer / Company Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.companyName || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												companyName: e.target.value
											}),
											placeholder: "e.g. Mustafa Centre Wholesale Pte Ltd",
											className: "h-8 text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Contact Person *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.contactPerson || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												contactPerson: e.target.value
											}),
											placeholder: "e.g. Mr. K. Rajendran",
											className: "h-8 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Destination Country *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.country || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												country: e.target.value
											}),
											placeholder: "e.g. Singapore, UAE, USA, Sri Lanka",
											className: "h-8 text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Destination Port"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.destinationPort || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												destinationPort: e.target.value
											}),
											placeholder: "e.g. Port of Singapore (SGSIN)",
											className: "h-8 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Buyer Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "email",
											value: editingDeal.email || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												email: e.target.value
											}),
											placeholder: "procurement@company.com",
											className: "h-8 text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Buyer Phone / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.phone || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												phone: e.target.value
											}),
											placeholder: "+65 6295 5855",
											className: "h-8 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Product Specification"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.productType || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												productType: e.target.value
											}),
											placeholder: "e.g. Gold Grade Asafoetida Powder",
											className: "h-8 text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Order Volume / Metric"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.quantityMetric || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												quantityMetric: e.target.value
											}),
											placeholder: "e.g. 1,000 kg (Master Cartons)",
											className: "h-8 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Currency"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: editingDeal.dealValueCurrency || "USD",
												onValueChange: (val) => setEditingDeal({
													...editingDeal,
													dealValueCurrency: val
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 text-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "USD",
														children: "USD ($)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "SGD",
														children: "SGD (S$)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "AED",
														children: "AED (د.إ)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "EUR",
														children: "EUR (€)"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "INR",
														children: "INR (₹)"
													})
												] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Deal Value Amount"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: editingDeal.dealValueAmount || "",
												onChange: (e) => setEditingDeal({
													...editingDeal,
													dealValueAmount: Number(e.target.value)
												}),
												placeholder: "e.g. 25000",
												className: "h-8 text-xs font-mono"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-[11px]",
												children: "Pipeline Stage"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: editingDeal.stage || "new",
												onValueChange: (val) => setEditingDeal({
													...editingDeal,
													stage: val
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 text-xs capitalize",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "new",
														children: "New Lead"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "quoted",
														children: "Quoted / PI"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "sample_sent",
														children: "Sample Sent"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "negotiation",
														children: "Negotiation"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "contract_closed",
														children: "Contract Closed"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "cancelled",
														children: "Cancelled"
													})
												] })]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Incoterms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.incoterms || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												incoterms: e.target.value
											}),
											placeholder: "e.g. FOB Tuticorin / CIF Singapore",
											className: "h-8 text-xs"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-[11px]",
											children: "Payment Terms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: editingDeal.paymentTerms || "",
											onChange: (e) => setEditingDeal({
												...editingDeal,
												paymentTerms: e.target.value
											}),
											placeholder: "e.g. 100% LC at sight / 30% advance",
											className: "h-8 text-xs"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-[11px]",
										children: "Internal Trade Notes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 2,
										value: editingDeal.notes || "",
										onChange: (e) => setEditingDeal({
											...editingDeal,
											notes: e.target.value
										}),
										placeholder: "e.g. Phytosanitary certificate, FSSAI export clearance, Halal compliance...",
										className: "text-xs"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setNewDealDialogOpen(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => {
								if (!editingDeal.companyName || !editingDeal.contactPerson) {
									toast.error("Company name and contact person are required");
									return;
								}
								handleSaveExportDeal({
									id: editingDeal.id || `EXP-2026-${String(Date.now()).slice(-4)}`,
									companyName: editingDeal.companyName,
									contactPerson: editingDeal.contactPerson,
									country: editingDeal.country || "India",
									destinationPort: editingDeal.destinationPort || "FOB Tuticorin",
									email: editingDeal.email || "trade@buyer.com",
									phone: editingDeal.phone || "+91 00000 00000",
									productType: editingDeal.productType || "Compounded Asafoetida Powder",
									quantityMetric: editingDeal.quantityMetric || "500 kg",
									dealValueCurrency: editingDeal.dealValueCurrency || "USD",
									dealValueAmount: Number(editingDeal.dealValueAmount || 1e4),
									stage: editingDeal.stage || "new",
									paymentTerms: editingDeal.paymentTerms || "T/T Wire Transfer",
									incoterms: editingDeal.incoterms || "FOB Tuticorin",
									notes: editingDeal.notes || "",
									createdAt: editingDeal.createdAt || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
								});
							},
							className: "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4 mr-1.5" }), " Save Deal"]
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(activeMessage),
				onOpenChange: (open) => !open && setActiveMessage(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "sm:max-w-md",
					children: activeMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-base font-semibold",
							children: ["Inquiry: ", activeMessage.subject]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs",
							children: [
								"From ",
								activeMessage.senderName,
								" (",
								activeMessage.email,
								") · ",
								activeMessage.receivedAt
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs my-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-3 bg-muted/30 rounded-lg border border-border text-foreground leading-relaxed",
									children: activeMessage.message
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold",
										children: "Update Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-2",
										children: [
											"unread",
											"in_progress",
											"replied"
										].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											size: "sm",
											variant: activeMessage.status === st ? "default" : "outline",
											className: "h-7 text-xs capitalize flex-1",
											onClick: () => handleUpdateMessageStatus(activeMessage.id, st),
											children: formatStatus(st)
										}, st))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "admin-msg-note",
											className: "text-xs font-semibold",
											children: "Internal Admin Note"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "admin-msg-note",
											rows: 3,
											placeholder: "e.g. Quoted 18% slab on 17 Sep. Awaiting payment receipt...",
											value: messageNoteInput,
											onChange: (e) => setMessageNoteInput(e.target.value),
											className: "text-xs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-7 text-xs w-full",
											onClick: () => handleSaveMessageNote(activeMessage.id),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-3 w-3 mr-1" }), " Save Note"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setActiveMessage(null),
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "bg-[#FFC700] hover:bg-[#FFC700]/90 text-[#181206]",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${activeMessage.email}?subject=${encodeURIComponent(`Re: ${activeMessage.subject}`)}&body=${encodeURIComponent(`Dear ${activeMessage.senderName},\n\n`)}`,
									onClick: () => handleUpdateMessageStatus(activeMessage.id, "replied"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 mr-1" }), " Launch Email Client"]
								})
							})]
						})
					] })
				})
			})
		]
	});
}
//#endregion
export { DEFAULT_METRICS, AdminDashboardPage as component, formatStatus, getDisplayImageUrl };
