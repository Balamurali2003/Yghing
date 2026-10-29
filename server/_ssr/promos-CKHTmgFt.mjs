import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
require_react();
var promos = [
	{
		code: "HERITAGE10",
		label: "10% off",
		description: "10% off your order — our 1931 heritage welcome offer.",
		percentOff: 10,
		isActive: true
	},
	{
		code: "HING50",
		label: "₹50 off",
		description: "₹50 off orders above ₹399.",
		amountOff: 50,
		minSubtotal: 399,
		isActive: true
	},
	{
		code: "FREESHIP",
		label: "Free shipping",
		description: "Free delivery on any order.",
		freeShipping: true,
		isActive: true
	},
	{
		code: "BULK15",
		label: "15% off ₹999+",
		description: "Automatic 15% off when your basket crosses ₹999.",
		percentOff: 15,
		minSubtotal: 999,
		automatic: true,
		isActive: true
	}
];
var PROMOS_STORAGE_KEY = "yg_live_promos";
function getLivePromos() {
	if (typeof window === "undefined") return promos;
	try {
		const raw = localStorage.getItem(PROMOS_STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed) && parsed.length > 0) return parsed.map((p) => ({
				code: String(p.code || "").toUpperCase(),
				label: p.label || p.code,
				description: p.description || "",
				percentOff: p.percentOff !== void 0 ? Number(p.percentOff) : p.percent_off !== void 0 && p.percent_off !== null ? Number(p.percent_off) : void 0,
				amountOff: p.amountOff !== void 0 ? Number(p.amountOff) : p.amount_off !== void 0 && p.amount_off !== null ? Number(p.amount_off) : void 0,
				minSubtotal: p.minSubtotal !== void 0 ? Number(p.minSubtotal) : p.min_subtotal !== void 0 && p.min_subtotal !== null ? Number(p.min_subtotal) : void 0,
				freeShipping: Boolean(p.freeShipping || p.free_shipping),
				automatic: Boolean(p.automatic),
				isActive: p.isActive !== void 0 ? Boolean(p.isActive) : p.is_active !== void 0 ? Boolean(p.is_active) : true
			}));
		}
	} catch (e) {
		console.error("Failed to load live promos:", e);
	}
	return promos;
}
function saveLivePromos(items) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(PROMOS_STORAGE_KEY, JSON.stringify(items));
		window.dispatchEvent(new CustomEvent("yg_promos_updated"));
		window.dispatchEvent(new Event("storage"));
	} catch (e) {
		console.error("Failed to save live promos:", e);
	}
}
function findPromo(code) {
	const normalized = code.trim().toUpperCase();
	return getLivePromos().find((p) => p.code === normalized && p.isActive !== false);
}
function isPromoEligible(promo, subtotal) {
	if (promo.isActive === false) return false;
	return subtotal >= (promo.minSubtotal ?? 0);
}
function discountFor(promo, subtotal) {
	if (!isPromoEligible(promo, subtotal)) return 0;
	const pct = promo.percentOff ? subtotal * promo.percentOff / 100 : 0;
	const flat = promo.amountOff ?? 0;
	return Math.min(subtotal, Math.round(pct + flat));
}
/** Best automatic promo for a given subtotal, if any. */
function bestAutomaticPromo(subtotal) {
	return getLivePromos().filter((p) => p.automatic && p.isActive !== false && isPromoEligible(p, subtotal)).sort((a, b) => discountFor(b, subtotal) - discountFor(a, subtotal))[0];
}
/** Itemised breakdown of what a promo takes off, for display in cart/checkout. */
function discountBreakdown(promo, subtotal, shippingSaved = 0) {
	const lines = [];
	if (!isPromoEligible(promo, subtotal)) return lines;
	if (promo.percentOff) lines.push({
		label: `${promo.percentOff}% off items`,
		amount: Math.round(subtotal * promo.percentOff / 100)
	});
	if (promo.amountOff) lines.push({
		label: `₹${promo.amountOff} off order`,
		amount: promo.amountOff
	});
	if (promo.freeShipping && shippingSaved > 0) lines.push({
		label: "Free shipping",
		amount: shippingSaved
	});
	return lines;
}
//#endregion
export { getLivePromos as a, findPromo as i, discountBreakdown as n, isPromoEligible as o, discountFor as r, saveLivePromos as s, bestAutomaticPromo as t };
