import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { At as Check, Dt as ChevronRight, H as Maximize2, Ot as ChevronLeft, Rt as ArrowRight, U as MapPin, b as ShoppingBag, g as Sparkles, l as Truck, m as Star, n as Zap, q as LoaderCircle, r as X, t as ZoomIn, wt as CircleCheck, x as ShieldCheck, yt as Clock } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as useNavigate, g as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as WishlistButton } from "./WishlistButton-BGMEodhK.mjs";
import { a as products, c as useLiveProduct, l as useLiveProducts, n as formatPrice, t as formatLabels } from "./products-DheZb9xp.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
import { t as useRecentlyViewed } from "./recently-viewed-DaoFZCZ0.mjs";
import { t as lookupPincode } from "./pincode.functions-DMq4TuqT.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
import { n as Route, t as QuantityStepper } from "./product._slug-V7lb9oQK.mjs";
import { t as ProductCard } from "./ProductCard-BOLtAyUK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product2._slug-Bjm_0Dlg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductImageZoom({ images, activeImage, onSelectImage, productName, formatLabel, isBestseller, isGlutenFree, thumbContainerRef }) {
	const currentImage = images[activeImage] ?? images[0] ?? "";
	const containerRef = (0, import_react.useRef)(null);
	const [isHovering, setIsHovering] = (0, import_react.useState)(false);
	const [lightboxOpen, setLightboxOpen] = (0, import_react.useState)(false);
	const imgRef = (0, import_react.useRef)(null);
	const lensRef = (0, import_react.useRef)(null);
	const rectRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	const nextImage = (0, import_react.useCallback)(() => {
		if (images.length <= 1) return;
		onSelectImage((activeImage + 1) % images.length);
	}, [
		activeImage,
		images.length,
		onSelectImage
	]);
	const prevImage = (0, import_react.useCallback)(() => {
		if (images.length <= 1) return;
		onSelectImage((activeImage - 1 + images.length) % images.length);
	}, [
		activeImage,
		images.length,
		onSelectImage
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (lightboxOpen) {
				if (e.key === "Escape") setLightboxOpen(false);
				if (e.key === "ArrowRight") nextImage();
				if (e.key === "ArrowLeft") prevImage();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		lightboxOpen,
		nextImage,
		prevImage
	]);
	const touchStartX = (0, import_react.useRef)(null);
	const touchEndX = (0, import_react.useRef)(null);
	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0]?.clientX ?? null;
	};
	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0]?.clientX ?? null;
	};
	const handleTouchEnd = () => {
		if (touchStartX.current !== null && touchEndX.current !== null) {
			const diff = touchStartX.current - touchEndX.current;
			if (diff > 35) nextImage();
			else if (diff < -35) prevImage();
		}
		touchStartX.current = null;
		touchEndX.current = null;
	};
	const handleMouseEnter = () => {
		setIsHovering(true);
		if (containerRef.current) rectRef.current = containerRef.current.getBoundingClientRect();
	};
	const handleMouseMove = (e) => {
		if (!rectRef.current) if (containerRef.current) rectRef.current = containerRef.current.getBoundingClientRect();
		else return;
		const rect = rectRef.current;
		const clientX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
		const clientY = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = requestAnimationFrame(() => {
			const percentX = clientX / rect.width * 100;
			const percentY = clientY / rect.height * 100;
			const lensW = 140;
			const lensH = 140;
			let lensX = clientX - lensW / 2;
			let lensY = clientY - lensH / 2;
			const maxX = rect.width - lensW;
			const maxY = rect.height - lensH;
			if (lensX < 0) lensX = 0;
			if (lensY < 0) lensY = 0;
			if (lensX > maxX) lensX = maxX;
			if (lensY > maxY) lensY = maxY;
			if (imgRef.current) {
				imgRef.current.style.transformOrigin = `${percentX}% ${percentY}%`;
				imgRef.current.style.transform = "scale(2.2)";
			}
			if (lensRef.current) {
				lensRef.current.style.left = `${lensX}px`;
				lensRef.current.style.top = `${lensY}px`;
			}
		});
	};
	const handleMouseLeave = () => {
		setIsHovering(false);
		rectRef.current = null;
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		if (imgRef.current) imgRef.current.style.transform = "scale(1)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 relative select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				onTouchStart: handleTouchStart,
				onTouchMove: handleTouchMove,
				onTouchEnd: handleTouchEnd,
				onMouseEnter: handleMouseEnter,
				onMouseMove: handleMouseMove,
				onMouseLeave: handleMouseLeave,
				className: "surface-card group relative overflow-hidden rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] p-4 sm:p-6 flex items-center justify-center touch-pan-y min-h-[340px] sm:min-h-[460px] cursor-crosshair shadow-xs",
				children: [
					currentImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						onClick: nextImage,
						className: "relative aspect-square sm:aspect-[4/3] max-h-[340px] sm:max-h-[440px] w-full flex items-center justify-center overflow-hidden cursor-pointer",
						title: "Click to view next image, or hover to zoom",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: imgRef,
							src: currentImage,
							alt: `${productName} - View ${activeImage + 1}`,
							className: "h-full w-full max-h-[340px] sm:max-h-[440px] object-contain block transition-transform duration-100 ease-out will-change-transform",
							style: { transform: isHovering ? "scale(2.2)" : "scale(1)" },
							loading: "eager",
							decoding: "async"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-2 p-8 text-center my-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								children: "📦"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-[#181206]",
								children: productName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#78716C]",
								children: "Official Pack Photography Coming Soon"
							})
						]
					}),
					isHovering && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: lensRef,
						className: "hidden md:block absolute pointer-events-none border-2 border-[#FFC700] bg-[#FFC700]/15 backdrop-contrast-110 shadow-lg rounded-[6px] z-20 transition-all duration-75",
						style: {
							width: "140px",
							height: "140px",
							left: "50%",
							top: "50%"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center opacity-70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#FFC700] ring-2 ring-white shadow-xs" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-[4px] bg-[#EABC5E] px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#181206] uppercase border border-[#EABC5E] shadow-xs",
								children: formatLabel
							}),
							isGlutenFree && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-[4px] bg-[#FFC700] px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white uppercase shadow-xs",
								children: "Gluten-Free"
							}),
							isBestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-[4px] bg-[#2C3C28] px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white uppercase shadow-xs",
								children: "Bestseller"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-3 right-3 flex flex-col gap-1.5 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								setLightboxOpen(true);
							},
							"aria-label": "View fullscreen high-res photo",
							title: "Open fullscreen view",
							className: "grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-[6px] bg-white/95 text-[#181206] border border-[#E8DEC8] shadow-xs hover:bg-[#FFC700] hover:text-white transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none z-10",
						children: [images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 pointer-events-auto bg-white/90 backdrop-blur px-2.5 py-1 rounded-[6px] border border-[#E8DEC8] shadow-xs",
							children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: (e) => {
									e.stopPropagation();
									onSelectImage(i);
								},
								"aria-label": `Go to slide ${i + 1}`,
								className: `h-2 rounded-[4px] transition-all duration-300 cursor-pointer ${activeImage === i ? "w-5 bg-[#FFC700]" : "w-2 bg-[#6E777D]/30 hover:bg-[#6E777D]/60"}`
							}, i))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/90 backdrop-blur px-2.5 py-1 rounded-[6px] border border-[#E8DEC8] text-[9px] sm:text-[10px] text-[#6E777D] flex items-center gap-1 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stone-Compounded" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-1 text-xs text-[#6E777D] font-medium gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "h-3.5 w-3.5 text-[#181206]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Hover image to zoom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden text-[11px]",
							children: "Pinch / Tap to zoom"
						})
					]
				}), images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: prevImage,
							className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] text-xs font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-colors shadow-xs cursor-pointer active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-mono font-bold text-[#181206] px-1",
							children: [
								activeImage + 1,
								" / ",
								images.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: nextImage,
							className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] text-xs font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-colors shadow-xs cursor-pointer active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}) : null]
			}),
			images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: thumbContainerRef,
				className: "flex gap-2.5 overflow-x-auto pb-1 pt-1 scrollbar-thin scroll-smooth",
				role: "group",
				"aria-label": "Product image thumbnails",
				children: images.map((img, i) => {
					const active = activeImage === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectImage(i),
						onMouseEnter: () => onSelectImage(i),
						"aria-label": `Switch to photo ${i + 1}`,
						title: `View photo ${i + 1}`,
						className: `relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-[6px] border-2 p-1.5 bg-[#FAF3D6] transition-all cursor-pointer ${active ? "border-[#FFC700] shadow-sm scale-105 ring-2 ring-[#FFC700]/30" : "border-[#E8DEC8] hover:border-[#FFC700]/60 opacity-75 hover:opacity-100"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: `Thumbnail ${i + 1}`,
							className: "h-full w-full object-contain",
							loading: "eager"
						}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 right-1 h-2 w-2 rounded-full bg-[#FFC700] ring-1 ring-white" }) : null]
					}, img + i);
				})
			}) : null,
			lightboxOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in-0 duration-200",
				onClick: () => setLightboxOpen(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLightboxOpen(false),
						"aria-label": "Close fullscreen view",
						className: "absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
					}),
					images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							prevImage();
						},
						"aria-label": "Previous photo",
						className: "absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-7 w-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							nextImage();
						},
						"aria-label": "Next photo",
						className: "absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer z-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-7 w-7" })
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center p-2",
						onClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: currentImage,
							alt: productName,
							className: "max-w-full max-h-full object-contain rounded-xl shadow-2xl"
						})
					}),
					images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2 overflow-x-auto p-2 bg-black/40 rounded-2xl backdrop-blur max-w-xl",
						onClick: (e) => e.stopPropagation(),
						children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onSelectImage(i),
							className: `h-14 w-14 rounded-lg overflow-hidden border-2 p-1 bg-white transition-all cursor-pointer ${activeImage === i ? "border-primary scale-105" : "border-white/40 opacity-60 hover:opacity-100"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: "",
								className: "h-full w-full object-contain"
							})
						}, img + i))
					}) : null
				]
			})
		]
	});
}
var ProductReviews = (0, import_react.lazy)(() => import("./ProductReviews-BHn9QBiE.mjs").then((m) => ({ default: m.ProductReviews })));
var ProductQuestions = (0, import_react.lazy)(() => import("./ProductQuestions-BZFQPVBE.mjs").then((m) => ({ default: m.ProductQuestions })));
var RecentlyViewed = (0, import_react.lazy)(() => import("./RecentlyViewed-BS0aDtuS.mjs").then((m) => ({ default: m.RecentlyViewed })));
var BackInStockDialog = (0, import_react.lazy)(() => import("./BackInStockDialog-BBddjyhD.mjs").then((m) => ({ default: m.BackInStockDialog })));
function ProductPage() {
	const { product: initialProduct } = Route.useLoaderData();
	const product = useLiveProduct(initialProduct.slug) || initialProduct;
	const allProducts = useLiveProducts();
	const { add, count, setOpen: setCartOpen } = useCart();
	const navigate = useNavigate();
	useRecentlyViewed(product.slug);
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants[0]?.id ?? "");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	const thumbContainerRef = (0, import_react.useRef)(null);
	const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
	const gallery = variant.gallery && variant.gallery.length > 0 ? variant.gallery : variant.image ? [variant.image, ...product.gallery?.filter((img) => img !== variant.image) ?? []] : product.gallery && product.gallery.length > 0 ? product.gallery : product.image ? [product.image] : [];
	const handleSelectVariant = (id) => {
		setVariantId(id);
		setActiveImage(0);
	};
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [pinResult, setPinResult] = (0, import_react.useState)(null);
	const [isCheckingPin, startPinTransition] = (0, import_react.useTransition)();
	const soldOut = product.inStock === false;
	const related = allProducts.filter((p) => p.slug !== product.slug).slice(0, 4);
	const currentIndex = allProducts.findIndex((p) => p.slug === product.slug);
	const safeIndex = currentIndex === -1 ? 0 : currentIndex;
	const hasPrev = safeIndex > 0;
	const hasNext = safeIndex < allProducts.length - 1;
	const prevProduct = hasPrev ? allProducts[safeIndex - 1] : null;
	const nextProduct = hasNext ? allProducts[safeIndex + 1] : null;
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant"
		});
	}, [product.slug]);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const apply = () => {
			root.style.setProperty("--fab-offset", window.innerWidth < 1024 ? "4.5rem" : "0px");
		};
		apply();
		window.addEventListener("resize", apply);
		return () => {
			window.removeEventListener("resize", apply);
			root.style.removeProperty("--fab-offset");
		};
	}, []);
	const handleCheckPincode = (e) => {
		e.preventDefault();
		const pin = pinInput.trim();
		if (!/^\d{6}$/.test(pin)) {
			toast.error("Please enter a valid 6-digit Indian PIN code");
			return;
		}
		startPinTransition(async () => {
			try {
				const res = await lookupPincode({ data: { pin } });
				setPinResult(res);
				if (res.ok) toast.success(`Express delivery available to ${res.city}, ${res.state}!`);
				else toast.error(res.message ?? "PIN code not serviceable for express courier");
			} catch {
				toast.error("Unable to check delivery right now");
			}
		});
	};
	const [buyingNow, setBuyingNow] = (0, import_react.useState)(false);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		router.preloadRoute({ to: "/checkout" });
	}, [router]);
	const handleBuyNow = () => {
		setBuyingNow(true);
		add(product.slug, variant.id, qty);
		toast.success(`Preparing instant checkout for ${product.name}...`);
		navigate({ to: "/checkout" }).finally(() => {
			setBuyingNow(false);
		});
	};
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		brand: {
			"@type": "Brand",
			name: "Y.G Asafoetida"
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: product.rating,
			reviewCount: product.reviews
		},
		offers: {
			"@type": "Offer",
			price: variant.price,
			priceCurrency: "INR",
			availability: soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-32 lg:pb-12 space-y-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-[#E8DEC8] bg-[#F5EAC4] py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "flex items-center gap-1.5 text-xs text-[#6E777D] overflow-x-auto whitespace-nowrap scrollbar-none min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[#181206] transition-colors font-medium shrink-0",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-[#A0A8B0] shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "hover:text-[#181206] transition-colors font-medium shrink-0",
								children: "Shop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-[#A0A8B0] shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: product.format },
								className: "capitalize text-[#6E777D] hover:text-[#181206] hover:underline transition-colors font-medium shrink-0",
								children: formatLabels[product.format] || product.format
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								className: "h-3 w-3 text-[#A0A8B0] shrink-0",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-current": "page",
								className: "truncate font-semibold text-[#181206] min-w-0",
								children: product.name
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "inline-flex items-center gap-1 font-bold text-[#181206] hover:text-[#B45309] transition-colors py-1 px-2.5 rounded-[6px] bg-white border border-[#E8DEC8] hover:bg-[#FAF3D6] shadow-xs shrink-0 cursor-pointer active:scale-95 text-xs",
						title: "Return to Shop catalog",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Shop" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-page py-6 sm:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden space-y-2 pb-4 border-b border-[#E8DEC8] mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-[#181206] bg-[#FFC700]/10 px-2.5 py-1 rounded-[4px]",
								children: product.format === "vismaya" ? "Vismaya · Ready to Cook" : `${formatLabels[product.format]} · Estd. 1931`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 bg-[#FAF3D6] px-2 py-0.5 rounded-[6px] border border-[#E8DEC8] shadow-xs",
									children: [
										hasPrev && prevProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/product/$slug",
											params: { slug: prevProduct.slug },
											className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] text-[10px] font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-all cursor-pointer shadow-xs active:scale-95",
											title: `Previous: ${prevProduct.name}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-white/50 text-[10px] font-medium text-[#A0A8B0] cursor-not-allowed opacity-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono font-bold text-[#181206] px-1",
											children: [
												safeIndex + 1,
												" / ",
												products.length
											]
										}),
										hasNext && nextProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/product/$slug",
											params: { slug: nextProduct.slug },
											className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] text-[10px] font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-all shadow-xs cursor-pointer active:scale-95",
											title: `Next: ${nextProduct.name}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-[4px] bg-white/50 text-[10px] font-medium text-[#A0A8B0] cursor-not-allowed opacity-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
									slug: product.slug,
									name: product.name
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl sm:text-2xl font-bold tracking-tight text-[#181206]",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center text-amber-500",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-[#E2E2E2]"}` }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#181206]",
									children: product.rating
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[#6E777D] text-[11px]",
									children: [
										"(",
										product.reviews,
										" reviews)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#A0A8B0]",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[#181206] font-medium flex items-center gap-1 text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " FSSAI Certified"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6 relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductImageZoom, {
							images: gallery,
							activeImage,
							onSelectImage: setActiveImage,
							productName: product.name,
							formatLabel: formatLabels[product.format],
							isBestseller: product.bestseller,
							isGlutenFree: product.glutenFree,
							thumbContainerRef
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 space-y-4 sm:space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden lg:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-[#181206] bg-[#FFC700]/10 px-2.5 py-1 rounded-[4px]",
											children: product.format === "vismaya" ? "Vismaya · Ready to Cook" : `${formatLabels[product.format]} · Estd. 1931`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 bg-[#FAF3D6] px-2 py-0.5 rounded-[6px] border border-[#E8DEC8] shadow-xs",
												children: [
													hasPrev && prevProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/product/$slug",
														params: { slug: prevProduct.slug },
														className: "inline-flex items-center gap-0.5 px-2 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] text-[11px] font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-all cursor-pointer shadow-xs active:scale-95",
														title: `Previous: ${prevProduct.name}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-0.5 px-2 py-0.5 rounded-[4px] bg-white/50 text-[11px] font-medium text-[#A0A8B0] cursor-not-allowed opacity-50",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[11px] font-mono font-bold text-[#181206] px-1.5",
														children: [
															safeIndex + 1,
															" / ",
															products.length
														]
													}),
													hasNext && nextProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/product/$slug",
														params: { slug: nextProduct.slug },
														className: "inline-flex items-center gap-0.5 px-2 py-0.5 rounded-[4px] bg-white border border-[#E8DEC8] text-[11px] font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-all shadow-xs cursor-pointer active:scale-95",
														title: `Next: ${nextProduct.name}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-0.5 px-2 py-0.5 rounded-[4px] bg-white/50 text-[11px] font-medium text-[#A0A8B0] cursor-not-allowed opacity-50",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
												slug: product.slug,
												name: product.name
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-2 text-3xl font-bold tracking-tight text-[#181206]",
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 flex items-center gap-2 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center text-amber-500",
												children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-amber-500 text-amber-500" : "text-[#E2E2E2]"}` }, i))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-bold text-[#181206]",
												children: product.rating
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#6E777D]",
												children: [
													"(",
													product.reviews,
													" verified reviews)"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#A0A8B0]",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#181206] font-medium flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), " FSSAI Certified"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#6E777D] leading-relaxed",
								children: product.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] p-3.5 sm:p-4 flex items-baseline justify-between shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl sm:text-3xl font-bold text-[#DC2626] font-mono",
											children: formatPrice(variant.price)
										}),
										variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-[#A0A8B0] line-through font-mono",
											children: formatPrice(variant.mrp)
										}) : null,
										variant.mrp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-[4px] bg-[#EABC5E] text-[#181206] px-2 py-0.5 text-[11px] font-bold shadow-xs",
											children: [
												"Save ",
												Math.round((variant.mrp - variant.price) / variant.mrp * 100),
												"%"
											]
										}) : null
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#6E777D] mt-1",
									children: "Inclusive of all taxes · Free delivery across India over ₹499"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold px-2.5 py-1 bg-white rounded-[4px] border border-[#E8DEC8] text-[#181206]",
									children: variant.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-bold uppercase tracking-wider text-[#181206] block",
									children: "Select Pack Size / Weight:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleSelectVariant(v.id),
										className: `flex items-center gap-1.5 rounded-[6px] border px-3 py-2 text-xs font-semibold transition-all cursor-pointer ${v.id === variantId ? "border-[#FFC700] bg-[#FFC700]/10 text-[#181206] shadow-xs font-bold ring-1 ring-[#FFC700]" : "border-[#E8DEC8] bg-white text-[#181206] hover:border-[#FFC700]/60 hover:text-[#181206]"}`,
										children: [
											v.id === variantId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#181206]" }) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.label }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "opacity-75 font-mono",
												children: ["· ", formatPrice(v.price)]
											})
										]
									}, v.id))
								})]
							}),
							soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-white p-4 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#6E777D]",
									children: "This batch is currently sold out. Leave your details for instant restock notice."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
										fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											className: "text-xs h-9 gap-1.5",
											disabled: true,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), " Loading..."]
										}),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackInStockDialog, {
											slug: product.slug,
											name: product.name
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistButton, {
										slug: product.slug,
										name: product.name,
										variant: "full"
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									product.stockLeft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-semibold text-[#181206] flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#FFC700] animate-pulse" }),
											"Only ",
											product.stockLeft,
											" packs remaining from this fresh Tirunelveli batch"
										]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityStepper, {
											qty,
											label: `Quantity of ${product.name}`,
											min: 1,
											max: 20,
											onChange: (q) => setQty(Math.max(1, Math.min(q, 20)))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											className: "h-11 flex-1 font-bold gap-2 rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black shadow-xs text-xs sm:text-sm cursor-pointer transition-colors",
											onClick: () => {
												add(product.slug, variant.id, qty);
												toast.success(`Added ${qty} × ${product.name} to your basket!`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Add to Basket · ", formatPrice(variant.price * qty)] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										disabled: buyingNow,
										className: "w-full h-10 font-bold gap-1.5 rounded-[6px] border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white transition-all cursor-pointer",
										onClick: handleBuyNow,
										children: buyingNow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-[#181206]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Directing to Secure Checkout…" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 fill-[#FFC700] group-hover:fill-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant Checkout · Buy Now" })] })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-[#F5EAC4] p-4 space-y-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-[#181206] uppercase tracking-wider",
									children: "Available Offers & Guarantee"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 text-xs text-[#6E777D]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-[#181206] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Free delivery across India on orders above ₹499" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#181206] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12 Months Shelf Life Guaranteed · Sealed Airtight" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#181206] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Genuine Heritage Hing · Safe Secure Checkout" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[6px] border border-[#E8DEC8] bg-white p-3.5 space-y-2 shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-semibold text-[#181206]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#181206]" }), " Delivery & Pincode Check"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-[#6E777D]",
											children: "Dispatches in 24h"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleCheckPincode,
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "text",
											maxLength: 6,
											placeholder: "Enter 6-digit Pincode",
											value: pinInput,
											onChange: (e) => setPinInput(e.target.value.replace(/\D/g, "")),
											className: "h-8 text-xs font-mono rounded-[6px] border-[#E8DEC8]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											size: "sm",
											variant: "outline",
											className: "h-8 text-xs shrink-0 rounded-[6px] border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white",
											disabled: isCheckingPin,
											children: isCheckingPin ? "Checking..." : "Check"
										})]
									}),
									pinResult && pinResult.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-medium text-[#181206] flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 shrink-0" }),
											"Express delivery to ",
											pinResult.city,
											", ",
											pinResult.state,
											" in 2-4 business days."
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
								type: "single",
								collapsible: true,
								className: "mt-2 text-xs border border-[#E8DEC8] rounded-[6px] bg-white overflow-hidden shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "ingredients",
										className: "border-b border-[#E8DEC8] px-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5 text-[#181206] hover:text-[#181206]",
											children: "Ingredients & Carrier Base"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-[#6E777D] leading-relaxed",
											children: product.ingredients
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "usage",
										className: "border-b border-[#E8DEC8] px-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5 text-[#181206] hover:text-[#181206]",
											children: "Grandmother's Culinary Usage Guide"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-[#6E777D] leading-relaxed",
											children: product.usage
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "shelf",
										className: "border-b border-[#E8DEC8] px-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5 text-[#181206] hover:text-[#181206]",
											children: "Shelf Life & Storage Instructions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-[#6E777D] leading-relaxed",
											children: product.shelfLife
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: "shipping",
										className: "px-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
											className: "text-xs font-semibold py-2.5 text-[#181206] hover:text-[#181206]",
											children: "Shipping, Packaging & Returns"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
											className: "text-xs text-[#6E777D] leading-relaxed",
											children: "Dispatched from our Tirunelveli works within 24 hours. Sealed in airtight containers to preserve essential terpenes. Damaged packs are replaced free upon photo submission."
										})]
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-y border-[#E8DEC8] bg-[#FAF3D6]/80 py-3.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between gap-3",
					children: [
						hasPrev && prevProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/product/$slug",
							params: { slug: prevProduct.slug },
							className: "flex items-center gap-2.5 text-xs font-bold text-[#181206] hover:text-[#B45309] transition-colors group min-w-0",
							title: `Previous: ${prevProduct.name}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full border border-[#E8DEC8] bg-white flex items-center justify-center shrink-0 group-hover:bg-[#FFC700] transition-colors shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4 text-[#181206]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[#6E777D] uppercase font-semibold",
									children: "Previous Product"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-bold text-xs max-w-[120px] sm:max-w-[200px]",
									children: prevProduct.name
								})]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "flex items-center gap-2 text-xs font-bold text-[#181206] hover:text-[#B45309] transition-colors group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full border border-[#E8DEC8] bg-white flex items-center justify-center shrink-0 group-hover:bg-[#FFC700] transition-colors shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4 text-[#181206]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[#6E777D] uppercase font-semibold",
									children: "First Item"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-xs",
									children: "Back to All Products"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-[#E8DEC8] bg-white text-xs font-bold text-[#181206] hover:bg-[#FFC700] hover:border-[#FFC700] transition-colors shadow-xs cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"All Products (",
								products.length,
								")"
							] })
						}),
						hasNext && nextProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/product/$slug",
							params: { slug: nextProduct.slug },
							className: "flex items-center gap-2.5 text-xs font-bold text-[#181206] hover:text-[#B45309] transition-colors group min-w-0 text-right justify-end ml-auto",
							title: `Next: ${nextProduct.name}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[#6E777D] uppercase font-semibold",
									children: "Next Product"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-bold text-xs max-w-[120px] sm:max-w-[200px]",
									children: nextProduct.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full border border-[#E8DEC8] bg-white flex items-center justify-center shrink-0 group-hover:bg-[#FFC700] transition-colors shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-[#181206]" })
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "flex items-center gap-2 text-xs font-bold text-[#181206] hover:text-[#B45309] transition-colors group text-right justify-end ml-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[#6E777D] uppercase font-semibold",
									children: "Last Item"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-xs",
									children: "Back to Shop"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-full border border-[#E8DEC8] bg-white flex items-center justify-center shrink-0 group-hover:bg-[#FFC700] transition-colors shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-[#181206]" })
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-[#E8DEC8] bg-[#F5EAC4] py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-page",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-4 animate-pulse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-48 rounded bg-gray-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 rounded-[6px] bg-white border border-[#E8DEC8]" })]
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductQuestions, { slug: product.slug })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-[#E8DEC8] py-8 sm:py-12 bg-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-page space-y-6 py-6 animate-pulse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-56 rounded bg-gray-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 rounded-[6px] bg-gray-100 border border-[#E8DEC8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-36 rounded-[6px] bg-gray-100 border border-[#E8DEC8]" })]
						})]
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductReviews, { product })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-[#E8DEC8] bg-[#F5EAC4] py-10 sm:py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-[#181206]",
							children: "Related Formulations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-bold text-[#181206] mt-1",
							children: "Explore Alternative Y.G Formulations"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							className: "text-xs rounded-[6px] border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3 w-3" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product: p,
							mode: "compact"
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentlyViewed, { currentSlug: product.slug })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "region",
				"aria-label": "Add to basket",
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-[#E8DEC8] bg-white/95 px-3.5 pt-2 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md lg:hidden shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[11px] text-[#6E777D]",
							children: variant.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-bold text-[#DC2626] font-mono",
							children: formatPrice(variant.price * qty)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setCartOpen(true),
								"aria-label": `Open basket, ${count} items`,
								className: "relative grid h-9 w-9 shrink-0 place-items-center rounded-[6px] border border-[#E8DEC8] bg-[#FAF3D6] text-[#181206] shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#FFC700] px-1 text-[9px] font-bold text-white",
									children: count
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "h-9 px-3 text-xs font-bold gap-1 rounded-[6px] border-[#FFC700] text-[#181206] hover:bg-[#FFC700] hover:text-white active:scale-95",
								disabled: soldOut || buyingNow,
								onClick: handleBuyNow,
								children: [buyingNow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 fill-current" }), "Buy Now"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "h-9 px-3.5 text-xs font-bold gap-1 rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black active:scale-95",
								disabled: soldOut,
								onClick: () => {
									add(product.slug, variant.id, qty);
									toast.success(`Added ${product.name} to basket!`);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), soldOut ? "Sold Out" : "Add to Basket"]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { ProductPage as component };
