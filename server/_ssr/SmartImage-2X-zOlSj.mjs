import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as RefreshCw, nt as ImageOff } from "../_libs/lucide-react.mjs";
import { t as srcSetFor } from "./images-BHlsETnY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SmartImage-2X-zOlSj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmartImage({ src, alt, className, wrapperClassName, width, height, loading = "lazy", sizes, priority, fallbackLabel }) {
	const [hasError, setHasError] = (0, import_react.useState)(false);
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex flex-col items-center justify-center gap-1.5 bg-[#FAF3D6]/80 p-3 text-center rounded-[8px] border border-[#E8DEC8]", wrapperClassName),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl",
				children: "📦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] leading-tight font-bold tracking-wide text-[#8C5921] uppercase line-clamp-1",
				children: fallbackLabel ?? "Product"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[9px] text-[#78716C] font-medium",
				children: "Photo Coming Soon"
			})
		]
	});
	if (hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex flex-col items-center justify-center gap-2 bg-[#FAF3D6]/60 p-3 text-center rounded-[8px] border border-[#E8DEC8]", wrapperClassName),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, {
				className: "h-5 w-5 text-[#8C5921]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] leading-tight font-medium tracking-wide text-[#8C5921] uppercase",
				children: fallbackLabel ?? "Photo Coming Soon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setHasError(false);
					setAttempt((a) => a + 1);
				},
				className: "inline-flex items-center gap-1 rounded-full border border-[#E8DEC8] bg-white px-2.5 py-1 text-[11px] font-medium text-[#181206] transition-colors hover:bg-[#FAF3D6]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
					className: "h-3 w-3",
					"aria-hidden": "true"
				}), "Retry"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-transparent flex items-center justify-center", wrapperClassName),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			...srcSetFor(src) ? {
				srcSet: srcSetFor(src),
				sizes: sizes ?? "100vw"
			} : {},
			...width ? { width } : {},
			...height ? { height } : {},
			loading: priority ? "eager" : loading,
			decoding: "async",
			...priority ? { fetchPriority: "high" } : {},
			onError: () => setHasError(true),
			className: cn("h-full w-full object-contain block", className)
		}, `${src}-${attempt}`)
	});
}
//#endregion
export { SmartImage as t };
