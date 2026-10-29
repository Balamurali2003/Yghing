//#region node_modules/.nitro/vite/services/ssr/assets/images-BHlsETnY.js
var story_1_shop_560_default = "/assets/story-1-shop-560-C9AOS04y.webp";
var story_1_shop_900_default = "/assets/story-1-shop-900-C1hKWfWP.webp";
var story_1_shop_1200_default = "/assets/story-1-shop-1200-KH6P15Oz.webp";
var story_2_kitchen_560_default = "/assets/story-2-kitchen-560-BwiFpku4.webp";
var story_2_kitchen_900_default = "/assets/story-2-kitchen-900-D9xPH5h3.webp";
var story_2_kitchen_1200_default = "/assets/story-2-kitchen-1200-B0XrR51h.webp";
var story_3_today_560_default = "/assets/story-3-today-560-BqodebNV.webp";
var story_3_today_900_default = "/assets/story-3-today-900-CoQyFYq-.webp";
var story_3_today_1200_default = "/assets/story-3-today-1200-COgTFLEH.webp";
var product_powder_400_default = "/assets/product-powder-400-BzZ6QhiJ.webp";
var product_powder_800_default = "/assets/product-powder-800-DcdU81cH.webp";
var product_glutenfree_400_default = "/assets/product-glutenfree-400-dtzpdwMq.webp";
var product_glutenfree_800_default = "/assets/product-glutenfree-800-BRbglSHw.webp";
var product_granules_400_default = "/assets/product-granules-400-D98wWv4R.webp";
var product_granules_800_default = "/assets/product-granules-800-WWT9xaKD.webp";
var product_cake_400_default = "/assets/product-cake-400-IyNQ7Qca.webp";
var product_cake_800_default = "/assets/product-cake-800-D7p8IG0h.webp";
var registry = /* @__PURE__ */ new Map();
function register(sources) {
	const largest = sources[sources.length - 1][0];
	registry.set(largest, sources.map(([url, w]) => `${url} ${w}w`).join(", "));
	return largest;
}
register([
	[story_1_shop_560_default, 560],
	[story_1_shop_900_default, 900],
	[story_1_shop_1200_default, 1200]
]);
register([
	[story_2_kitchen_560_default, 560],
	[story_2_kitchen_900_default, 900],
	[story_2_kitchen_1200_default, 1200]
]);
var storyTodayImage = register([
	[story_3_today_560_default, 560],
	[story_3_today_900_default, 900],
	[story_3_today_1200_default, 1200]
]);
register([[product_powder_400_default, 400], [product_powder_800_default, 800]]);
register([[product_glutenfree_400_default, 400], [product_glutenfree_800_default, 800]]);
register([[product_granules_400_default, 400], [product_granules_800_default, 800]]);
register([[product_cake_400_default, 400], [product_cake_800_default, 800]]);
/** srcSet string for a registered image, if we generated width variants for it. */
function srcSetFor(src) {
	return src ? registry.get(src) : void 0;
}
//#endregion
export { storyTodayImage as n, srcSetFor as t };
