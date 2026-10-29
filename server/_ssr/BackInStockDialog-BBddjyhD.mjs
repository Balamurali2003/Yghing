import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { At as Check, Ft as BellRing } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as Input } from "./input-C2Ie51fg.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as useWishlist } from "./wishlist-DJheDFGd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BackInStockDialog-BBddjyhD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CONTACT_RE = /^(\S+@\S+\.\S+|[6-9]\d{9})$/;
/** "Notify me" capture for sold-out products. Accepts an email or a 10-digit mobile. */
function BackInStockDialog({ slug, name, className }) {
	const { addAlert, hasAlert } = useWishlist();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [contact, setContact] = (0, import_react.useState)("");
	const [touched, setTouched] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const invalid = !CONTACT_RE.test(contact.trim());
	const registered = hasAlert(slug);
	const submit = async (e) => {
		e.preventDefault();
		setTouched(true);
		if (invalid) return;
		setSaving(true);
		await new Promise((r) => setTimeout(r, 450));
		addAlert(slug, contact.trim());
		setSaving(false);
		setOpen(false);
		setContact("");
		setTouched(false);
		toast.success("We'll tell you the moment it's back", { description: `${name} — one message only, no marketing.` });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: registered ? "outline" : "default",
				className,
				size: "lg",
				children: registered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }), " Alert set"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "mr-2 h-4 w-4" }), " Notify me when back"] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Tell me when it's back" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [name, " is being packed in the next batch. Leave an email or mobile number and we'll send exactly one message when it returns."] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "stock-contact",
						children: "Email or mobile number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "stock-contact",
						value: contact,
						autoComplete: "email",
						onChange: (e) => setContact(e.target.value),
						onBlur: () => setTouched(true),
						"aria-invalid": touched && invalid,
						placeholder: "Enter your email or mobile number"
					}),
					touched && invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: "Enter a valid email address or a 10-digit Indian mobile number."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: saving,
							className: "w-full sm:w-auto",
							children: saving ? "Saving…" : "Notify me"
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { BackInStockDialog };
