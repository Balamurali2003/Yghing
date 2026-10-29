import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-D-UdGKjf.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DEFAULT_METRICS } from "./metrics-DiN42Nnk.mjs";
import { a as PRESET_PRODUCT_IMAGES } from "./admin-DvXJ2d0C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DFqZUIT2.js
var import_jsx_runtime = require_jsx_runtime();
function getDisplayImageUrl(keyOrUrl) {
	if (!keyOrUrl) return "/products/100g-gold-asafoetida-powder/img-1.jpg";
	if (keyOrUrl.startsWith("data:") || keyOrUrl.startsWith("http://") || keyOrUrl.startsWith("https://") || keyOrUrl.startsWith("/")) return keyOrUrl;
	const match = PRESET_PRODUCT_IMAGES.find((p) => p.key === keyOrUrl);
	return match ? match.url : "/products/100g-gold-asafoetida-powder/img-1.jpg";
}
function formatStatus(val) {
	if (val === null || val === void 0) return "";
	return String(val).replace(/_/g, " ");
}
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "min-h-[75vh] flex flex-col items-center justify-center p-6 text-center bg-[#FAF3D6]/30",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-md w-full p-6 rounded-2xl border border-[#E8DEC8] bg-card shadow-lg space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFC700] text-[#181206] font-display font-black text-lg",
				children: "YG"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold text-foreground font-display",
				children: "Y.G Admin Portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: error?.message || "An issue occurred while loading administrative records. You can safely retry or re-authenticate."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-2 justify-center pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						if (typeof window !== "undefined") {
							sessionStorage.removeItem("yg_admin_auth");
							localStorage.removeItem("yg_admin_auth");
						}
						reset();
					},
					className: "bg-[#FFC700] text-[#181206] font-bold hover:bg-[#FFC700]/90 text-xs h-10",
					children: "Reset Admin Session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "text-xs h-10 border-[#E8DEC8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "View Storefront"
					})
				})]
			})
		]
	})
});
//#endregion
export { DEFAULT_METRICS, SplitErrorComponent as errorComponent, formatStatus, getDisplayImageUrl };
