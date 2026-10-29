//#region node_modules/.nitro/vite/services/ssr/assets/pincode.functions-DMq4TuqT.js
async function lookupPincode({ data }) {
	const pin = String(data?.pin ?? "").trim();
	const empty = {
		ok: false,
		pin,
		city: "",
		district: "",
		state: "",
		areas: []
	};
	if (!/^\d{6}$/.test(pin)) return {
		...empty,
		message: "PIN must be 6 digits"
	};
	try {
		const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`, { headers: { accept: "application/json" } });
		if (!res.ok) return {
			...empty,
			message: "Lookup service unavailable"
		};
		const entry = (await res.json())?.[0];
		const offices = entry?.PostOffice ?? [];
		if (entry?.Status !== "Success" || offices.length === 0) return {
			...empty,
			message: "We couldn't find that PIN code"
		};
		const first = offices[0];
		const areas = Array.from(new Set(offices.map((o) => o.Name).filter(Boolean)));
		return {
			ok: true,
			pin,
			city: first.District ?? "",
			district: first.District ?? "",
			state: first.State ?? "",
			areas
		};
	} catch {
		return {
			...empty,
			message: "Lookup service unavailable"
		};
	}
}
//#endregion
export { lookupPincode as t };
