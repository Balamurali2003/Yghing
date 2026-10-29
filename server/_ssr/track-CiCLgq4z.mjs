import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { F as PackageSearch, w as SearchX } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as useOrders } from "./orders-DqR90r7S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-CiCLgq4z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackPage() {
	const { fetchOrder } = useOrders();
	const navigate = useNavigate();
	const [id, setId] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [checking, setChecking] = (0, import_react.useState)(false);
	const idInvalid = id.trim().length < 4;
	const emailInvalid = !/^\S+@\S+\.\S+$/.test(email.trim());
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		setError(null);
		if (idInvalid || emailInvalid) return;
		setChecking(true);
		try {
			const match = await fetchOrder(id.trim().toUpperCase(), email.trim());
			setChecking(false);
			if (!match) {
				setError("We couldn't find an order with that ID and email combination. Check the order number in your confirmation email, or contact support.");
				return;
			}
			navigate({
				to: "/order/$id",
				params: { id: match.id }
			});
		} catch {
			setChecking(false);
			setError("Lookup service temporarily unavailable. Please try again in a moment.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 sm:py-14 px-3 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
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
					children: "Order Tracking"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-full bg-[#FFC700]/10 border border-[#FFC700]/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageSearch, {
							className: "h-6 w-6 text-[#181206]",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#181206]",
						children: "Live Status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl sm:text-3xl font-bold tracking-tight text-[#181206]",
						children: "Track Your Order"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "No account needed. Enter the order number from your confirmation email and the address you used at checkout."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "rounded-[6px] border border-[#E8DEC8] bg-white mt-6 space-y-5 p-6 shadow-xs",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "track-id",
									className: "font-bold text-[#181206]",
									children: "Order Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "track-id",
									value: id,
									onChange: (e) => setId(e.target.value),
									onBlur: () => setTouched(true),
									"aria-invalid": touched && idInvalid,
									placeholder: "e.g. YG123456",
									autoComplete: "off",
									className: "rounded-[6px] border-[#E8DEC8]"
								}),
								touched && idInvalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#DC2626]",
									children: "Order numbers look like YG123456 — check your confirmation email."
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "track-email",
									className: "font-bold text-[#181206]",
									children: "Email Used at Checkout"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "track-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									onBlur: () => setTouched(true),
									"aria-invalid": touched && emailInvalid,
									placeholder: "e.g. name@example.com",
									autoComplete: "email",
									className: "rounded-[6px] border-[#E8DEC8]"
								}),
								touched && emailInvalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#DC2626]",
									children: "Enter the email address you ordered with."
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full bg-[#FFC700] hover:bg-[#E6B000] text-[#181206] font-black rounded-[6px] font-bold shadow-xs py-3",
							disabled: checking,
							children: checking ? "Checking dispatch status…" : "Track Order Status"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "alert",
							className: "flex gap-3 rounded-[6px] border border-red-200 bg-red-50 p-4 text-xs text-[#DC2626]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, {
								className: "mt-0.5 h-4 w-4 shrink-0 text-[#DC2626]",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs text-muted-foreground text-center",
					children: [
						"Signed in on this device?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "font-bold text-[#181206] hover:underline",
							children: "See all your orders"
						}),
						". Still have a question?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "font-bold text-[#181206] hover:underline",
							children: "Contact support"
						}),
						"."
					]
				})
			]
		})]
	});
}
//#endregion
export { TrackPage as component };
