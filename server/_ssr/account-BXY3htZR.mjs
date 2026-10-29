import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { E as RotateCcw, P as Package, U as MapPin, f as Trash2, s as UserRound } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SmartImage } from "./SmartImage-2X-zOlSj.mjs";
import { n as formatPrice } from "./products-DheZb9xp.mjs";
import { n as useCart } from "./cart-BXXNqqeG.mjs";
import { a as currentStatus, c as resolutionEligibility, d as useOrders } from "./orders-DqR90r7S.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { i as SupportTicketDialog, n as PolicyRules, r as ResolutionBanner, t as OrderResolutionDialog } from "./OrderResolutionDialog-BKQ92uTQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BXY3htZR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { profile, signIn, signOut, orders, addresses, removeAddress, setDefaultAddress } = useOrders();
	const cart = useCart();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#A0A8B0]",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-[#181206]",
							children: "Account"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline-block text-xs font-semibold text-[#181206] bg-[#FFC700]/10 px-2.5 py-0.5 rounded-[4px]",
					children: "Fast Guest Sync"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page pt-8 sm:pt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-[#181206]",
						children: "Customer Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl font-bold sm:text-4xl text-[#181206] tracking-tight",
						children: "Your Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-[#6E777D]",
						children: "Orders, live tracking, and saved delivery addresses — preserved safely on this device."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border-2 border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 shadow-md ring-1 ring-[#FFC700]/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-base font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "p-1 rounded bg-[#FFC700] text-[#181206] border border-[#D8A700]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Profile Details" })]
						}), profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-1.5 text-xs text-[#5A6560]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-[#181206] text-sm",
									children: profile.name || "Guest Cook"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.email }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.phone }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 rounded-[6px] border-[#D8A700] bg-white text-[#181206] text-xs hover:bg-[#FFC700] hover:border-[#D8A700] cursor-pointer",
									onClick: signOut,
									children: "Sign Out"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 space-y-3",
							onSubmit: (e) => {
								e.preventDefault();
								signIn({
									name,
									email,
									phone
								});
								toast.success("Profile saved successfully");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-name",
										className: "text-xs font-semibold text-[#181206]",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-name",
										value: name,
										onChange: (e) => setName(e.target.value),
										required: true,
										className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]",
										placeholder: "Enter your name",
										autoComplete: "name"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-email",
										className: "text-xs font-semibold text-[#181206]",
										children: "Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-email",
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										required: true,
										className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]",
										placeholder: "Enter your email",
										autoComplete: "email"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "acc-phone",
										className: "text-xs font-semibold text-[#181206]",
										children: "Mobile Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "acc-phone",
										type: "tel",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										required: true,
										className: "min-h-10 text-xs rounded-[6px] border-[#E8DEC8]",
										placeholder: "10-digit mobile number",
										autoComplete: "tel"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "w-full h-10 rounded-[6px] bg-[#FFC700] hover:bg-[#181206] text-[#181206] hover:text-[#FFC700] border border-[#D8A700] hover:border-[#181206] font-black text-xs shadow-xs cursor-pointer active:scale-95 transition-all",
									children: "Save Profile"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border-2 border-[#E8DEC8] hover:border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 shadow-xs transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-base font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "p-1 rounded bg-[#FFC700] text-[#181206] border border-[#D8A700]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saved Addresses" })]
						}), addresses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-[#6E777D]",
							children: "Addresses saved during checkout will be shown here."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-[6px] border border-[#E8DEC8] p-3 text-xs bg-[#FAF3D6]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold text-[#181206]",
											children: [
												a.firstName,
												" ",
												a.lastName,
												a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ml-2 rounded-[4px] bg-[#FFC700]/10 px-2 py-0.5 text-[10px] font-bold text-[#181206] uppercase",
													children: "Default"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[#6E777D] mt-0.5",
											children: [
												a.line1,
												", ",
												a.city,
												", ",
												a.state,
												" ",
												a.pin
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[#6E777D] mt-0.5 font-mono",
											children: a.phone
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Remove address",
										onClick: () => removeAddress(a.id),
										className: "text-[#6E777D] hover:text-red-500 cursor-pointer p-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								}), !a.isDefault && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDefaultAddress(a.id),
									className: "mt-2 text-[11px] font-semibold text-[#181206] hover:underline cursor-pointer",
									children: "Set as Default"
								})]
							}, a.id))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border-2 border-[#E8DEC8] hover:border-[#FFC700] bg-gradient-to-b from-[#FFFDF2] to-[#FAF3D6] p-6 shadow-xs transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-base font-bold text-[#181206] pb-3 border-b border-[#E8DEC8]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "p-1 rounded bg-[#FFC700] text-[#181206] border border-[#D8A700]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Order History" })]
					}), orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 text-center py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#6E777D]",
							children: "No orders placed yet on this device."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-4 rounded-[6px] bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black font-bold text-xs shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								children: "Explore Heritage Spices"
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: orders.map((order) => {
							const status = currentStatus(order);
							const eligibility = resolutionEligibility(order);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-[6px] border border-[#E8DEC8] p-4 bg-white shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold text-[#181206] text-sm",
											children: ["Order #", order.id]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-[#6E777D]",
											children: [
												new Date(order.createdAt).toLocaleDateString("en-IN", {
													day: "numeric",
													month: "short",
													year: "numeric"
												}),
												" ",
												"· ",
												order.items.reduce((n, i) => n + i.qty, 0),
												" items"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-[4px] bg-[#FFC700]/10 px-2.5 py-1 text-xs font-bold text-[#181206]",
											children: status.label
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-3 bg-[#E2E2E2]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3",
										children: [order.items.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: item.image,
											alt: item.name,
											width: 200,
											height: 200,
											wrapperClassName: "h-12 w-12 shrink-0 rounded-[4px] border border-[#E8DEC8] bg-[#FAF3D6]",
											className: "h-full w-full object-cover"
										}, `${item.slug}-${item.variantId}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-sm font-bold text-[#DC2626] font-mono",
											children: formatPrice(order.totals.total)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: "rounded-[6px] border-[#E8DEC8] text-xs hover:border-[#FFC700] hover:text-[#181206]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/order/$id",
													params: { id: order.id },
													children: "Track Order"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												className: "rounded-[6px] text-xs text-[#181206] hover:text-[#181206]",
												onClick: () => {
													order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
													toast.success("Items added back to your basket");
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-3.5 w-3.5" }), " Reorder"]
											}),
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
												size: "sm",
												variant: "ghost",
												label: "Get Help"
											})
										]
									}),
									order.resolution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResolutionBanner, { order })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										className: "mt-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
											className: "cursor-pointer text-[11px] text-[#6E777D]",
											children: [eligibility.reason, " · see return policy"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolicyRules, {
											order,
											className: "mt-2"
										})]
									})
								]
							}, order.id);
						})
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { AccountPage as component };
