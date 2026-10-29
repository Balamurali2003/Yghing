import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { Dt as ChevronRight, Rt as ArrowRight, U as MapPin, _ as Smile, a as VolumeX, g as Sparkles, ht as CreditCard, l as Truck, m as Star, o as Volume2 } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as products, l as useLiveProducts, t as formatLabels } from "./products-DheZb9xp.mjs";
import { t as ProductCard } from "./ProductCard-BOLtAyUK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-eOY2xJUj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var featuredCategories = [
	{
		id: "powder",
		title: formatLabels.powder,
		image: "/products/100g-gold-asafoetida-powder/img-1.jpg",
		itemCount: products.filter((p) => p.format === "powder").length
	},
	{
		id: "granules",
		title: formatLabels.granules,
		image: "/products/hing-pellets/img-1.jpg",
		itemCount: products.filter((p) => p.format === "granules").length
	},
	{
		id: "cake",
		title: formatLabels.cake,
		image: "/products/100g-asafoetida-gold-cake/img-1.jpg",
		itemCount: products.filter((p) => p.format === "cake").length
	},
	{
		id: "gf",
		title: "Gluten-Free Pure",
		image: "/products/50g-gluten-free-asafoetida-powder/img-1.jpg",
		itemCount: products.filter((p) => p.glutenFree).length
	},
	{
		id: "wellness",
		title: formatLabels.wellness,
		image: "/products/traditional-health-mix/img-1.jpg",
		itemCount: products.filter((p) => p.format === "wellness").length
	},
	{
		id: "appalam",
		title: formatLabels.appalam,
		image: "/products/crispy-appalam/img-1.jpg",
		itemCount: products.filter((p) => p.format === "appalam").length
	},
	{
		id: "vismaya",
		title: formatLabels.vismaya,
		image: "/products/millet-pongal-mix/img-1.jpg",
		itemCount: products.filter((p) => p.format === "vismaya").length
	},
	{
		id: "pooja",
		title: formatLabels.pooja,
		image: "/products/pure-benzoin-sambrani/img-1.png",
		itemCount: products.filter((p) => p.format === "pooja").length
	}
];
var verifiedReviews = [
	{
		rating: 5,
		title: "Authentic Paati's Rasam Aroma",
		comment: "Takes me straight back to my grandmother's kitchen in Tirunelveli. Standard store brands smell synthetic compared to this deep, wholesome aroma.",
		name: "Sowmya Raman",
		city: "Chennai",
		product: "Gold Powder"
	},
	{
		rating: 4,
		title: "Life-Saver for Celiac Cooking",
		comment: "Finding truly wheat-free hing that still has authentic strength was impossible until I found Y.G's rice-starch formula. Safe and fragrant.",
		name: "Karthik Sundaram",
		city: "Bengaluru",
		product: "Gluten-Free Hing"
	},
	{
		rating: 4,
		title: "Pellets in Curd Rice are Perfection",
		comment: "The Hing Pellets don't burn like fine powders do. They puff slightly during tempering, giving a delicate crunch and sustained aroma.",
		name: "Meenakshi V.",
		city: "Madurai",
		product: "Hing Pellets"
	},
	{
		rating: 5,
		title: "Gold Cake for Temple Kuzhambu",
		comment: "Shaving a small piece of the Pindi Hing into hot ghee gives the authentic tangy aroma needed for traditional vathal kuzhambu.",
		name: "Dr. K. Raghavan",
		city: "Coimbatore",
		product: "Gold Cake"
	},
	{
		rating: 5,
		title: "Glass Jar Locks Aroma Completely",
		comment: "The airtight rubber gasket jar is gorgeous on the kitchen counter and keeps the fragrance locked in. You need only a tiny pinch.",
		name: "Anita Deshmukh",
		city: "Mumbai",
		product: "Bottle Jar"
	},
	{
		rating: 5,
		title: "Exquisite Heritage 4-in-1 Box",
		comment: "Ordered the combo box as a housewarming gift. The engraved brass spoon and assortment of powder, cake, chips, and pellets delighted our hosts.",
		name: "Sridhar K.",
		city: "Hyderabad",
		product: "Heritage Box"
	}
];
var HERO_VIDEOS = [
	{ src: "/hero-video-heritage.mp4" },
	{ src: "/hero-video-factory.mp4" },
	{ src: "/hero-video-craft.mp4" },
	{ src: "/hero-video-gold.mp4" },
	{ src: "/hero-video-purity.mp4" },
	{ src: "/hero-video-tradition.mp4" },
	{ src: "/hero-video-master.mp4?v=20260827" }
];
function HomePage() {
	const [activeCatalogTab, setActiveCatalogTab] = (0, import_react.useState)("all");
	const [currentVideoIndex, setCurrentVideoIndex] = (0, import_react.useState)(0);
	const soundPlayCountRef = (0, import_react.useRef)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const [isFading, setIsFading] = (0, import_react.useState)(false);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		setIsFading(true);
		const targetSrc = HERO_VIDEOS[currentVideoIndex]?.src;
		if (targetSrc && video.src !== window.location.origin + targetSrc && !video.src.endsWith(targetSrc)) {
			video.src = targetSrc;
			video.load();
		}
		video.muted = isMuted;
		video.volume = 1;
		const playPromise = video.play();
		if (playPromise !== void 0) playPromise.then(() => setIsFading(false)).catch((err) => {
			setIsFading(false);
			if (err.name !== "AbortError") {}
		});
		else setIsFading(false);
	}, [currentVideoIndex, isMuted]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = true;
		const playPromise = video.play();
		if (playPromise !== void 0) playPromise.catch(() => {});
	}, []);
	const handleVideoEnded = () => {
		const video = videoRef.current;
		if (!video) return;
		if (currentVideoIndex === HERO_VIDEOS.length - 1) {
			if (!isMuted) {
				soundPlayCountRef.current += 1;
				if (soundPlayCountRef.current >= 2) {
					video.muted = true;
					setIsMuted(true);
				}
			}
		}
		setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
	};
	const selectVideo = (index) => {
		if (soundPlayCountRef.current < 2) setIsMuted(false);
		setCurrentVideoIndex(index);
	};
	const displayedProducts = useLiveProducts().filter((p) => {
		if (activeCatalogTab === "all") return true;
		return p.format === activeCatalogTab;
	});
	const currentVideo = HERO_VIDEOS[currentVideoIndex] ?? HERO_VIDEOS[0];
	const nextVideoItem = HERO_VIDEOS[(currentVideoIndex + 1) % HERO_VIDEOS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-0 relative",
		children: [
			nextVideoItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				src: nextVideoItem.src,
				preload: "auto",
				muted: true,
				playsInline: true,
				"aria-hidden": "true",
				className: "sr-only hidden"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "group relative overflow-hidden border-b border-border w-full bg-neutral-950 flex items-center justify-center select-none min-h-[280px] sm:min-h-[400px] md:min-h-[500px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial from-neutral-900 to-black opacity-80 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: currentVideo.src,
						autoPlay: true,
						playsInline: true,
						preload: "metadata",
						muted: isMuted,
						onEnded: handleVideoEnded,
						onCanPlay: () => {
							setIsFading(false);
							videoRef.current?.play().catch(() => {});
						},
						className: `w-full max-h-[85vh] sm:max-h-[88vh] object-contain object-center relative z-10 transition-all duration-500 mx-auto ${isFading ? "opacity-75 scale-98" : "opacity-100 scale-100"}`,
						style: { willChange: "transform, opacity" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-20 pointer-events-none bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-3 sm:top-5 right-3 sm:right-6 z-20 flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsMuted((m) => !m),
							className: "h-7 sm:h-9 px-2.5 sm:px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5 text-[10px] sm:text-xs font-medium hover:bg-black/80 transition-all shadow-xl cursor-pointer active:scale-95",
							"aria-label": isMuted ? "Unmute video sound" : "Mute video sound",
							children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] sm:text-xs font-medium",
								children: "Sound Off"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#FFC700] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] sm:text-xs text-[#FFC700] font-bold",
								children: "Sound On"
							})] })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-2.5 sm:bottom-4 inset-x-0 hidden sm:flex justify-center items-center z-20 pointer-events-auto px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 p-1 rounded-full bg-black/50 backdrop-blur-xs border border-white/10",
							children: HERO_VIDEOS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => selectVideo(i),
								"aria-label": `Switch to video ${i + 1}`,
								className: `transition-all duration-300 rounded-full cursor-pointer ${currentVideoIndex === i ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-[#FFC700] shadow-md" : "w-2 sm:w-2.5 h-1.5 sm:h-2 bg-white/40 hover:bg-white/70"}`
							}, v.src))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-[#E8DEC8] bg-[#FAF3D6]/60 py-5 sm:py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page px-3 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-[8px] border border-[#E8DEC8] bg-white hover:border-[#FFC700] hover:shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#FFC700] bg-[#FFC700]/20 flex items-center justify-center shrink-0 text-[#181206]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 sm:h-5 sm:w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-xs sm:text-sm text-[#181206] leading-tight truncate",
										children: "Easy Payment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] sm:text-xs text-[#5A6560] mt-0.5 truncate",
										children: "COD & UPI Available"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-[8px] border border-[#E8DEC8] bg-white hover:border-[#FFC700] hover:shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#FFC700] bg-[#FFC700]/20 flex items-center justify-center shrink-0 text-[#181206]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 sm:h-5 sm:w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-xs sm:text-sm text-[#181206] leading-tight truncate",
										children: "Track Online"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] sm:text-xs text-[#5A6560] mt-0.5 truncate",
										children: "Real-time Location"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-[8px] border border-[#E8DEC8] bg-white hover:border-[#FFC700] hover:shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#FFC700] bg-[#FFC700]/20 flex items-center justify-center shrink-0 text-[#181206]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "h-4 w-4 sm:h-5 sm:w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-xs sm:text-sm text-[#181206] leading-tight truncate",
										children: "100% Happy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] sm:text-xs text-[#5A6560] mt-0.5 truncate",
										children: "94 Yrs Heritage"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-[8px] border border-[#E8DEC8] bg-white hover:border-[#FFC700] hover:shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 sm:h-11 sm:w-11 rounded-full border-2 border-[#FFC700] bg-[#FFC700]/20 flex items-center justify-center shrink-0 text-[#181206]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 sm:h-5 sm:w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-xs sm:text-sm text-[#181206] leading-tight truncate",
										children: "Free Shipping"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] sm:text-xs text-[#5A6560] mt-0.5 truncate",
										children: "Orders Above ₹499"
									})]
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-[#E8DEC8] bg-white py-8 sm:py-14 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page px-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-5 sm:mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-black uppercase tracking-wider text-[#8C5921] bg-[#FAF3D6] px-2.5 py-0.5 rounded border border-[#E8DEC8]",
								children: "Explore Collections"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-3xl font-extrabold text-[#181206] tracking-tight mt-1",
								children: "Featured Categories"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#181206] bg-[#FFC700] hover:bg-[#181206] hover:text-[#FFC700] hover:border-[#181206] border border-[#D8A700] px-3.5 py-1.5 rounded-[6px] shadow-xs transition-all active:scale-95 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore All Categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-5",
							children: featuredCategories.map((cat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								search: { category: cat.id },
								className: "category-card-interactive bg-gradient-to-b from-[#FFFDF2] to-[#FFFBEA] rounded-2xl p-3.5 sm:p-5 text-center flex flex-col items-center justify-between min-h-[190px] sm:min-h-[220px] border-2 border-[#FFC700] shadow-[0_4px_16px_rgba(255,199,0,0.18)] ring-1 ring-[#FFC700]/30 cursor-pointer group relative overflow-hidden active:scale-95 animate-fade-in-up",
								style: { animationDelay: `${idx * 60}ms` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial from-[#FFC700]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "category-image-wrap h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-white/95 border border-[#E8DEC8] flex items-center justify-center p-2 my-auto shadow-2xs group-hover:border-[#FFC700] group-hover:shadow-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: cat.image,
											alt: cat.title,
											className: "max-h-full max-w-full object-contain drop-shadow-xs transition-all duration-300"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 sm:mt-3 text-center w-full relative z-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs sm:text-sm font-extrabold text-[#181206] group-hover:text-[#8C5921] transition-colors leading-tight truncate",
											children: cat.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] sm:text-[11px] font-black inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#FFC700] text-[#181206] border border-[#D8A700] shadow-2xs group-hover:bg-[#8C5921] group-hover:text-white group-hover:border-[#8C5921] transition-all duration-300 group-hover:scale-105",
											children: [cat.itemCount, " items"]
										})]
									})
								]
							}, `${cat.id}-${idx}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 rounded-xl border border-[#FFC700]/40 bg-gradient-to-r from-[#FFFBEA] via-white to-[#FAF3D6] p-3.5 sm:p-4.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs hover:border-[#FFC700] transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-center sm:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 rounded-full bg-[#FFC700] text-[#181206] flex items-center justify-center shrink-0 font-black shadow-xs animate-bounce",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm font-black text-[#181206] uppercase tracking-wide",
									children: "Looking for Bulk Supply or Private Label Compounding?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#5A6560] mt-0.5",
									children: "Custom export mesh grades, institutional bulk barrels & client-branded formulation packaging."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "bg-[#181206] text-[#FFC700] hover:bg-black hover:text-[#FFD333] border border-[#FFC700]/40 font-black text-xs px-4 py-2 shrink-0 rounded-[6px] shadow-xs active:scale-95 transition-all",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/custom-branding",
									children: "Request White Label Quote"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-[#E8DEC8] bg-[#FAF3D6]/50 py-10 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page space-y-5 sm:space-y-6 px-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-[#E8DEC8] pb-3 sm:pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-black uppercase tracking-wider text-[#8C5921] bg-[#FAF3D6] px-2.5 py-0.5 rounded border border-[#E8DEC8]",
								children: "Bestselling Heritage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-3xl font-extrabold text-[#181206] tracking-tight mt-1",
								children: "Popular Products"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm font-semibold",
								children: [
									{
										id: "all",
										label: "All Formulations"
									},
									{
										id: "powder",
										label: formatLabels.powder
									},
									{
										id: "cake",
										label: formatLabels.cake
									},
									{
										id: "granules",
										label: formatLabels.granules
									},
									{
										id: "appalam",
										label: formatLabels.appalam
									},
									{
										id: "vismaya",
										label: formatLabels.vismaya
									}
								].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setActiveCatalogTab(tab.id),
									className: cn("cursor-pointer transition-all duration-300 px-3.5 py-1.5 rounded-full text-xs font-bold border active:scale-95 shadow-2xs", activeCatalogTab === tab.id ? "bg-[#FFC700] text-[#181206] border-[#D8A700] shadow-sm ring-2 ring-[#8C5921]/30 font-black scale-105" : "bg-white text-[#181206] border-[#E8DEC8] hover:bg-[#FAF3D6] hover:border-[#FFC700]"),
									children: tab.label
								}, tab.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6 animate-in fade-in-50 duration-300",
							children: displayedProducts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-fade-in-up h-full",
								style: { animationDelay: `${i * 55}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
									product: p,
									priority: i < 4
								})
							}, p.slug))
						}, activeCatalogTab),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center pt-2 sm:pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "h-10 px-6 sm:px-8 font-extrabold text-xs sm:text-sm rounded-[6px] border border-[#FFC700] bg-[#FFC700] text-[#181206] hover:bg-[#E6B000] transition-all shadow-xs cursor-pointer active:scale-95",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									children: ["Explore Full Shop with Filters & Sorting ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-4 w-4" })]
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-clove text-clove-foreground py-8 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page grid items-center gap-6 sm:gap-8 lg:grid-cols-12 px-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 relative max-w-sm mx-auto lg:max-w-none w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/heritage-compounding-1931.jpg",
								alt: "Shri P. Subramanian stone compounding pure Ferula asafoetida gum resin in 1931 Tirunelveli",
								className: "h-full w-full object-cover hover:scale-105 transition-transform duration-500",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-2 -left-2 bg-[#FFC700] text-[#181206] font-black px-3 py-1 rounded-lg text-[10px] shadow-md border border-black/20",
							children: "Estd. 1931 · Tirunelveli"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 space-y-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-extrabold tracking-widest uppercase text-[#FFC700]",
								children: "Preserving A 94-Year Craft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl sm:text-2xl lg:text-3xl font-bold leading-tight",
								children: "Started by Shri P. Subramanian. Mastered across three generations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm opacity-85 leading-relaxed",
								children: "In 1931, near the banks of the Thamirabarani river, Shri P. Subramanian perfected the art of stone-compounding imported mountain ferula resin with pure starches. Today, his grandchildren continue the same strict formula without shortcuts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 pt-2 border-t border-white/10 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-[#FFC700]",
										children: "1931"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Founding Year"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-[#FFC700]",
										children: "100%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Natural Ferula"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg sm:text-xl font-extrabold text-[#FFC700]",
										children: "0%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "opacity-75 text-[10px]",
										children: "Chemical Additives"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "font-bold bg-[#FFC700] text-[#181206] hover:bg-[#E6B000] text-xs border border-black/15 shadow-xs",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/story",
										children: "Read Our Full 1931 Story"
									})
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-8 sm:py-14 px-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-xl mx-auto mb-6 sm:mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#181206] font-black text-xs uppercase tracking-wider bg-[#FFC700] px-3 py-1 rounded-[4px] border border-black/10",
							children: "Customer Testimonials"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl sm:text-3xl font-extrabold text-[#181206] tracking-tight",
							children: "Trusted Across 1k+ Kitchens"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5A6560] mt-1",
							children: "Real verified experiences from traditional cooks and culinary enthusiasts."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 sm:mt-6 flex flex-nowrap overflow-x-auto gap-3 pb-4 pt-1 px-3 -mx-3 scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:p-0 md:m-0 md:gap-4",
					children: verifiedReviews.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "w-[82vw] max-w-[300px] sm:max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink single-shopping-card-one flex flex-col justify-between p-3.5 sm:p-5 rounded-[8px] border border-[#E8DEC8] shadow-xs hover:border-[#FFC700] transition-all bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex text-[#EABC5E]",
									children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#EABC5E] text-[#EABC5E]" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] sm:text-[10px] px-2 py-0.5 bg-[#FFC700] text-[#181206] font-black rounded-[4px]",
									children: "Verified Purchase"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-2.5 text-xs sm:text-base font-bold text-[#181206] leading-snug",
								children: rev.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-1.5 text-xs sm:text-sm text-[#5A6560] leading-relaxed",
								children: [
									"“",
									rev.comment,
									"”"
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 sm:mt-4 pt-2 border-t border-[#E8DEC8] flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-[#181206] text-xs sm:text-sm",
								children: rev.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#5A6560] text-[10px] sm:text-[11px]",
								children: rev.city
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[#181206] font-bold bg-[#FFC700]/40 px-2 py-0.5 rounded",
								children: rev.product
							})]
						})]
					}, rev.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-page py-8 sm:py-14 px-3 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden bg-[#FFC700] rounded-[10px] sm:rounded-[12px] p-6 sm:p-12 text-center text-[#181206] shadow-md border border-black/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl mx-auto space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block px-3 py-1 bg-[#181206] text-[#FFC700] rounded-[4px] text-[10px] font-black uppercase tracking-wider",
								children: "Special Coupon: BULK15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl sm:text-4xl font-black tracking-tight text-[#181206]",
								children: "Ninety-Four Years of Culinary Purity, One Pinch at a Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-[#181206]/85 font-medium leading-relaxed",
								children: "Free delivery on orders above ₹499 with same-day dispatch directly from our works in Tirunelveli."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "h-10 px-5 sm:px-6 font-extrabold text-xs sm:text-sm bg-[#181206] text-[#FFC700] hover:bg-black rounded-[6px] shadow-sm transition-all active:scale-95",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										children: "Shop All 15 Products"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "h-10 px-5 sm:px-6 font-extrabold text-xs sm:text-sm border-2 border-[#181206] text-[#181206] bg-transparent hover:bg-[#181206]/10 rounded-[6px] transition-all active:scale-95",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/story",
										children: "Our Heritage Story"
									})
								})]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { HomePage as component };
