import { r as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { A as Phone, At as Check, C as Search, Et as ChevronUp, K as Lock, N as Palette, P as Package, Rt as ArrowRight, U as MapPin, V as Menu, W as Mail, b as ShoppingBag, f as Trash2, g as Sparkles, it as Heart, kt as ChevronDown, l as Truck, r as X, rt as History, s as UserRound, x as ShieldCheck } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as DialogContent$1, o as DialogTitle$1, r as DialogDescription$1, t as Dialog$1 } from "./dialog-DIo89e4g.mjs";
import { n as useWishlist, t as WishlistProvider } from "./wishlist-DJheDFGd.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { a as products, n as formatPrice, s as searchProducts, t as formatLabels } from "./products-DheZb9xp.mjs";
import { n as useCart, t as CartProvider } from "./cart-BXXNqqeG.mjs";
import { n as OrdersProvider } from "./orders-DqR90r7S.mjs";
import { o as Route$10 } from "./admin-DvXJ2d0C.mjs";
import { t as Route$11 } from "./order-confirmed-CNlB7weP.mjs";
import { t as Route$12 } from "./order._id-DMAmDXh5.mjs";
import { t as Route$13 } from "./policies._slug-CVPA2CsX.mjs";
import { n as Route$14, t as QuantityStepper } from "./product._slug-V7lb9oQK.mjs";
import { n as Route$15 } from "./shop-D3jDF9Bt.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-LUSa3P__.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Xl0LsBeC.css";
var PALETTE_THEMES = [
	{
		id: "saffron",
		name: "Neon Gold",
		subtitle: "Radiant Neon Gold & Clean White Background",
		dotColor: "#FFC700",
		bgPreview: "#ffffff",
		background: "#ffffff",
		primary: "#FFC700",
		ring: "#FFC700"
	},
	{
		id: "emerald",
		name: "Champagne Amber",
		subtitle: "Glowing Amber & Clean White Background",
		dotColor: "#FFAE00",
		bgPreview: "#ffffff",
		background: "#ffffff",
		primary: "#FFAE00",
		ring: "#FFAE00"
	},
	{
		id: "indigo",
		name: "Vintage Brass",
		subtitle: "Tirunelveli Temple Brass & Clean White",
		dotColor: "#D4AF37",
		bgPreview: "#ffffff",
		background: "#ffffff",
		primary: "#D4AF37",
		ring: "#D4AF37"
	},
	{
		id: "plum",
		name: "Mysore Plum",
		subtitle: "Royal Velvet Amethyst Purple",
		dotColor: "#9333EA",
		bgPreview: "#F8EEFB",
		background: "oklch(0.960 0.030 315)",
		primary: "oklch(0.44 0.19 315)",
		ring: "oklch(0.44 0.19 315)"
	}
];
function applyThemeToDOM(themeId) {
	if (typeof document === "undefined") return;
	const item = PALETTE_THEMES.find((t) => t.id === themeId) ?? PALETTE_THEMES[0];
	document.documentElement.setAttribute("data-theme", themeId);
	document.documentElement.style.setProperty("--primary", item.primary);
	document.documentElement.style.setProperty("--color-primary", item.primary);
	document.documentElement.style.setProperty("--primary-foreground", "#181206");
	document.documentElement.style.setProperty("--color-primary-foreground", "#181206");
	document.documentElement.style.setProperty("--ring", item.ring);
	document.documentElement.style.setProperty("--color-ring", item.ring);
	document.documentElement.style.setProperty("--background", item.background);
	document.documentElement.style.setProperty("--color-background", item.background);
	document.documentElement.style.backgroundColor = item.bgPreview;
	if (document.body) {
		document.body.setAttribute("data-theme", themeId);
		document.body.style.setProperty("--primary", item.primary);
		document.body.style.setProperty("--color-primary", item.primary);
		document.body.style.setProperty("--primary-foreground", "#181206");
		document.body.style.setProperty("--color-primary-foreground", "#181206");
		document.body.style.setProperty("--background", item.background);
		document.body.style.setProperty("--color-background", item.background);
		document.body.style.backgroundColor = item.bgPreview;
	}
}
var THEME_STORAGE_KEY = "yg-palette-theme-v1";
var VALID_THEMES = new Set(PALETTE_THEMES.map((t) => t.id));
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("saffron");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let initial = "saffron";
		try {
			const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
			if (stored && VALID_THEMES.has(stored)) initial = stored;
		} catch {}
		setThemeState(initial);
		applyThemeToDOM(initial);
		document.documentElement.classList.remove("dark");
		document.documentElement.style.colorScheme = "light";
		setReady(true);
	}, []);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		applyThemeToDOM(next);
		try {
			window.localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {}
	}, []);
	const cycleTheme = (0, import_react.useCallback)(() => {
		const list = PALETTE_THEMES.map((t) => t.id);
		const next = list[(list.indexOf(theme) + 1) % list.length] ?? "saffron";
		setTheme(next);
	}, [theme, setTheme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		cycleTheme,
		ready
	}), [
		theme,
		setTheme,
		cycleTheme,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function ThemeSwitcher({ className = "" }) {
	const { theme, setTheme } = useTheme();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const current = PALETTE_THEMES.find((t) => t.id === theme) ?? PALETTE_THEMES[0];
	(0, import_react.useEffect)(() => {
		const handleOutsideClick = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
		};
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		if (isOpen) {
			document.addEventListener("mousedown", handleOutsideClick);
			document.addEventListener("touchstart", handleOutsideClick);
			document.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);
	const handleSelect = (id, name) => {
		setTheme(id);
		setIsOpen(false);
		toast.success(`Theme changed to ${name}`, { duration: 1500 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: dropdownRef,
		className: `relative inline-block text-left ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setIsOpen((prev) => !prev),
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			"aria-label": `Current Theme: ${current.name}. Click to change theme.`,
			className: "flex items-center gap-1 sm:gap-2 h-8 sm:h-9 px-1.5 sm:px-3 rounded-full border border-border bg-background hover:bg-secondary/80 text-foreground transition-all cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-primary/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-3 w-3 rounded-full ring-2 ring-background ring-offset-1 ring-offset-border/60 shadow-xs shrink-0",
					style: { backgroundColor: current.dotColor }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0 hidden xs:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold text-foreground whitespace-nowrap hidden sm:inline",
					children: current.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3 w-3 text-muted-foreground transition-transform duration-200 hidden sm:block ${isOpen ? "rotate-180 text-primary" : ""}` })
			]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 mt-2 w-64 rounded-2xl border-2 border-border bg-white p-2 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-150",
			role: "menu",
			"aria-orientation": "vertical",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-2.5 py-1.5 mb-1 flex items-center justify-between border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
					children: "Select Color Theme"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full",
					children: "4 Themes"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: PALETTE_THEMES.map((item) => {
					const active = item.id === theme;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => handleSelect(item.id, item.name),
						role: "menuitem",
						className: `w-full flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all text-left ${active ? "bg-primary/10 border border-primary/30 text-primary shadow-xs" : "hover:bg-muted/70 text-foreground border border-transparent"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `h-4 w-4 rounded-full ring-2 ring-white shadow-xs shrink-0 transition-transform ${active ? "scale-110 ring-primary" : ""}`,
								style: { backgroundColor: item.dotColor }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold leading-tight text-foreground",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground truncate",
									children: item.subtitle
								})]
							})]
						}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 ml-2 shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" })
						}) : null]
					}, item.id);
				})
			})]
		})]
	});
}
var QUICK_SUGGESTIONS = [
	"Gold Powder",
	"Solid Cake",
	"Gluten-Free",
	"Granules",
	"Appalam",
	"Vismaya",
	"Health Mix",
	"Sambrani",
	"Combo Box",
	"100g"
];
function SearchDialog({ open, onOpenChange }) {
	const navigate = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open) {
			const t = setTimeout(() => {
				inputRef.current?.focus();
			}, 50);
			return () => clearTimeout(t);
		}
		setQuery("");
	}, [open]);
	const productHits = (0, import_react.useMemo)(() => {
		const q = query.trim();
		if (!q) return products.filter((p) => p.bestseller || p.format === "powder" || p.format === "cake").slice(0, 6);
		return searchProducts(q);
	}, [query]);
	const handleSelectProduct = (slug) => {
		onOpenChange(false);
		navigate({
			to: "/product/$slug",
			params: { slug }
		});
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (productHits.length > 0) handleSelectProduct(productHits[0].slug);
			else {
				onOpenChange(false);
				navigate({ to: "/shop" });
			}
		} else if (e.key === "Escape") onOpenChange(false);
	};
	const hasResults = productHits.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
			className: "max-w-xl overflow-hidden p-0 gap-0 rounded-[6px] shadow-2xl border border-[#E8DEC8] bg-white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
					className: "sr-only",
					children: "Search Y.G Asafoetida"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
					className: "sr-only",
					children: "Search for artisanal hing powders, solid cakes, gluten-free formulations, appalam, and wellness mixes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center border-b border-[#E8DEC8] bg-[#FAF3D6] px-3.5 sm:px-4 py-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 sm:h-5 sm:w-5 text-[#181206] shrink-0 mr-2.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "text",
							placeholder: "Search hing, powder, cake, granules, appalam...",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							onKeyDown: handleKeyDown,
							className: "h-12 sm:h-14 w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground outline-hidden pr-20"
						}),
						query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setQuery("");
								inputRef.current?.focus();
							},
							className: "absolute right-11 top-1/2 -translate-y-1/2 p-1 text-xs text-muted-foreground hover:text-foreground rounded-[4px] transition-colors",
							"aria-label": "Clear search query",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 overflow-x-auto px-3.5 sm:px-4 py-2 bg-white border-b border-[#E8DEC8] scrollbar-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 mr-1",
						children: "Popular:"
					}), QUICK_SUGGESTIONS.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setQuery(tag);
							inputRef.current?.focus();
						},
						className: `px-2.5 py-1 rounded-[4px] text-[11px] font-medium transition-all shrink-0 cursor-pointer ${query.toLowerCase() === tag.toLowerCase() ? "bg-[#FFC700] text-[#181206] font-black font-bold shadow-xs" : "bg-[#FAF3D6] border border-[#E8DEC8] text-muted-foreground hover:text-[#181206] hover:border-[#FFC700]"}`,
						children: tag
					}, tag))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[60vh] overflow-y-auto divide-y divide-[#E2E2E2]/60 p-2 sm:p-3 space-y-4",
					children: [
						!hasResults && query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-10 text-center space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 w-12 rounded-full bg-[#FAF3D6] border border-[#E8DEC8] flex items-center justify-center mx-auto text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-[#181206]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-foreground text-sm sm:text-base",
									children: [
										"No direct match for “",
										query,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1 max-w-sm mx-auto",
									children: "Try searching for general terms like “powder”, “cake”, “gluten-free”, or “rasam”."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "text-xs gap-1.5 font-bold border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white rounded-[6px]",
									onClick: () => {
										onOpenChange(false);
										navigate({ to: "/shop" });
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }),
										"Browse All ",
										products.length,
										" Products in Shop"
									]
								})
							]
						}) : null,
						productHits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-2 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
									children: query.trim() ? `Matching Formulations (${productHits.length})` : "Featured Hing Formulations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										onOpenChange(false);
										navigate({ to: "/shop" });
									},
									className: "text-[11px] text-[#181206] hover:underline font-bold",
									children: "View all in Shop"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1",
								children: productHits.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleSelectProduct(p.slug),
									className: "w-full flex items-center gap-3 p-2 rounded-[6px] text-left transition-all hover:bg-[#FAF3D6] group cursor-pointer border border-transparent hover:border-[#E8DEC8]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: p.image,
											alt: p.name,
											wrapperClassName: "h-12 w-12 shrink-0 rounded-[6px] overflow-hidden bg-[#FAF3D6] border border-[#E8DEC8]",
											className: "h-full w-full object-cover group-hover:scale-105 transition-transform"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 flex-wrap",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-bold text-xs sm:text-sm text-[#181206] group-hover:text-[#181206] transition-colors truncate",
														children: p.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] px-1.5 py-0.5 rounded-[4px] bg-[#FAF3D6] text-[#4A5568] border border-[#E8DEC8] font-semibold uppercase",
														children: formatLabels[p.format]
													}),
													p.bestseller ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] px-1.5 py-0.5 rounded-[4px] bg-[#EABC5E]/20 text-[#A67C1E] border border-[#EABC5E]/40 font-bold",
														children: "Bestseller"
													}) : null
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground truncate mt-0.5",
												children: p.tagline
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-xs sm:text-sm text-[#DC2626] block",
												children: formatPrice(p.variants[0].price)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] text-[#181206] flex items-center gap-0.5 justify-end group-hover:translate-x-0.5 transition-transform font-bold",
												children: ["View ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-2.5 w-2.5" })]
											})]
										})
									]
								}, p.slug))
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onOpenChange(false);
											navigate({ to: "/shop" });
										},
										className: "p-2 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] hover:bg-[#FFC700]/10 hover:border-[#FFC700]/40 text-center transition-all group cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 mx-auto mb-1 text-[#181206] group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-[#181206] block",
											children: "Shop All"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onOpenChange(false);
											navigate({ to: "/track" });
										},
										className: "p-2 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] hover:bg-[#FFC700]/10 hover:border-[#FFC700]/40 text-center transition-all group cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 mx-auto mb-1 text-[#181206] group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-[#181206] block",
											children: "Track Order"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onOpenChange(false);
											navigate({ to: "/story" });
										},
										className: "p-2 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] hover:bg-[#FFC700]/10 hover:border-[#FFC700]/40 text-center transition-all group cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4 mx-auto mb-1 text-[#181206] group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-[#181206] block",
											children: "Since 1931"
										})]
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-2.5 bg-[#FAF3D6] border-t border-[#E8DEC8] flex items-center justify-between text-[11px] text-muted-foreground px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Press ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "px-1.5 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] font-mono text-[10px]",
							children: "Enter"
						}),
						" to select"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
						className: "px-1.5 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] font-mono text-[10px]",
						children: "Esc"
					}), " to close"] })]
				})
			]
		})
	});
}
var headerCategoryItems = [
	{
		id: "all",
		label: "All Formulations",
		badge: "All"
	},
	{
		id: "powder",
		label: "Compounded Powder"
	},
	{
		id: "cake",
		label: "Solid Cake & Lump"
	},
	{
		id: "gf",
		label: "Gluten-Free Pure",
		badge: "Pure"
	},
	{
		id: "granules",
		label: "Granules & Pellets"
	},
	{
		id: "wellness",
		label: "Health Mix (Sathu Maavu)"
	},
	{
		id: "appalam",
		label: "Crispy Appalam"
	},
	{
		id: "vismaya",
		label: "Vismaya Ready to Cook"
	},
	{
		id: "pooja",
		label: "Pooja Sambrani"
	}
];
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/story",
		label: "About"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/custom-branding",
		label: "White Labelling"
	},
	{
		to: "/exports",
		label: "Exports"
	},
	{
		to: "/account",
		label: "Orders"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const cart = useCart();
	const wishlist = useWishlist();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [categoryDropdownOpen, setCategoryDropdownOpen] = (0, import_react.useState)(false);
	const [mobileCategoriesOpen, setMobileCategoriesOpen] = (0, import_react.useState)(false);
	const categoryDropdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!categoryDropdownOpen) return;
		const handleClickOutside = (e) => {
			if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target)) setCategoryDropdownOpen(false);
		};
		const handleEscape = (e) => {
			if (e.key === "Escape") setCategoryDropdownOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [categoryDropdownOpen]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setSearchOpen((o) => !o);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		let done = false;
		const warm = () => {
			if (done) return;
			done = true;
			for (const item of nav) router.preloadRoute({ to: item.to });
		};
		const w = window;
		const id = w.requestIdleCallback ? w.requestIdleCallback(warm) : window.setTimeout(warm, 1200);
		window.addEventListener("pointerdown", warm, {
			once: true,
			passive: true
		});
		return () => {
			window.removeEventListener("pointerdown", warm);
			if (!w.requestIdleCallback) window.clearTimeout(id);
		};
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "w-full relative z-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#FFC700] text-[#181206] py-1 sm:py-1.5 text-[10px] sm:text-xs border-b border-[#D8A700] font-medium overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-row items-center justify-between gap-2 px-2.5 sm:px-6 whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 min-w-0 truncate",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-0.5 bg-[#181206] text-[#FFC700] font-black text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-2.5 w-2.5 sm:h-3 sm:w-3" }), " Special"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#181206] text-[10px] sm:text-xs font-semibold truncate",
								children: "FREE delivery & 40% OFF next 3 orders!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-[#181206]/75 font-normal",
								children: "· Limited time festive offer"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-4 text-[#181206] text-[10px] sm:text-xs font-semibold shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/custom-branding",
							className: "hidden lg:inline-flex items-center gap-1 bg-[#181206]/10 hover:bg-[#181206]/20 text-[#181206] border border-[#181206]/20 px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors",
							children: "Enquire for Bulk Order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:04622335555",
							className: "flex items-center gap-1 hover:text-black transition-colors",
							title: "Direct Factory Hotline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden xs:inline sm:inline",
								children: "Call: "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[#181206]",
								children: "0462 - 233 5555"
							})] })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#FAF3D6] text-[#181206] py-2.5 sm:py-3.5 border-b border-[#E8DEC8] shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between gap-2.5 sm:gap-6 px-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
								open: menuOpen,
								onOpenChange: setMenuOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": "Open navigation menu",
										className: "h-9 w-9 text-[#181206] hover:bg-[#FFC700]/30 active:scale-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
									side: "left",
									className: "w-72 p-5 sm:p-6 flex flex-col justify-between bg-white text-[#181206]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center pb-4 border-b border-[#E8DEC8]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/logo.png",
											alt: "Logo",
											className: "h-12 w-auto object-contain"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										className: "mt-5 flex flex-col gap-2 font-semibold",
										children: [
											nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												onClick: () => setMenuOpen(false),
												className: "bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] rounded-[6px] px-3.5 py-2.5 text-sm font-bold border border-[#D8A700] shadow-xs transition-all flex items-center justify-between",
												activeProps: { className: "!bg-white !text-[#8C5921] !border-[#8C5921] font-black ring-2 ring-[#FFC700]/80 shadow-xs" },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })
											}, item.to)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setMobileCategoriesOpen((o) => !o),
													className: "w-full bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] rounded-[6px] px-3.5 py-2.5 text-sm font-bold border border-[#D8A700] shadow-xs transition-all flex items-center justify-between cursor-pointer active:scale-98",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shop by Category" })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 text-[#5A6560] transition-transform duration-200", mobileCategoriesOpen && "rotate-180") })]
												}), mobileCategoriesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 ml-1 pl-3 border-l-2 border-[#FFC700] flex flex-col gap-1.5 py-1 text-xs font-semibold animate-in fade-in-50 duration-200",
													children: headerCategoryItems.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/shop",
														search: { category: cat.id === "all" ? void 0 : cat.id },
														onClick: () => {
															setMenuOpen(false);
															setMobileCategoriesOpen(false);
														},
														className: "py-1 px-2 rounded text-[#181206] hover:bg-[#FAF3D6] hover:text-[#8C5921] transition-colors flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }), cat.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] bg-[#FFC700] text-[#181206] px-1.5 py-0.2 rounded font-bold",
															children: cat.badge
														})]
													}, cat.id))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/custom-branding",
												onClick: () => setMenuOpen(false),
												className: "bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] rounded-[6px] px-3.5 py-2.5 text-sm font-bold border border-[#D8A700] shadow-xs transition-all mt-1 flex items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire for Bulk Order" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/wishlist",
												onClick: () => setMenuOpen(false),
												className: "bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] rounded-[6px] px-3.5 py-2.5 text-sm font-bold border border-[#D8A700] shadow-xs transition-all flex items-center justify-between",
												activeProps: { className: "!bg-white !text-[#8C5921] !border-[#8C5921] font-black ring-2 ring-[#FFC700]/80 shadow-xs" },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Wishlist" }), wishlist.slugs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#8C5921] text-white text-xs font-bold px-2 py-0.5",
													children: wishlist.slugs.length
												}) : null]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/track",
												onClick: () => setMenuOpen(false),
												className: "bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] rounded-[6px] px-3.5 py-2.5 text-sm font-bold border border-[#D8A700] shadow-xs transition-all",
												activeProps: { className: "!bg-white !text-[#8C5921] !border-[#8C5921] font-black ring-2 ring-[#FFC700]/80 shadow-xs" },
												children: "Track Order"
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-[#E8DEC8] flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-[#5A6560]",
											children: "Theme Switcher"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeSwitcher, {})]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center shrink-0 group py-1",
							title: "Y.G Asafoetida Home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-14 sm:h-16 md:h-20 lg:h-22 w-auto flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "Y.G Asafoetida Logo",
									className: "h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xs"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:flex items-center flex-1 max-w-2xl mx-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full items-center bg-white rounded-[6px] p-1 shadow-xs border border-black/15 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										ref: categoryDropdownRef,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setCategoryDropdownOpen((o) => !o),
											"aria-expanded": categoryDropdownOpen,
											"aria-haspopup": "true",
											className: "flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#181206] hover:text-[#8C5921] transition-colors shrink-0 cursor-pointer select-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4 text-[#181206]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Categories" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3 w-3 text-[#5A6560] transition-transform duration-200", categoryDropdownOpen && "rotate-180 text-[#181206]") })
											]
										}), categoryDropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-full left-0 mt-2 w-56 bg-white border border-[#E8DEC8] rounded-xl shadow-xl py-1.5 z-50 text-[#181206] animate-in fade-in-50 zoom-in-95 duration-150",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "py-1",
												children: headerCategoryItems.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/shop",
													search: { category: cat.id === "all" ? void 0 : cat.id },
													onClick: () => setCategoryDropdownOpen(false),
													className: "flex items-center justify-between px-3.5 py-2 text-xs hover:bg-[#FAF3D6] hover:text-[#8C5921] font-semibold transition-colors border-b border-gray-50 last:border-b-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cat.id === "all" ? "font-bold text-[#181206]" : "",
														children: cat.label
													}), cat.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] bg-[#FFC700] text-[#181206] px-1.5 py-0.5 rounded font-mono font-bold",
														children: cat.badge
													})]
												}, cat.id))
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-px bg-[#E2E2E2] mx-1 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSearchOpen(true),
										className: "flex-1 text-left px-3 py-2 text-xs text-[#5A6560] hover:text-[#181206] focus:outline-none flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search for products, formulations..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-[#FAF3D6] px-1.5 py-0.5 rounded border border-[#E8DEC8] text-[#5A6560] font-mono",
											children: "Ctrl+K"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSearchOpen(true),
										className: "bg-[#FFC700] hover:bg-[#F0B800] text-[#181206] px-5 py-2.5 rounded-[4px] text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 shadow-xs cursor-pointer active:scale-95 border border-[#D8A700]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5 text-[#181206]" })]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 sm:gap-2.5 shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSearchOpen(true),
									className: "lg:hidden h-9 w-9 flex items-center justify-center text-[#181206] hover:bg-[#FFC700]/30 rounded-[6px] transition-colors active:scale-95",
									"aria-label": "Search",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/account",
									className: "bg-[#FFC700] text-[#181206] hover:bg-[#F0B800] h-9 px-2.5 sm:px-3.5 rounded-[6px] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs border border-[#D8A700] transition-all cursor-pointer active:scale-95",
									title: "Account",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-4 w-4 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Account"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/wishlist",
									className: "bg-[#FFC700] text-[#181206] hover:bg-[#F0B800] h-9 px-2.5 sm:px-3.5 rounded-[6px] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs border border-[#D8A700] transition-all relative cursor-pointer active:scale-95",
									"aria-label": "Wishlist",
									title: "Wishlist",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-3.5 -right-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#181206] text-[#FFC700] text-[9px] font-black px-1 shadow-xs",
											children: wishlist.slugs.length || 0
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline ml-1",
										children: "Wishlist"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => cart.setOpen(true),
									className: "bg-[#FFC700] text-[#181206] hover:bg-[#F0B800] h-9 px-2.5 sm:px-3.5 rounded-[6px] text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs border border-[#D8A700] transition-all relative cursor-pointer active:scale-95",
									"aria-label": "Open cart",
									title: "Cart",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-3.5 -right-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#181206] text-[#FFC700] text-[9px] font-black px-1 shadow-xs",
											children: cart.count
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline ml-1",
										children: "My Cart"
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 bg-[#FAF3D6]/95 backdrop-blur-xs border-t border-b border-[#E8DEC8] shadow-xs z-30 py-1 sm:py-1.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between min-h-11 sm:min-h-12 px-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-2 sm:gap-2.5 lg:gap-3 overflow-x-auto scrollbar-none py-1",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "bg-[#FFC700] text-[#181206] hover:bg-[#FFE57F] hover:border-[#C99600] font-bold text-xs sm:text-sm tracking-wide whitespace-nowrap px-3 sm:px-3.5 py-1.5 rounded-[6px] border border-[#D8A700] shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95",
							activeProps: { className: "!bg-white !text-[#8C5921] !border-[#8C5921] font-black shadow-xs ring-2 ring-[#FFC700]/80" },
							children: item.label
						}, item.to))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-1.5 text-xs text-[#181206] shrink-0 font-bold bg-[#FFC700]/25 border border-[#D8A700]/60 px-3 py-1.5 rounded-[6px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#8C5921]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Delivery: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tamil Nadu & All India Direct Dispatch" })] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
				open: searchOpen,
				onOpenChange: setSearchOpen
			})
		]
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (!email || !email.includes("@")) {
			toast.error("Please enter a valid email address");
			return;
		}
		setSubscribed(true);
		toast.success("Thank you for subscribing to Y.G Asafoetida updates!");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 bg-[#141812] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-white/10 py-8 sm:py-10 bg-[#1C2219]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-col md:flex-row items-center justify-between gap-6 px-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md text-center md:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#FFC700] font-black text-xs uppercase tracking-wider",
								children: "Stay Connected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl sm:text-2xl font-bold text-white mt-1",
								children: "Join Our Pure Spice & Recipe Newsletter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/70 text-xs sm:text-sm mt-1",
								children: "Receive 15% off your first order, seasonal harvest notes & authentic heritage recipes."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubscribe,
						className: "flex w-full max-w-md items-center bg-white rounded-[6px] p-1 shadow-sm border border-black/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "Enter your email address",
							className: "flex-1 px-3 py-2 text-xs sm:text-sm text-[#181206] placeholder:text-[#5A6560] focus:outline-none",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] px-4 py-2.5 rounded-[4px] text-xs sm:text-sm font-black flex items-center gap-1.5 transition-colors shrink-0 shadow-xs active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: subscribed ? "Subscribed!" : "Subscribe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 sm:gap-10 py-10 sm:py-14 px-3 sm:px-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-[6px] bg-white p-1 flex items-center justify-center shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "Y.G Asafoetida Logo",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl font-bold text-white leading-none flex items-center gap-1.5",
								children: "Y.G Asafoetida"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold text-white/70 tracking-wider uppercase mt-1",
								children: "Tirunelveli · Since 1931"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs sm:text-sm text-white/70 leading-relaxed",
							children: "Crafting pure compounded asafoetida, solid gold cakes, and wood-roasted traditional mixes in Tirunelveli with 94 years of heritage across three generations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3 text-xs text-[#FFC700] font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#FFC700]" }), " FSSAI Certified"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-[#FFC700]" }), " India-Wide Delivery"]
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFC700] pl-2.5",
						children: "Our Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-xs sm:text-sm text-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "hover:text-[#FFC700] transition-colors",
								children: "All Products Collection"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: "gold-asafoetida-powder" },
								className: "hover:text-[#FFC700] transition-colors",
								children: "Gold Compounded Hing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: "gluten-free-asafoetida-powder" },
								className: "hover:text-[#FFC700] transition-colors",
								children: "Gluten-Free Asafoetida"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: "asafoetida-gold-cake" },
								className: "hover:text-[#FFC700] transition-colors",
								children: "Traditional Gold Cake"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: "traditional-health-mix" },
								className: "hover:text-[#FFC700] transition-colors",
								children: "Sathu Maavu Health Mix"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: "pure-benzoin-sambrani" },
								className: "hover:text-[#FFC700] transition-colors",
								children: "Pure Benzoin Sambrani"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFC700] pl-2.5",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-xs sm:text-sm text-white/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/story",
								className: "hover:text-[#FFC700] transition-colors",
								children: "Our 1931 Story"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/custom-branding",
								className: "hover:text-[#FFC700] transition-colors",
								children: "White Labelling & Bulk"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/exports",
								className: "hover:text-[#FFC700] transition-colors",
								children: "Global Exports"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-[#FFC700] transition-colors",
								children: "Customer Support"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/track",
								className: "hover:text-[#FFC700] transition-colors",
								children: "Track Your Order"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/wishlist",
								className: "hover:text-[#FFC700] transition-colors",
								children: "Saved Wishlist"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								className: "hover:text-[#FFC700] transition-colors",
								children: "My Account"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-1 border-t border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/admin",
									className: "hover:text-[#FFC700] transition-colors inline-flex items-center gap-1.5 text-[#FFC700]/90 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 text-[#FFC700]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin Portal" })]
								})
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#FFC700] pl-2.5",
							children: "Contact & Works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-xs sm:text-sm text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#FFC700] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "leading-snug",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mayil Agro Foods" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"1/303, M.K. Nagar, Near to HP Fuel Station, Abhisekapatti, Tirunelveli - Tenkasi Main Road, Tirunelveli - 627 012"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#FFC700] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Tel: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:04622335555",
										className: "hover:text-[#FFC700]",
										children: "0462 - 233 5555"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#FFC700] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Mobile: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+917200622221",
										className: "hover:text-[#FFC700]",
										children: "+91 7200622221"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#FFC700] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Sales Desk: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+917904567979",
										className: "hover:text-[#FFC700]",
										children: "+91 7904567979"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[#FFC700] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:Sales@yghing.com",
										className: "hover:text-[#FFC700]",
										children: "Sales@yghing.com"
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5 text-[11px] text-white/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-[#FFC700] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["White Labelling: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:b2bsales@yghing.com",
										className: "hover:text-[#FFC700] text-white/90",
										children: "b2bsales@yghing.com"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 p-3 bg-white/5 rounded-[6px] border border-white/10 text-[11px] text-white/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-white",
								children: "Business Hours:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Monday – Saturday: 9:00 AM – 7:00 PM" })]
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10 py-5 bg-[#17171C]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 text-xs text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Y.G Asafoetida. All rights reserved."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Policies and Administration",
							className: "flex flex-wrap items-center gap-4 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/policies/$slug",
									params: { slug: "shipping" },
									className: "hover:text-white transition-colors",
									children: "Shipping Policy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/policies/$slug",
									params: { slug: "returns" },
									className: "hover:text-white transition-colors",
									children: "Returns & Refunds"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/policies/$slug",
									params: { slug: "privacy" },
									className: "hover:text-white transition-colors",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/policies/$slug",
									params: { slug: "terms" },
									className: "hover:text-white transition-colors",
									children: "Terms & Conditions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/admin",
									className: "inline-flex items-center gap-1 text-[#FFC700]/80 hover:text-[#FFC700] font-semibold transition-colors pl-2 border-l border-white/15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin Login" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[10px] text-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Secure 256-bit Checkout" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "UPI / Cards / NetBanking" })
							]
						})
					]
				})
			})
		]
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function CartDrawer() {
	const cart = useCart();
	const remaining = Math.max(cart.freeShippingThreshold - cart.subtotal, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cart.isOpen,
		onOpenChange: cart.setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-md bg-white border-l border-[#E8DEC8]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "border-b border-[#E8DEC8] px-5 py-4 bg-[#FAF3D6]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "text-lg font-bold text-[#181206] flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-[#181206]" }),
						"Your basket ",
						cart.count > 0 ? `(${cart.count})` : ""
					]
				})
			}), cart.resolved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-16 w-16 rounded-full bg-[#FAF3D6] border border-[#FFC700] flex items-center justify-center shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-8 w-8 text-[#181206]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-[#181206] text-base",
						children: "Your basket is empty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Start with our 1931 classic hing powder and authentic South Indian spices."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] border border-black/15 rounded-[6px] font-bold shadow-xs",
						onClick: () => cart.setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "Shop all products"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-[#E8DEC8] bg-[#FFC700]/15 px-5 py-3",
					children: [remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-[#181206]",
						children: [
							"Add ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[#DC2626]",
								children: formatPrice(remaining)
							}),
							" ",
							"more for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black text-[#181206]",
								children: "free shipping"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black text-[#181206] flex items-center gap-1.5",
						children: "✓ You've unlocked free shipping!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						className: "mt-2 h-2 bg-[#E2E2E2] [&>div]:bg-[#FFC700] border border-black/10",
						value: Math.min(cart.subtotal / cart.freeShippingThreshold * 100, 100)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-4 overflow-y-auto px-5 py-4 divide-y divide-[#F0F0F0]",
					children: cart.resolved.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-3 first:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: line.product.image,
								alt: line.product.name,
								width: 1e3,
								height: 1e3,
								wrapperClassName: "h-20 w-20 shrink-0 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6]",
								className: "h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-bold text-[#181206] hover:underline transition-colors",
										children: line.product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: line.variant.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityStepper, {
											small: true,
											qty: line.qty,
											onChange: (q) => cart.setQty(line.slug, line.variantId, q)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-[#DC2626]",
											children: formatPrice(line.lineTotal)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Remove item",
								onClick: () => cart.remove(line.slug, line.variantId),
								className: "self-start p-1.5 text-muted-foreground transition-colors hover:text-[#DC2626] rounded-[4px] hover:bg-red-50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})
						]
					}, `${line.slug}-${line.variantId}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-[#E8DEC8] bg-[#FAF3D6]/50 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Subtotal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: formatPrice(cart.subtotal)
							})]
						}),
						cart.appliedPromo && cart.totalSavings > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 rounded-[6px] border border-[#FFC700]/50 bg-[#FFC700]/20 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs font-bold text-[#181206]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Promo ",
									cart.appliedPromo.code,
									cart.promoIsAutomatic ? " (auto)" : ""
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(cart.totalSavings)] })]
							}), cart.discountLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatPrice(line.amount)] })]
							}, line.label))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Shipping"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: cart.shipping === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#181206] font-bold",
									children: "Free"
								}) : formatPrice(cart.shipping)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-t border-[#E8DEC8] pt-3 text-base font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#181206]",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg text-[#DC2626]",
								children: formatPrice(cart.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] border border-black/15 rounded-[6px] font-black active:scale-[0.98] py-3 text-sm shadow-md",
							size: "lg",
							asChild: true,
							onClick: () => cart.setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/checkout",
								preload: "render",
								children: ["Proceed to Checkout · ", formatPrice(cart.total)]
							})
						})
					]
				})
			] })]
		})
	});
}
/** Sticky mobile mini-cart: shows what's in the basket and opens the full drawer. */
function MobileCartBar() {
	const cart = useCart();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const hiddenRoute = pathname.startsWith("/checkout") || pathname.startsWith("/product/") || pathname.startsWith("/order");
	const visible = cart.resolved.length > 0 && !hiddenRoute;
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const apply = () => {
			if (visible && window.innerWidth < 1024) root.style.setProperty("--fab-offset", "4.75rem");
			else root.style.removeProperty("--fab-offset");
		};
		apply();
		window.addEventListener("resize", apply);
		return () => {
			window.removeEventListener("resize", apply);
			root.style.removeProperty("--fab-offset");
		};
	}, [visible]);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => cart.setOpen(true),
			"aria-label": `Open basket, ${cart.count} item${cart.count === 1 ? "" : "s"}, total ${formatPrice(cart.total)}`,
			className: "flex w-full items-center gap-3 rounded-xl bg-primary px-3.5 py-2.5 text-primary-foreground font-bold border border-black/15 shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none active:scale-98 transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex -space-x-2",
					children: [cart.resolved.slice(0, 3).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: line.product.image,
						alt: line.product.name,
						width: 200,
						height: 200,
						wrapperClassName: "h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-primary-foreground/70",
						className: "h-full w-full object-cover"
					}, `${line.slug}-${line.variantId}`)), cart.resolved.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-foreground/70 bg-primary text-[11px] font-semibold",
						children: ["+", cart.resolved.length - 3]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							cart.count,
							" item",
							cart.count === 1 ? "" : "s",
							" · ",
							formatPrice(cart.total)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] opacity-80",
						children: "Tap to view full basket"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 text-xs font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}),
						"View",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
