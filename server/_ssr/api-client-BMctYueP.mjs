//#region node_modules/.nitro/vite/services/ssr/assets/api-client-BMctYueP.js
function getBaseUrl() {
	if (typeof window !== "undefined") return "";
	return process.env["APP_URL"] || "http://127.0.0.1:8080";
}
async function apiFetch(endpoint, options) {
	const url = `${getBaseUrl()}${endpoint}`;
	const res = await fetch(url, {
		...options,
		headers: {
			"content-type": "application/json",
			...options?.headers || {}
		}
	});
	if (!res.ok) {
		let errorMsg = `HTTP ${res.status}`;
		try {
			const data = await res.json();
			if (data && typeof data === "object" && "error" in data) errorMsg = String(data.error);
		} catch {}
		throw new Error(errorMsg);
	}
	return await res.json();
}
//#endregion
export { apiFetch as t };
