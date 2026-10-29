import { t as cn } from "./utils-C_uf36nf.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { it as Heart } from "../_libs/lucide-react.mjs";
import { n as useWishlist } from "./wishlist-DJheDFGd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WishlistButton-BGMEodhK.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Heart toggle used on cards and product pages. Confirms with an undo toast so
* an accidental tap is never destructive.
*/
function WishlistButton({ slug, name, className, variant = "icon" }) {
	const { has, toggle } = useWishlist();
	const saved = has(slug);
	const onClick = () => {
		if (toggle(slug)) toast.success(`${name} saved to your list`, { action: {
			label: "Undo",
			onClick: () => toggle(slug)
		} });
		else toast(`${name} removed from your list`, { action: {
			label: "Undo",
			onClick: () => toggle(slug)
		} });
	};
	if (variant === "full") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-pressed": saved,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-all duration-150 hover:bg-secondary active:scale-95 cursor-pointer", saved && "border-primary/40 bg-primary/5 text-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: cn("h-4 w-4 transition-transform duration-200", saved && "fill-primary scale-110"),
			"aria-hidden": true
		}), saved ? "Saved" : "Save for later"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-label": saved ? `Remove ${name} from your list` : `Save ${name} for later`,
		"aria-pressed": saved,
		className: cn("grid h-9 w-9 place-items-center rounded-full border border-border bg-card/90 backdrop-blur transition-all duration-150 hover:bg-card active:scale-125 cursor-pointer", saved && "border-primary/40 text-primary", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: cn("h-4 w-4 transition-transform duration-200", saved && "fill-primary scale-110"),
			"aria-hidden": true
		})
	});
}
//#endregion
export { WishlistButton as t };
