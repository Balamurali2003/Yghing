import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { Dt as ChevronRight, J as List, Ot as ChevronLeft, X as LayoutGrid, at as Grid2x2, ct as Funnel, r as X, v as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useLiveProducts, t as formatLabels } from "./products-DheZb9xp.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as ProductCard } from "./ProductCard-BOLtAyUK.mjs";
import { n as Route, t as PRICE_PRESETS } from "./shop-D3jDF9Bt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CeaNHyZl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filterCategories = [
	{
		id: "all",
		label: "All Categories"
	},
	{
		id: "powder",
		label: formatLabels.powder
	},
	{
		id: "granules",
		label: formatLabels.granules
	},
	{
		id: "cake",
		label: formatLabels.cake
	},
	{
		id: "gf",
		label: "Gluten-Free Pure"
	},
	{
		id: "combo",
		label: formatLabels.combo
	},
	{
		id: "wellness",
		label: formatLabels.wellness
	},
	{
		id: "pooja",
		label: formatLabels.pooja
	},
	{
		id: "appalam",
		label: formatLabels.appalam
	},
	{
		id: "vismaya",
		label: formatLabels.vismaya
	}
];
function ShopPage() {
	const products = useLiveProducts();
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const initialCat = search.category || search.format || "all";
	const [filter, setFilter] = (0, import_react.useState)(() => {
		if (filterCategories.some((c) => c.id === initialCat)) return initialCat;
		return "all";
	});
	(0, import_react.useEffect)(() => {
		const target = search.category || search.format || "all";
		if (filterCategories.some((c) => c.id === target)) setFilter(target);
		else setFilter("all");
	}, [search.category, search.format]);
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [viewMode, setViewMode] = (0, import_react.useState)("compact");
	const [minPrice, setMinPrice] = (0, import_react.useState)(() => {
		if (typeof search.minPrice === "number") return search.minPrice;
		const match = PRICE_PRESETS.find((p) => p.id === search.price);
		return match ? match.min : 18;
	});
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(() => {
		if (typeof search.maxPrice === "number") return search.maxPrice;
		const match = PRICE_PRESETS.find((p) => p.id === search.price);
		return match ? match.max : 2e3;
	});
	const [selectedPreset, setSelectedPreset] = (0, import_react.useState)(() => {
		if (search.price && PRICE_PRESETS.some((p) => p.id === search.price)) return search.price;
		return "all";
	});
	const [mobileFilterOpen, setMobileFilterOpen] = (0, import_react.useState)(false);
	const categoryCounts = (0, import_react.useMemo)(() => {
		const counts = {
			all: products.length,
			gf: products.filter((p) => p.glutenFree).length
		};
		filterCategories.forEach((fc) => {
			if (fc.id !== "all" && fc.id !== "gf") counts[fc.id] = products.filter((p) => p.format === fc.id).length;
		});
		return counts;
	}, [products]);
	const pricePresetCounts = (0, import_react.useMemo)(() => {
		const counts = {};
		PRICE_PRESETS.forEach((preset) => {
			counts[preset.id] = products.filter((p) => {
				return p.variants.some((v) => v.price >= preset.min && v.price <= preset.max);
			}).length;
		});
		return counts;
	}, [products]);
	const visible = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => {
			if (filter === "gf") {
				if (!p.glutenFree) return false;
			} else if (filter !== "all") {
				if (p.format !== filter) return false;
			}
			if (!p.variants.some((v) => v.price >= minPrice && v.price <= maxPrice)) return false;
			return true;
		});
		if (sort === "low") list = [...list].sort((a, b) => a.variants[0].price - b.variants[0].price);
		else if (sort === "high") list = [...list].sort((a, b) => b.variants[0].price - a.variants[0].price);
		else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		return list;
	}, [
		products,
		filter,
		sort,
		minPrice,
		maxPrice
	]);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const itemsPerPage = 12;
	(0, import_react.useEffect)(() => {
		setCurrentPage(1);
	}, [
		filter,
		sort,
		minPrice,
		maxPrice
	]);
	const totalPages = Math.ceil(visible.length / itemsPerPage);
	const paginated = (0, import_react.useMemo)(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return visible.slice(start, start + itemsPerPage);
	}, [
		visible,
		currentPage,
		itemsPerPage
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white font-sans pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-[#E8DEC8] bg-[#F5EAC4] py-3.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-[#6E777D]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-[#181206] transition-colors font-medium",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-[#A0A8B0]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: () => {
								setFilter("all");
								setMinPrice(18);
								setMaxPrice(2e3);
								setSelectedPreset("all");
								setCurrentPage(1);
							},
							className: cn("transition-colors font-semibold cursor-pointer", filter === "all" ? "text-[#181206]" : "text-[#6E777D] hover:text-[#181206] hover:underline"),
							children: "Shop"
						}),
						filter !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-[#A0A8B0]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[#181206] capitalize",
							children: filterCategories.find((c) => c.id === filter)?.label || filter
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline-block text-xs font-semibold text-[#181206] bg-[#FFC700]/10 px-2.5 py-0.5 rounded-[4px]",
					children: "100% Authentic Heritage"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page pt-6 sm:pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden mb-4 bg-white p-3.5 rounded-[6px] border border-[#E8DEC8] shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs font-semibold text-[#181206]",
					children: [
						"Showing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#181206]",
							children: visible.length
						}),
						" Products"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMobileFilterOpen(!mobileFilterOpen),
					className: "flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-[#FFC700] text-[#181206] font-black text-xs font-semibold shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: `lg:col-span-1 space-y-6 ${mobileFilterOpen ? "block fixed inset-0 z-50 bg-black/50 p-4 overflow-y-auto" : "hidden lg:block"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${mobileFilterOpen ? "bg-white p-6 rounded-[8px] max-w-sm mx-auto my-8 relative shadow-2xl" : "space-y-6"}`,
						children: [
							mobileFilterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 mb-4 border-b border-[#E8DEC8]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-[#181206] text-base",
									children: "Filters"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMobileFilterOpen(false),
									className: "p-1 text-[#6E777D] hover:text-[#181206]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-white p-5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-[#181206] uppercase tracking-wider pb-3 border-b border-[#E8DEC8] flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-normal lowercase text-[#6E777D]",
										children: [products.length, " items"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-2",
									children: filterCategories.map((c) => {
										const active = filter === c.id;
										const count = categoryCounts[c.id] ?? 0;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setFilter(c.id);
												navigate({
													search: (prev) => ({
														...prev,
														category: c.id === "all" ? void 0 : c.id,
														format: void 0
													}),
													replace: true
												});
												if (mobileFilterOpen) setMobileFilterOpen(false);
											},
											className: `w-full flex items-center justify-between px-3 py-2 rounded-[6px] text-xs font-semibold transition-all duration-200 text-left cursor-pointer active:scale-98 ${active ? "bg-[#FFC700] text-[#181206] font-black shadow-xs border border-[#D8A700] translate-x-1" : "text-[#181206] hover:bg-[#FAF3D6] hover:text-[#181206] hover:translate-x-1"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: c.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[11px] px-2 py-0.5 rounded-full font-mono font-bold transition-all ${active ? "bg-white text-[#8C5921] shadow-2xs border border-[#D8A700]" : "bg-[#FAF3D6] text-[#6E777D]"}`,
												children: count
											})]
										}, c.id);
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-white p-5 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between pb-3 border-b border-[#E8DEC8]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold text-[#181206] uppercase tracking-wider",
										children: "Price Filter"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-2",
									children: PRICE_PRESETS.map((preset) => {
										const active = selectedPreset === preset.id;
										const count = pricePresetCounts[preset.id] ?? 0;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setSelectedPreset(preset.id);
												setMinPrice(preset.min);
												setMaxPrice(preset.max);
												if (mobileFilterOpen) setMobileFilterOpen(false);
											},
											className: `w-full flex items-center justify-between px-3 py-2 rounded-[6px] text-xs font-semibold transition-all duration-200 text-left cursor-pointer active:scale-98 ${active ? "bg-[#FFC700] text-[#181206] font-black shadow-xs border border-[#D8A700] translate-x-1" : "text-[#181206] hover:bg-[#FAF3D6] hover:text-[#181206] hover:translate-x-1"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: preset.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[11px] px-2 py-0.5 rounded-full font-mono font-bold transition-all ${active ? "bg-white text-[#8C5921] shadow-2xs border border-[#D8A700]" : "bg-[#FAF3D6] text-[#6E777D]"}`,
												children: count
											})]
										}, preset.id);
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#FFC700]/20 bg-[#FAF3D6] p-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 mx-auto rounded-full bg-[#FFC700] text-[#181206] font-black flex items-center justify-center font-bold text-lg mb-2 shadow-xs",
										children: "YG"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-[#181206]",
										children: "Direct From Tirunelveli"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-[#6E777D] mt-1 leading-relaxed",
										children: "Every product is packaged fresh with batch serial numbers & tamper-evident safety seals."
									})
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "lg:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[6px] border border-[#E8DEC8] bg-white p-3.5 sm:p-4 mb-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-[#6E777D] flex flex-wrap items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Showing",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#181206]",
										children: visible.length === 0 ? 0 : `${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, visible.length)}`
									}),
									" ",
									"of ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#181206]",
										children: visible.length
									}),
									" products"
								] }), totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1 bg-[#FAF3D6] p-0.5 rounded-[6px] border border-[#E8DEC8]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setCurrentPage((p) => Math.max(1, p - 1));
												window.scrollTo({
													top: 200,
													behavior: "smooth"
												});
											},
											disabled: currentPage === 1,
											title: "Previous Page",
											"aria-label": "Previous Page",
											className: "h-6 w-6 rounded-[4px] bg-white border border-[#E8DEC8] flex items-center justify-center disabled:opacity-30 hover:bg-[#FFC700] transition-colors cursor-pointer disabled:cursor-not-allowed active:scale-95",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3 w-3 text-[#181206]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-bold text-[#181206] px-1 font-mono",
											children: [
												currentPage,
												" / ",
												totalPages
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setCurrentPage((p) => Math.min(totalPages, p + 1));
												window.scrollTo({
													top: 200,
													behavior: "smooth"
												});
											},
											disabled: currentPage === totalPages,
											title: "Next Page",
											"aria-label": "Next Page",
											className: "h-6 w-6 rounded-[4px] bg-white border border-[#E8DEC8] flex items-center justify-center disabled:opacity-30 hover:bg-[#FFC700] transition-colors cursor-pointer disabled:cursor-not-allowed active:scale-95",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-[#181206]" })
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between w-full sm:w-auto gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] p-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setViewMode("compact"),
											title: "Compact Grid",
											"aria-label": "Compact Grid",
											className: `flex items-center gap-1.5 rounded-[4px] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${viewMode === "compact" ? "bg-white text-[#181206] shadow-xs font-bold" : "text-[#6E777D] hover:text-[#181206]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden md:inline",
												children: "Grid"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setViewMode("default"),
											title: "Comfortable Cards",
											"aria-label": "Comfortable Cards",
											className: `flex items-center gap-1.5 rounded-[4px] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${viewMode === "default" ? "bg-white text-[#181206] shadow-xs font-bold" : "text-[#6E777D] hover:text-[#181206]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden md:inline",
												children: "Detailed"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setViewMode("list"),
											title: "List View",
											"aria-label": "List View",
											className: `flex items-center gap-1.5 rounded-[4px] px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer ${viewMode === "list" ? "bg-white text-[#181206] shadow-xs font-bold" : "text-[#6E777D] hover:text-[#181206]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden md:inline",
												children: "List"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5 text-[#6E777D] hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: sort,
										onValueChange: setSort,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "h-9 w-36 sm:w-44 text-xs rounded-[6px] border-[#E8DEC8] bg-white text-[#181206] font-medium",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Sort by" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-[6px] border-[#E8DEC8]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "featured",
													className: "text-xs font-medium",
													children: "Sort: Featured"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "low",
													className: "text-xs font-medium",
													children: "Price: Low to High"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "high",
													className: "text-xs font-medium",
													children: "Price: High to Low"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "rating",
													className: "text-xs font-medium",
													children: "Customer Rating"
												})
											]
										})]
									})]
								})]
							})]
						}),
						(filter !== "all" || minPrice > 18 || maxPrice < 2e3 || selectedPreset !== "all") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 mb-4 animate-in fade-in-50 duration-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#6E777D]",
									children: "Active Filters:"
								}),
								filter !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFC700] text-[#181206] border border-[#D8A700] shadow-2xs",
									children: [
										"Category: ",
										filterCategories.find((c) => c.id === filter)?.label,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setFilter("all"),
											className: "hover:text-red-700 ml-1 cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3 h-3" })
										})
									]
								}),
								(minPrice > 18 || maxPrice < 2e3 || selectedPreset !== "all") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFC700] text-[#181206] border border-[#D8A700] shadow-2xs",
									children: [selectedPreset !== "all" && selectedPreset !== "custom" ? `Price: ${PRICE_PRESETS.find((p) => p.id === selectedPreset)?.label}` : `Price: ₹${minPrice} — ₹${maxPrice}`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setMinPrice(18);
											setMaxPrice(2e3);
											setSelectedPreset("all");
										},
										className: "hover:text-red-700 ml-1 cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3 h-3" })
									})]
								})
							]
						}),
						viewMode === "compact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 animate-in fade-in-50 duration-300",
							children: paginated.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-fade-in-up h-full",
								style: { animationDelay: `${i % 9 * 45}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
									product: p,
									priority: i < 6,
									mode: "compact"
								})
							}, p.slug))
						}, `compact-${currentPage}-${filter}-${sort}`),
						viewMode === "default" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 animate-in fade-in-50 duration-300",
							children: paginated.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-fade-in-up h-full",
								style: { animationDelay: `${i % 6 * 55}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
									product: p,
									priority: i < 4,
									mode: "default"
								})
							}, p.slug))
						}, `default-${currentPage}-${filter}-${sort}`),
						viewMode === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3 sm:gap-4 animate-in fade-in-50 duration-300",
							children: paginated.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-fade-in-up",
								style: { animationDelay: `${i % 6 * 50}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
									product: p,
									priority: i < 4,
									mode: "list"
								})
							}, p.slug))
						}, `list-${currentPage}-${filter}-${sort}`),
						totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-[#6E777D]",
								children: [
									"Showing ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#181206]",
										children: (currentPage - 1) * itemsPerPage + 1
									}),
									" -",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#181206]",
										children: Math.min(currentPage * itemsPerPage, visible.length)
									}),
									" of",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-[#181206]",
										children: visible.length
									}),
									" products"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setCurrentPage((p) => Math.max(1, p - 1));
											window.scrollTo({
												top: 200,
												behavior: "smooth"
											});
										},
										disabled: currentPage === 1,
										className: "h-9 px-3.5 rounded-[6px] border border-[#E8DEC8] bg-white text-xs font-semibold text-[#181206] hover:bg-[#FAF3D6] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs flex items-center gap-1 active:scale-95",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1",
										children: Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setCurrentPage(pageNum);
												window.scrollTo({
													top: 200,
													behavior: "smooth"
												});
											},
											className: cn("h-9 w-9 rounded-[6px] text-xs font-bold transition-all cursor-pointer shadow-xs", currentPage === pageNum ? "bg-[#FFC700] text-[#181206] border border-[#FFC700] font-black" : "bg-white text-[#181206] border border-[#E8DEC8] hover:bg-[#FAF3D6]"),
											children: pageNum
										}, pageNum))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setCurrentPage((p) => Math.min(totalPages, p + 1));
											window.scrollTo({
												top: 200,
												behavior: "smooth"
											});
										},
										disabled: currentPage === totalPages,
										className: "h-9 px-3.5 rounded-[6px] border border-[#FFC700] bg-[#FFC700] text-xs font-bold text-[#181206] hover:bg-[#E6B000] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs flex items-center gap-1 active:scale-95",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}),
						visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-16 text-center rounded-[6px] border border-[#E8DEC8] bg-white p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#6E777D] text-sm",
								children: "No products match this filter criteria."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4 bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] px-5 py-2 text-xs font-bold",
								onClick: () => {
									setFilter("all");
									setMinPrice(18);
									setMaxPrice(2e3);
									setSelectedPreset("all");
								},
								children: "Reset All Filters"
							})]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { ShopPage as component };
