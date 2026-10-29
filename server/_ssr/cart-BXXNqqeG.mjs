import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as useLiveProducts } from "./products-DheZb9xp.mjs";
import { i as useLiveMetrics } from "./metrics-DiN42Nnk.mjs";
import { i as findPromo, n as discountBreakdown, o as isPromoEligible, r as discountFor, t as bestAutomaticPromo } from "./promos-CKHTmgFt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-BXXNqqeG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "yg-cart-v1";
var PROMO_KEY = "yg-promo-v1";
var CartContext = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const products = useLiveProducts();
	const metrics = useLiveMetrics();
	const [lines, setLines] = (0, import_react.useState)([]);
	const [isOpen, setOpen] = (0, import_react.useState)(false);
	const [promoCode, setPromoCode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) setLines(JSON.parse(raw));
			const savedPromo = window.localStorage.getItem(PROMO_KEY);
			if (savedPromo && findPromo(savedPromo)) setPromoCode(savedPromo.toUpperCase());
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
			if (promoCode) window.localStorage.setItem(PROMO_KEY, promoCode);
			else window.localStorage.removeItem(PROMO_KEY);
		} catch {}
	}, [lines, promoCode]);
	const add = (0, import_react.useCallback)((slug, variantId, qty = 1) => {
		setLines((prev) => {
			const existing = prev.find((l) => l.slug === slug && l.variantId === variantId);
			if (existing) return prev.map((l) => l === existing ? {
				...l,
				qty: Math.min(l.qty + qty, 99)
			} : l);
			return [...prev, {
				slug,
				variantId,
				qty
			}];
		});
	}, []);
	const setQty = (0, import_react.useCallback)((slug, variantId, qty) => {
		setLines((prev) => qty <= 0 ? prev.filter((l) => !(l.slug === slug && l.variantId === variantId)) : prev.map((l) => l.slug === slug && l.variantId === variantId ? {
			...l,
			qty
		} : l));
	}, []);
	const remove = (0, import_react.useCallback)((slug, variantId) => {
		setLines((prev) => prev.filter((l) => !(l.slug === slug && l.variantId === variantId)));
	}, []);
	const clear = (0, import_react.useCallback)(() => {
		setLines([]);
		setPromoCode(null);
	}, []);
	const subtotalNow = (0, import_react.useMemo)(() => lines.reduce((sum, line) => {
		const variant = products.find((p) => p.slug === line.slug)?.variants.find((v) => v.id === line.variantId);
		return variant ? sum + variant.price * line.qty : sum;
	}, 0), [lines, products]);
	const applyPromo = (0, import_react.useCallback)((code) => {
		const promo = findPromo(code);
		if (!promo) return {
			ok: false,
			reason: "That code isn't valid."
		};
		if (promo.automatic) return {
			ok: false,
			reason: "This offer applies automatically when eligible."
		};
		if (!isPromoEligible(promo, subtotalNow)) return {
			ok: false,
			reason: `Add ₹${(promo.minSubtotal ?? 0) - subtotalNow} more to use ${promo.code}.`
		};
		setPromoCode(promo.code);
		return {
			ok: true,
			promo
		};
	}, [subtotalNow]);
	const removePromo = (0, import_react.useCallback)(() => setPromoCode(null), []);
	const value = (0, import_react.useMemo)(() => {
		const resolved = lines.flatMap((line) => {
			const product = products.find((p) => p.slug === line.slug);
			const variant = product?.variants.find((v) => v.id === line.variantId);
			if (!product || !variant) return [];
			return [{
				...line,
				product,
				variant,
				lineTotal: variant.price * line.qty
			}];
		});
		const subtotal = resolved.reduce((sum, l) => sum + l.lineTotal, 0);
		const manual = promoCode ? findPromo(promoCode) : void 0;
		const manualValid = manual && isPromoEligible(manual, subtotal) ? manual : void 0;
		const auto = bestAutomaticPromo(subtotal);
		const manualDiscount = manualValid ? discountFor(manualValid, subtotal) : 0;
		const appliedPromo = (auto ? discountFor(auto, subtotal) : 0) > manualDiscount ? auto : manualValid ?? auto ?? null;
		const discount = appliedPromo ? discountFor(appliedPromo, subtotal) : 0;
		const discountedSubtotal = Math.max(0, subtotal - discount);
		const freeThreshold = metrics.freeShippingThreshold || 499;
		const stdFee = metrics.standardDeliveryFee || 50;
		const baseShipping = subtotal === 0 || subtotal >= freeThreshold ? 0 : stdFee;
		const shipping = subtotal === 0 || appliedPromo?.freeShipping || discountedSubtotal >= freeThreshold ? 0 : stdFee;
		const shippingSaved = Math.max(0, baseShipping - shipping);
		const discountLines = appliedPromo ? discountBreakdown(appliedPromo, subtotal, shippingSaved) : [];
		const totalSavings = discount + shippingSaved;
		return {
			lines,
			resolved,
			count: resolved.reduce((sum, l) => sum + l.qty, 0),
			subtotal,
			discount,
			discountLines,
			totalSavings,
			shippingSaved,
			appliedPromo: appliedPromo ?? null,
			promoIsAutomatic: Boolean(appliedPromo?.automatic),
			shipping,
			total: discountedSubtotal + shipping,
			freeShippingThreshold: metrics.freeShippingThreshold || 499,
			isOpen,
			setOpen,
			add,
			setQty,
			remove,
			clear,
			applyPromo,
			removePromo
		};
	}, [
		lines,
		isOpen,
		add,
		setQty,
		remove,
		clear,
		promoCode,
		applyPromo,
		removePromo,
		products,
		metrics
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
