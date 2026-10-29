import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metrics-DiN42Nnk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var DEFAULT_METRICS = {
	freeShippingThreshold: 499,
	standardDeliveryFee: 50,
	expressDeliveryFee: 120,
	codHandlingFee: 40,
	gstPercentage: 5,
	hsnCode: "0910.30",
	wholesaleTier1MinKg: 5,
	wholesaleTier1Discount: 10,
	wholesaleTier2MinKg: 25,
	wholesaleTier2Discount: 18,
	wholesaleTier3MinKg: 100,
	wholesaleTier3Discount: 25
};
var STORAGE_KEY = "yg_calc_metrics";
function getLiveMetrics() {
	if (typeof window === "undefined") return DEFAULT_METRICS;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (parsed && typeof parsed === "object") return {
				...DEFAULT_METRICS,
				...parsed,
				freeShippingThreshold: Number(parsed.freeShippingThreshold ?? DEFAULT_METRICS.freeShippingThreshold),
				standardDeliveryFee: Number(parsed.standardDeliveryFee ?? DEFAULT_METRICS.standardDeliveryFee),
				expressDeliveryFee: Number(parsed.expressDeliveryFee ?? DEFAULT_METRICS.expressDeliveryFee),
				codHandlingFee: Number(parsed.codHandlingFee ?? DEFAULT_METRICS.codHandlingFee),
				gstPercentage: Number(parsed.gstPercentage ?? DEFAULT_METRICS.gstPercentage)
			};
		}
	} catch (e) {
		console.error("Failed to load calculation metrics:", e);
	}
	return DEFAULT_METRICS;
}
function saveLiveMetrics(metrics) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
		window.dispatchEvent(new CustomEvent("yg_calc_metrics_updated", { detail: metrics }));
		window.dispatchEvent(new Event("storage"));
	} catch (e) {
		console.error("Failed to save calculation metrics:", e);
	}
}
function resetLiveMetrics() {
	if (typeof window === "undefined") return;
	try {
		localStorage.removeItem(STORAGE_KEY);
		window.dispatchEvent(new CustomEvent("yg_calc_metrics_updated", { detail: DEFAULT_METRICS }));
		window.dispatchEvent(new Event("storage"));
	} catch (e) {
		console.error("Failed to reset calculation metrics:", e);
	}
}
/**
* Reactive React hook for Calculation Metrics.
* Automatically re-renders components whenever metrics are modified in the Admin Portal.
*/
function useLiveMetrics() {
	const [metrics, setMetrics] = (0, import_react.useState)(() => getLiveMetrics());
	(0, import_react.useEffect)(() => {
		setMetrics(getLiveMetrics());
		const handleUpdate = () => {
			setMetrics(getLiveMetrics());
		};
		window.addEventListener("yg_calc_metrics_updated", handleUpdate);
		window.addEventListener("storage", handleUpdate);
		return () => {
			window.removeEventListener("yg_calc_metrics_updated", handleUpdate);
			window.removeEventListener("storage", handleUpdate);
		};
	}, []);
	return metrics;
}
//#endregion
export { useLiveMetrics as i, resetLiveMetrics as n, saveLiveMetrics as r, DEFAULT_METRICS as t };
