import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { At as Check, E as RotateCcw, P as Package, q as LoaderCircle, st as Gift } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { n as formatPrice } from "./products-DheZb9xp.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
import { a as currentStatus, c as resolutionEligibility, d as useOrders, o as estimatedDelivery, u as trackingSteps } from "./orders-DqR90r7S.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { i as SupportTicketDialog, r as ResolutionBanner, t as OrderResolutionDialog } from "./OrderResolutionDialog-BKQ92uTQ.mjs";
import { t as Route } from "./order._id-DMAmDXh5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-CNVnFHpg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderTrackingPage() {
	const { id } = Route.useParams();
	const { getOrder, fetchOrder } = useOrders();
	const cart = useCart();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [fetchedOrder, setFetchedOrder] = (0, import_react.useState)(null);
	const localOrder = getOrder(id);
	const order = fetchedOrder ?? localOrder;
	(0, import_react.useEffect)(() => {
		let active = true;
		fetchOrder(id).then((res) => {
			if (active) {
				if (res) setFetchedOrder(res);
				setLoading(false);
			}
		});
		return () => {
			active = false;
		};
	}, [id, fetchOrder]);
	if (loading && !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted-foreground",
			children: [
				"Finding order ",
				id,
				"…"
			]
		})]
	});
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page flex min-h-[50vh] flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-12 w-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-3xl font-semibold",
				children: "Order not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-md text-muted-foreground",
				children: [
					"We couldn't find order ",
					id,
					". Check the order number in your confirmation email, or track using your email."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/track",
						children: "Track another order"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/account",
						children: "Go to account"
					})
				})]
			})
		]
	});
	const steps = trackingSteps(order);
	const status = currentStatus(order);
	estimatedDelivery(order);
	resolutionEligibility(order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white font-sans pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-[#E8DEC8] bg-[#F5EAC4] py-3.5 no-print",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#A0A8B0]",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "hover:text-[#181206] transition-colors font-medium",
							children: "Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#A0A8B0]",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-[#181206]",
							children: ["Order #", order.id]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => window.print(),
					className: "text-xs font-semibold text-[#181206] hover:underline flex items-center gap-1 cursor-pointer",
					children: "Print Receipt"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page pt-8 sm:pt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DEC8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-[#181206]",
							children: "Official Receipt & Order Tracker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-1 text-2xl sm:text-3xl font-bold text-[#181206] tracking-tight",
							children: ["Order #", order.id]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-[#6E777D] mt-1",
							children: [
								"Placed on",
								" ",
								new Date(order.createdAt).toLocaleDateString("en-IN", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 no-print",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-[4px] bg-[#FFC700]/10 px-3 py-1 text-xs font-bold text-[#181206]",
							children: status.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => window.print(),
							size: "sm",
							className: "rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black font-bold text-xs shadow-xs cursor-pointer",
							children: "Print Invoice"
						})]
					})]
				}),
				order.resolution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolutionBanner, { order })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 sm:p-8 shadow-xs space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
								children: "Live Delivery Tracking"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-6",
								children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${step.done ? "border-[#FFC700] bg-[#FFC700] text-[#181206] font-black" : "border-[#E8DEC8] text-[#A0A8B0]"}`,
											children: step.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : "·"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 w-px flex-1 bg-[#E2E2E2] last:hidden" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `text-xs font-bold ${step.done ? "text-[#181206]" : "text-[#6E777D]"}`,
												children: step.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#6E777D] mt-0.5",
												children: step.description
											}),
											step.at && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[10px] font-mono text-[#6E777D]",
												children: new Date(step.at).toLocaleString("en-IN", {
													day: "numeric",
													month: "short",
													hour: "numeric",
													minute: "2-digit"
												})
											})
										]
									})]
								}, step.key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6 bg-[#E2E2E2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 text-xs sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-[#181206] uppercase tracking-wider text-[11px]",
										children: "Delivering To"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-semibold text-[#181206]",
										children: [
											order.address.firstName,
											" ",
											order.address.lastName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[#6E777D] mt-0.5",
										children: [
											order.address.line1,
											", ",
											order.address.city,
											", ",
											order.address.state,
											" ",
											order.address.pin
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[#6E777D] mt-0.5 font-mono",
										children: order.phone
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-[#181206] uppercase tracking-wider text-[11px]",
										children: "Payment Method"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-semibold text-[#181206] capitalize",
										children: order.payment
									}),
									order.gift && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1.5 flex items-center gap-1 text-[11px] font-medium text-[#181206]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3 w-3" }), " Gift Wrapped Package"]
									}),
									order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[11px] text-[#6E777D]",
										children: ["Note: ", order.notes]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "no-print pt-4 border-t border-[#E8DEC8] flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
										order,
										mode: "cancellation",
										size: "sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderResolutionDialog, {
										order,
										mode: "refund",
										size: "sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportTicketDialog, {
										order,
										size: "sm"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-[6px] border border-[#E8DEC8] bg-white p-6 shadow-xs h-fit space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
								children: "Itemized Invoice Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: order.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: item.image,
											alt: item.name,
											width: 200,
											height: 200,
											wrapperClassName: "h-12 w-12 shrink-0 rounded-[4px] border border-[#E8DEC8] bg-[#FAF3D6]",
											className: "h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-xs font-bold text-[#181206]",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] text-[#6E777D]",
												children: [
													item.variantLabel,
													" × ",
													item.qty
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#181206] font-mono",
											children: formatPrice(item.price * item.qty)
										})
									]
								}, `${item.slug}-${item.variantId}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4 bg-[#E2E2E2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-xs text-[#6E777D]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Subtotal",
										value: formatPrice(order.totals.subtotal)
									}),
									order.totals.discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: `Discount${order.promoCode ? ` (${order.promoCode})` : ""}`,
										value: `−${formatPrice(order.totals.discount)}`,
										accent: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Shipping",
										value: order.totals.shipping === 0 ? "Free" : formatPrice(order.totals.shipping)
									}),
									order.totals.giftWrap > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Gift wrap",
										value: formatPrice(order.totals.giftWrap)
									}),
									order.totals.codFee > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "COD handling",
										value: formatPrice(order.totals.codFee)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4 bg-[#E2E2E2]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-baseline text-sm font-bold text-[#181206]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Grand Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg font-bold text-[#DC2626] font-mono",
									children: formatPrice(order.totals.total)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "mt-4 w-full h-10 rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black font-bold text-xs shadow-xs cursor-pointer no-print",
								onClick: () => {
									order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
									toast.success("Items added back to your basket");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-3.5 w-3.5" }), " Reorder These Items"]
							})
						]
					})]
				})
			]
		})]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between ${accent ? "text-[#181206] font-semibold" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[#181206]",
			children: value
		})]
	});
}
//#endregion
export { OrderTrackingPage as component };
