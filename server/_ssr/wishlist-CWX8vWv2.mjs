import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { Ft as BellRing, f as Trash2, it as Heart } from "../_libs/lucide-react.mjs";
import { n as useWishlist } from "./wishlist-DJheDFGd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { i as getProduct, n as formatPrice } from "./products-DheZb9xp.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
import { RecentlyViewed } from "./RecentlyViewed-BS0aDtuS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-CWX8vWv2.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { slugs, remove, alerts } = useWishlist();
	const { add } = useCart();
	const items = slugs.map(getProduct).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 sm:py-14 px-3 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Breadcrumb",
				className: "mb-6 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-[#181206] transition-colors",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: "Wishlist"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-[#E8DEC8] pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#181206]",
						children: "Saved by you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#181206]",
						children: "Your Saved Hing & Wishlist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground max-w-xl",
						children: "Nothing here expires and nothing is shared. Move anything to your basket when you're ready to cook."
					})
				]
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[6px] border border-[#E8DEC8] bg-white mt-8 flex flex-col items-center px-6 py-14 text-center shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-[#FAF3D6] border border-[#E8DEC8]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "h-7 w-7 text-muted-foreground",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg font-bold text-[#181206]",
						children: "Your wishlist is currently empty"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-muted-foreground",
						children: "Tap the heart icon on any authentic formulation to save it here for later."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6 bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Browse the collection"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((p) => {
					const variant = p.variants[0];
					const soldOut = p.inStock === false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-[6px] border border-[#E8DEC8] bg-white flex gap-4 p-4 shadow-xs transition-shadow hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: p.slug },
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: p.image,
								alt: p.name,
								sizes: "96px",
								fallbackLabel: p.name,
								wrapperClassName: "h-24 w-24 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6]",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: p.slug },
									className: "line-clamp-2 font-bold text-sm text-[#181206] hover:text-[#181206] transition-colors",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-bold text-[#DC2626]",
									children: [
										formatPrice(variant.price),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-normal text-muted-foreground",
											children: ["· ", variant.label]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-wrap gap-2 pt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: soldOut,
										className: "bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold text-xs shadow-xs",
										onClick: () => add(p.slug, variant.id),
										children: soldOut ? "Sold out" : "Add to basket"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										className: "text-muted-foreground hover:text-[#DC2626] rounded-[6px] hover:bg-red-50",
										onClick: () => {
											remove(p.slug);
											toast(`${p.name} removed from your list`);
										},
										"aria-label": `Remove ${p.name} from your list`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "h-4 w-4",
											"aria-hidden": true
										})
									})]
								})
							]
						})]
					}, p.slug);
				})
			}),
			alerts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				"aria-labelledby": "alerts",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "alerts",
					className: "flex items-center gap-2 text-lg font-bold text-[#181206]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
						className: "h-4 w-4 text-[#181206]",
						"aria-hidden": true
					}), " Back-in-stock alerts"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: alerts.map((a) => {
						const p = getProduct(a.slug);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white flex items-center justify-between gap-3 p-4 text-sm shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-bold text-[#181206]",
									children: p?.name ?? a.slug
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: ["We'll message ", a.contact]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 rounded-[4px] bg-[#FFC700]/10 border border-[#FFC700]/20 px-2.5 py-1 text-xs font-bold text-[#181206]",
								children: "Watching"
							})]
						}, a.slug);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, {})
		]
	});
}
//#endregion
export { WishlistPage as component };
