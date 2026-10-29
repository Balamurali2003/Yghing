import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Et as ChevronUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BackToTop-CIAUPo8W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 280);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "floating-back-to-top-btn fixed z-50 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white border-2 border-[#E8DEC8] text-[#181206] hover:bg-[#FFC700] hover:border-[#D8A700] hover:scale-110 flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 cursor-pointer group",
		"aria-label": "Scroll back to top",
		title: "Back to top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-5 w-5 text-[#181206] group-hover:-translate-y-0.5 transition-transform" })
	});
}
//#endregion
export { BackToTop };
