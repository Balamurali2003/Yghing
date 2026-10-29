import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { At as Check, D as Repeat, Et as ChevronUp, dt as Eye, it as Heart, kt as ChevronDown, y as ShoppingCart } from "../_libs/lucide-react.mjs";
import { n as useWishlist } from "./wishlist-DJheDFGd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { n as formatPrice } from "./products-DheZb9xp.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BOLtAyUK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QuickViewDialog = (0, import_react.lazy)(() => import("./QuickViewDialog-BHwecNAh.mjs").then((m) => ({ default: m.QuickViewDialog })));
function ProductCard({ product, priority, mode = "default" }) {
	const { add } = useCart();
	const wishlist = useWishlist();
	const [quickView, setQuickView] = (0, import_react.useState)(false);
	const [justAdded, setJustAdded] = (0, import_react.useState)(false);
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const variant = product.variants[0];
	const soldOut = product.inStock === false;
	const handleAddToCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		for (let i = 0; i < quantity; i++) add(product.slug, variant.id);
		toast.success(`Added ${quantity}x ${product.name} (${variant.label}) to cart!`);
		setJustAdded(true);
		setTimeout(() => setJustAdded(false), 1400);
	};
	const toggleWishlist = (e) => {
		e.preventDefault();
		e.stopPropagation();
		wishlist.toggle(product.slug);
		if (!wishlist.has(product.slug)) toast.success(`Saved ${product.name} to your wishlist!`);
		else toast.info(`Removed ${product.name} from wishlist.`);
	};
	const handleCompare = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toast.info(`${product.name}: ${variant.label} · ${formatPrice(variant.price)} · ${product.format} formulation.`);
	};
	const discountPercent = variant.mrp && variant.mrp > variant.price ? Math.round((variant.mrp - variant.price) / variant.mrp * 100) : 25;
	const isFavorite = wishlist.has(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "single-shopping-card-one product-card-interactive group bg-[#FAF3D6] border border-[#E8DEC8] rounded-[10px] sm:rounded-[12px] p-2.5 sm:p-4 transition-all duration-300 hover:border-[#FFC700] hover:shadow-[0_14px_32px_rgba(255,199,0,0.32)] flex flex-col justify-between relative h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full overflow-hidden rounded-[8px] bg-white aspect-square flex items-center justify-center p-1.5 sm:p-2 border border-[#E8DEC8]/60 transition-all duration-300 group-hover:border-[#FFC700]/70 group-hover:shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ekomart-ribbon-badge pointer-events-none transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							discountPercent,
							"%",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Off"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						preload: "intent",
						className: "h-full w-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
							priority: priority ?? false,
							sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
							src: product.image,
							alt: product.name,
							width: 800,
							height: 800,
							fallbackLabel: product.name,
							wrapperClassName: "h-full w-full flex items-center justify-center",
							className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ekomart-action-pill opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleWishlist,
								"aria-label": "Add to wishlist",
								className: cn("ekomart-action-btn", isFavorite && "bg-[#181206] text-[#FFC700] border-[#181206]"),
								title: "Add to Wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-3.5 w-3.5", isFavorite && "fill-[#FFC700] text-[#FFC700]") })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleCompare,
								"aria-label": "Compare",
								className: "ekomart-action-btn",
								title: "Compare",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-3.5 w-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: (e) => {
									e.preventDefault();
									e.stopPropagation();
									setQuickView(true);
								},
								"aria-label": "Quick View",
								className: "ekomart-action-btn",
								title: "Quick View",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col pt-2 sm:pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs sm:text-base font-bold leading-snug text-[#181206] group-hover:underline transition-colors line-clamp-2 min-h-[2.5em] sm:min-h-[auto]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							preload: "intent",
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] sm:text-xs text-[#5A6560] mt-0.5 mb-1 font-semibold",
						children: [variant.label, " Pack"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-1.5 sm:gap-2 mt-auto pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm sm:text-lg font-extrabold text-[#DC2626] font-mono",
							children: formatPrice(variant.price)
						}), variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] sm:text-sm text-[#9CA3AF] line-through font-mono",
							children: formatPrice(variant.mrp)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] sm:text-sm text-[#9CA3AF] line-through font-mono",
							children: formatPrice(Math.round(variant.price * 1.3))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-1.5 sm:gap-2 mt-2.5 pt-1.5 border-t border-[#F0F0F0]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ekomart-quantity-box shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								readOnly: true,
								value: quantity,
								"aria-label": "Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ekomart-quantity-arrows",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.preventDefault();
										e.stopPropagation();
										setQuantity((q) => Math.min(99, q + 1));
									},
									className: "ekomart-quantity-btn",
									"aria-label": "Increase quantity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-2.5 w-2.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										e.preventDefault();
										e.stopPropagation();
										setQuantity((q) => Math.max(1, q - 1));
									},
									className: "ekomart-quantity-btn",
									"aria-label": "Decrease quantity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-2.5 w-2.5" })
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleAddToCart,
							disabled: soldOut,
							className: cn("flex-1 h-8 sm:h-8.5 rounded-[6px] border border-[#FFC700] bg-[#FFC700] text-[#181206] hover:bg-[#E6B000] px-2 sm:px-3 font-extrabold text-[11px] sm:text-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95", justAdded && "bg-[#181206] text-[#FFC700] border-[#181206]", soldOut && "opacity-50 cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400"),
							"aria-label": `Add ${product.name} to cart`,
							children: justAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-[#FFC700]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Added!" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: soldOut ? "Sold Out" : "Add"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-3.5 w-3.5 shrink-0" })] })
						})]
					})
				]
			}),
			quickView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {
					product,
					open: quickView,
					onOpenChange: setQuickView
				})
			}) : null
		]
	});
}
//#endregion
export { ProductCard as t };