/**
* Global tactile click feedback component.
* Provides micro-animations (visual primary-tinted ripple burst) and optional haptic
* feedback on every interactive click across buttons, links, cards, tabs, and toggles.
* (Custom mouse pointer has been removed as requested; natural browser cursor is preserved).
*/
function ClickEffects() {
	(0, import_react.useEffect)(() => {
		const handlePointerDown = (e) => {
			if (e.button !== 0) return;
			const target = e.target;
			if (!target) return;
			if (!Boolean(target.closest("button, a, input, select, textarea, [role='button'], [role='tab'], [role='menuitem'], [data-clickable], .clickable, summary, label, .single-shopping-card-one, .ekomart-action-btn, .rts-btn"))) return;
			if (typeof navigator !== "undefined" && "vibrate" in navigator) try {
				navigator.vibrate(8);
			} catch {}
			const ripple = document.createElement("div");
			ripple.className = "click-ripple-burst";
			ripple.style.left = `${e.clientX}px`;
			ripple.style.top = `${e.clientY}px`;
			document.body.appendChild(ripple);
			ripple.addEventListener("animationend", () => {
				ripple.remove();
			}, { once: true });
			setTimeout(() => {
				if (ripple.parentNode) ripple.remove();
			}, 600);
		};
		window.addEventListener("pointerdown", handlePointerDown, { passive: true });
		return () => {
			window.removeEventListener("pointerdown", handlePointerDown);
		};
	}, []);
	return null;
}
var FaqBot = (0, import_react.lazy)(() => import("./FaqBot-D8xrL2au.mjs").then((m) => ({ default: m.FaqBot })));
var BackToTop = (0, import_react.lazy)(() => import("./BackToTop-CIAUPo8W.mjs").then((m) => ({ default: m.BackToTop })));
/** Mounts children only once the browser is idle, after the page is interactive. */
function DeferUntilIdle({ children }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const w = window;
		const run = () => setReady(true);
		if (w.requestIdleCallback) {
			const id = w.requestIdleCallback(run);
			return () => window.cancelIdleCallback?.(id);
		}
		const t = window.setTimeout(run, 1200);
		return () => window.clearTimeout(t);
	}, []);
	return ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children
	}) : null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Est. 1931 · Tirunelveli"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-7xl leading-none font-bold text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl font-semibold",
				children: "This shelf is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm text-muted-foreground",
				children: "The page you're looking for doesn't exist, or it moved while we were grinding a fresh batch. Try one of these instead."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-2",
				children: [
					{
						to: "/shop",
						label: "Shop all products"
					},
					{
						to: "/story",
						label: "Our story since 1931"
					},
					{
						to: "/contact",
						label: "Contact support"
					},
					{
						to: "/account",
						label: "Your orders"
					}
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "surface-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary",
					children: l.label
				}, l.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
				children: "Back to home"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-page flex min-h-[60vh] flex-col items-center justify-center py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end — your basket and orders are safe. Try again, or reach us at care@ygasafoetida.in if it keeps happening."
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-3 rounded-lg bg-destructive/10 text-destructive text-xs font-mono text-left max-h-48 overflow-auto border border-destructive/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Error Details:" }),
						" ",
						error.message || String(error)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "google-site-verification",
				content: "JCXySiTdM9cLVtF34BfI08thOQrkAoFOo5HOBWHlnR4"
			},
			{ title: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Products Since 1931" },
			{
				name: "description",
				content: "Compounded artisanal asafoetida powder, pure gold hing cake, gluten-free hing, wood-roasted traditional health mix (sathu maavu), and pure temple benzoin sambrani from Tirunelveli since 1931."
			},
			{
				name: "keywords",
				content: "Y.G Asafoetida, YG Hing, buy hing online, asafoetida powder, pure bandhani hing, hing cake, gluten free hing, traditional health mix, sathu maavu, pure benzoin sambrani, loban, Tirunelveli hing, authentic Indian spices"
			},
			{
				name: "author",
				content: "Y.G Asafoetida"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#FFC700"
			},
			{
				property: "og:site_name",
				content: "Y.G Asafoetida"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Products Since 1931"
			},
			{
				property: "og:description",
				content: "Compounded artisanal asafoetida powder, pure gold hing cake, gluten-free hing, traditional health mix (sathu maavu), and pure temple benzoin sambrani from Tirunelveli since 1931."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				property: "og:image:alt",
				content: "Y.G Asafoetida Logo"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Products Since 1931"
			},
			{
				name: "twitter:description",
				content: "Compounded artisanal asafoetida powder, pure gold hing cake, gluten-free hing, traditional health mix, and sambrani from Tirunelveli since 1931."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "geo.region",
				content: "IN-TN"
			},
			{
				name: "geo.placename",
				content: "Tirunelveli, Tamil Nadu, India"
			},
			{
				name: "geo.position",
				content: "8.7139;77.7567"
			},
			{
				name: "ICBM",
				content: "8.7139, 77.7567"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://ygasafoetida.in"
			},
			{
				rel: "preload",
				href: styles_default,
				as: "style"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "GroceryStore",
				"name": "Y.G Asafoetida",
				"description": "Authentic Heritage Asafoetida, Traditional Health Mix & Pure Sambrani handcrafted in Tirunelveli since 1931.",
				"url": "https://ygasafoetida.in",
				"logo": "https://ygasafoetida.in/logo.png",
				"foundingDate": "1931",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Tirunelveli",
					"addressRegion": "Tamil Nadu",
					"addressCountry": "IN"
				},
				"geo": {
					"@type": "GeoCoordinates",
					"latitude": 8.7139,
					"longitude": 77.7567
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		"data-theme": "saffron",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDV4N2TK');` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
              html { background-color: #ffffff; color: #181206; font-family: "Barlow", sans-serif; overflow-x: hidden; }
              body { margin: 0; background-color: #ffffff; color: #181206; font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
              header.sticky { background-color: #FAF3D6; }
              img { content-visibility: auto; }
            ` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `try{var t=localStorage.getItem('yg-palette-theme-v1')||'saffron';document.documentElement.setAttribute('data-theme',t);var c={saffron:'#FFC700',emerald:'#FFAE00',indigo:'#D4AF37',plum:'#7289da'};if(c[t]){document.documentElement.style.setProperty('--primary',c[t]);document.documentElement.style.setProperty('--color-primary',c[t]);document.documentElement.style.setProperty('--primary-foreground','#181206');document.documentElement.style.setProperty('--background','#ffffff');document.documentElement.style.setProperty('--color-background','#ffffff');}}catch(e){}` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: "https://www.googletagmanager.com/ns.html?id=GTM-MDV4N2TK",
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				}
			}) }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col bg-white text-foreground transition-colors duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50",
						children: "Skip to main content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main",
						className: "flex-1 bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCartBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClickEffects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DeferUntilIdle, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqBot, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		] }) }) }) })
	});
}
var $$splitComponentImporter$8 = () => import("./routes-eOY2xJUj.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Y.G Asafoetida — Artisanal Hing, Sathu Maavu & Sambrani Since 1931" },
			{
				name: "description",
				content: "Buy authentic compounded asafoetida powder, pure gold hing cake, gluten-free hing, wood-roasted traditional health mix (sathu maavu), and pure temple benzoin sambrani online from Tirunelveli since 1931."
			},
			{
				name: "keywords",
				content: "buy hing online, asafoetida powder, Y.G Asafoetida, pure gold hing cake, gluten free hing, traditional health mix, sathu maavu online, pure benzoin sambrani, loban resin, Tirunelveli hing store"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/"
			},
			{
				property: "og:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing & Traditional Store Since 1931"
			},
			{
				property: "og:description",
				content: "Artisanal hing preparations, stone-ground Sathu Maavu health mix, and pure benzoin sambrani compounded in Tirunelveli."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Y.G Asafoetida — Authentic Heritage Hing Since 1931"
			},
			{
				name: "twitter:description",
				content: "Artisanal compounded hing powder, gluten-free hing, traditional sathu maavu, and pure pooja sambrani from Tirunelveli."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "Y.G Asafoetida",
				"url": "https://ygasafoetida.in",
				"potentialAction": {
					"@type": "SearchAction",
					"target": "https://ygasafoetida.in/shop?q={search_term_string}",
					"query-input": "required name=search_term_string"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./account-BXY3htZR.mjs");
var Route$7 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "Your Account — Y.G Asafoetida" },
		{
			name: "description",
			content: "View your Y.G Asafoetida orders, track deliveries, reorder hing and manage saved addresses."
		},
		{
			property: "og:title",
			content: "Your Account — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Orders, tracking and saved addresses in one place."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./checkout-DUQqvh_f.mjs");
var Route$6 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — Y.G Asafoetida" },
		{
			name: "description",
			content: "Complete your Y.G Asafoetida order with secure shipping details and payment."
		},
		{
			property: "og:title",
			content: "Checkout — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Complete your hing order from Tirunelveli."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-B9fFdIdS.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Y.G Asafoetida — Customer Support & Bulk Enquiries | Tirunelveli" },
			{
				name: "description",
				content: "Reach the Y.G Asafoetida team in Tirunelveli. Get direct help with orders, tracking, culinary recommendations, and bulk wholesale supply. Phone: +91 98765 43210."
			},
			{
				name: "keywords",
				content: "contact Y.G Asafoetida, YG Hing customer care, bulk hing supply, Tirunelveli spices contact, wholesale asafoetida, hing export enquiry"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/contact"
			},
			{
				property: "og:title",
				content: "Contact Y.G Asafoetida — Customer Care & Bulk Supply"
			},
			{
				property: "og:description",
				content: "Order help, bulk enquiries, and product questions — we reply within a working day."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact Y.G Asafoetida Support"
			},
			{
				name: "twitter:description",
				content: "Customer care and wholesale enquiries in Tirunelveli, Tamil Nadu."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				"name": "Contact Y.G Asafoetida",
				"url": "https://ygasafoetida.in/contact",
				"description": "Customer support, order resolutions, and wholesale bulk enquiries for Y.G Asafoetida.",
				"mainEntity": {
					"@type": "LocalBusiness",
					"name": "Y.G Asafoetida",
					"telephone": "0462 - 233 5555",
					"email": "Sales@yghing.com",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "1/303, M.K. Nagar, Near to HP Fuel Station, Abhisekapatti, Tirunelveli - Tenkasi Main Road",
						"addressLocality": "Tirunelveli",
						"addressRegion": "Tamil Nadu",
						"postalCode": "627012",
						"addressCountry": "IN"
					}
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./custom-branding-CN0PM31S.mjs");
var Route$4 = createFileRoute("/custom-branding")({
	head: () => ({
		meta: [
			{ title: "White Labelling & Custom Branding — Private Label Asafoetida & Spices | Y.G Asafoetida" },
			{
				name: "description",
				content: "Partner with Y.G Asafoetida for premium white labelling, contract manufacturing, and private label custom packaging. High-potency hing powders, solid cakes, idli podis, and millet blends crafted with your brand identity."
			},
			{
				name: "keywords",
				content: "white labelling hing, private label asafoetida, contract spice manufacturing India, custom branding spices, bulk hing manufacturer, Tirunelveli asafoetida wholesale, OEM spice packaging"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/custom-branding"
			},
			{
				property: "og:title",
				content: "White Labelling & Custom Branding — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Turnkey private label manufacturing, formulation tuning, and custom branded packaging for gourmet brands, exporters, and supermarket chains."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Private Label & White Labelling — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "Turnkey OEM spice compounding, custom formulation, and bespoke packaging for food brands worldwide."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/custom-branding"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				"name": "Y.G Asafoetida White Labelling & Private Label Contract Manufacturing",
				"serviceType": "Spice Manufacturing & Custom Branding",
				"provider": {
					"@type": "Organization",
					"name": "Y.G Asafoetida",
					"url": "https://ygasafoetida.in",
					"logo": "https://ygasafoetida.in/logo.png"
				},
				"areaServed": [
					"India",
					"United States",
					"United Kingdom",
					"United Arab Emirates",
					"Singapore",
					"Malaysia",
					"Australia"
				],
				"description": "Custom white labelling, bespoke recipe compounding, private branding, and wholesale packaging for spices and asafoetida."
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./exports-C5DRjjaH.mjs");
var Route$3 = createFileRoute("/exports")({
	head: () => ({
		meta: [
			{ title: "Global Exports — Pure Asafoetida, Spices & Podis Worldwide | Y.G Asafoetida" },
			{
				name: "description",
				content: "Official Export Division of Y.G Asafoetida. Exporting pure compounded Hing, Vismaya Podis, Gluten-Free Asafoetida & Appalam to Singapore, Malaysia, Sri Lanka, Canada & USA. Certified by FSSAI, MSME, NSIC, US FDA Registered, ZED Bronze & IEC."
			},
			{
				name: "keywords",
				content: "asafoetida export India, hing export wholesale, FDA registered spices exporter, FSSAI export license, ZED certified hing, IEC import export code spices, Tuticorin port spices exporter, Singapore hing import, Malaysia spices import, USA hing distributor"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/exports"
			},
			{
				property: "og:title",
				content: "Global Exports — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Official Export Division: High-potency compounded hing, solid temple cakes, gluten-free formulations and Vismaya podis exported worldwide from Tirunelveli."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/exports"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
/**
* 6 KEY CERTIFICATIONS & QUALITY STANDARDS (From Official Profile Page 10)
*/
/**
* THE PRODUCTION PROCESS (From Official Profile Page 11)
* 4-Step Staircase Flow
*/
/**
* OUR GLOBAL DISTRIBUTION NETWORK (From Official Profile Page 12)
* 5 Key International Markets
*/
var $$splitComponentImporter$2 = () => import("./story-Cg4rVr0E.mjs");
var Route$2 = createFileRoute("/story")({
	head: () => ({
		meta: [
			{ title: "Our Heritage Since 1931 — Three Generations of Tirunelveli Hing | Y.G Asafoetida" },
			{
				name: "description",
				content: "The 94-year journey of Y.G Asafoetida from a small shop on South Car Street in Tirunelveli to India's most trusted heritage hing house. Learn our artisanal stone-milling compounding craft."
			},
			{
				name: "keywords",
				content: "Y.G Asafoetida history, Tirunelveli hing history, heritage asafoetida, traditional hing compounding, South Indian spices history, 1931 spices brand"
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/story"
			},
			{
				property: "og:title",
				content: "Our Heritage Since 1931 — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Ninety-four years of stone-compounding pure hing in Tirunelveli, preserved across three generations."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Our 1931 Heritage — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "The 94-year journey of Y.G Asafoetida compounding in Tirunelveli, Tamil Nadu."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/logo.png"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/story"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "AboutPage",
				"name": "The Y.G Asafoetida Heritage Story",
				"description": "The 94-year history and artisanal compounding craft of Y.G Asafoetida in Tirunelveli since 1931.",
				"url": "https://ygasafoetida.in/story",
				"publisher": {
					"@type": "Organization",
					"name": "Y.G Asafoetida",
					"logo": "https://ygasafoetida.in/logo.png"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./track-CiCLgq4z.mjs");
var Route$1 = createFileRoute("/track")({
	head: () => ({ meta: [
		{ title: "Track your order — Y.G Asafoetida" },
		{
			name: "description",
			content: "Enter your order number and email to follow your hing from our Tirunelveli works to your kitchen — no account needed."
		},
		{
			property: "og:title",
			content: "Track your order — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Guest order lookup with live packing and dispatch status."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-CWX8vWv2.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Your kitchen list — Y.G Asafoetida" },
		{
			name: "description",
			content: "The hing you saved for later, plus the back-in-stock alerts you asked for. Move anything to your basket in one tap."
		},
		{
			property: "og:title",
			content: "Your kitchen list — Y.G Asafoetida"
		},
		{
			property: "og:description",
			content: "Saved hing, gift boxes and back-in-stock alerts, ready when you are."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AccountRoute: Route$7.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$9
	}),
	AdminRoute: Route$10.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$9
	}),
	CheckoutRoute: Route$6.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$9
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$9
	}),
	CustomBrandingRoute: Route$4.update({
		id: "/custom-branding",
		path: "/custom-branding",
		getParentRoute: () => Route$9
	}),
	ExportsRoute: Route$3.update({
		id: "/exports",
		path: "/exports",
		getParentRoute: () => Route$9
	}),
	OrderConfirmedRoute: Route$11.update({
		id: "/order-confirmed",
		path: "/order-confirmed",
		getParentRoute: () => Route$9
	}),
	ShopRoute: Route$15.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$9
	}),
	StoryRoute: Route$2.update({
		id: "/story",
		path: "/story",
		getParentRoute: () => Route$9
	}),
	TrackRoute: Route$1.update({
		id: "/track",
		path: "/track",
		getParentRoute: () => Route$9
	}),
	WishlistRoute: Route.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$9
	}),
	OrderIdRoute: Route$12.update({
		id: "/order/$id",
		path: "/order/$id",
		getParentRoute: () => Route$9
	}),
	PoliciesSlugRoute: Route$13.update({
		id: "/policies/$slug",
		path: "/policies/$slug",
		getParentRoute: () => Route$9
	}),
	ProductSlugRoute: Route$14.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadDelay: 0,
		defaultPreloadStaleTime: 6e4,
		defaultPendingMs: 4e3,
		defaultPendingMinMs: 0
	});
};
//#endregion
export { getRouter };
