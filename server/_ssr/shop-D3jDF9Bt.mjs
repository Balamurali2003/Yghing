import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as products } from "./products-DheZb9xp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-D3jDF9Bt.js
var $$splitComponentImporter = () => import("./shop-CeaNHyZl.mjs");
var Route = createFileRoute("/shop")({
	validateSearch: (search) => ({
		category: typeof search["category"] === "string" ? search["category"] : void 0,
		format: typeof search["format"] === "string" ? search["format"] : void 0,
		q: typeof search["q"] === "string" ? search["q"] : void 0,
		price: typeof search["price"] === "string" ? search["price"] : void 0,
		minPrice: typeof search["minPrice"] === "number" ? search["minPrice"] : void 0,
		maxPrice: typeof search["maxPrice"] === "number" ? search["maxPrice"] : void 0
	}),
	head: () => ({
		meta: [
			{ title: "Buy Authentic Hing Online — Powders, Cakes, Health Mix & Sambrani | Y.G Asafoetida" },
			{
				name: "description",
				content: "Explore our authentic heritage catalog: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, Pure Benzoin Pooja Sambrani, and Vismaya traditional podis & mixes. Fast shipping across India."
			},
			{
				name: "keywords",
				content: "buy hing online, asafoetida powder price, pure gold hing cake, gluten free hing powder, traditional health mix, sathu maavu online, pure benzoin pooja sambrani, vismaya podi, buy hing in India"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ygasafoetida.in/shop"
			},
			{
				property: "og:title",
				content: "Buy Authentic Hing, Health Mix & Sambrani — Y.G Asafoetida"
			},
			{
				property: "og:description",
				content: "Explore authentic heritage preparations: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, Pure Benzoin Pooja Sambrani, and Vismaya podis."
			},
			{
				property: "og:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Shop Authentic Heritage Hing — Y.G Asafoetida"
			},
			{
				name: "twitter:description",
				content: "Explore authentic heritage preparations: Hing powders, solid cakes, gluten-free, health mix, pooja sambrani, and Vismaya traditional podis."
			},
			{
				name: "twitter:image",
				content: "https://ygasafoetida.in/products/all-product/img-1.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ygasafoetida.in/shop"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				"name": "Y.G Asafoetida & Traditional Products Store",
				"description": "Authentic compounded hing powders, solid cakes, traditional health mix, and pooja sambrani.",
				"url": "https://ygasafoetida.in/shop",
				"breadcrumb": {
					"@type": "BreadcrumbList",
					"itemListElement": [{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://ygasafoetida.in/"
					}, {
						"@type": "ListItem",
						"position": 2,
						"name": "Shop",
						"item": "https://ygasafoetida.in/shop"
					}]
				},
				"mainEntity": {
					"@type": "ItemList",
					"itemListElement": products.map((p, index) => ({
						"@type": "ListItem",
						"position": index + 1,
						"name": p.name,
						"url": `https://ygasafoetida.in/product/${p.slug}`,
						"image": `https://ygasafoetida.in/products/${p.slug}/img-1.jpg`
					}))
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PRICE_PRESETS = [
	{
		id: "all",
		label: "All Prices",
		min: 18,
		max: 2e3,
		shortLabel: "All"
	},
	{
		id: "under-50",
		label: "Under ₹50",
		min: 18,
		max: 50,
		shortLabel: "< ₹50",
		badge: "Covers & Mini"
	},
	{
		id: "50-100",
		label: "₹50 — ₹100",
		min: 50,
		max: 100,
		shortLabel: "₹50-100",
		badge: "Trays & Sambrani"
	},
	{
		id: "100-250",
		label: "₹100 — ₹250",
		min: 100,
		max: 250,
		shortLabel: "₹100-250",
		badge: "100g & Podis"
	},
	{
		id: "250-500",
		label: "₹250 — ₹500",
		min: 250,
		max: 500,
		shortLabel: "₹250-500",
		badge: "Containers & Jars"
	},
	{
		id: "above-500",
		label: "₹500 & Above",
		min: 500,
		max: 2e3,
		shortLabel: "> ₹500",
		badge: "Pouches & Hampers"
	}
];
//#endregion
export { Route as n, PRICE_PRESETS as t };
