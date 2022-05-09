import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";
import { contactLogic } from "./modules/contact.js";
import { type } from "./modules/typewriter.js";
import { rendererFilteredProducts, rendererAllProducts } from "./modules/render-products.js";
import { navLogic } from "./modules/nav.js";
import { scrollButtonFunctions } from "./modules/scroll.js";
import { selectFiltersLogic } from "./modules/select-filter.js";
export const renderMainPage = () => {
    rendererFilteredProducts('shoes');
    rendererFilteredProducts('clothes');
    rendererFilteredProducts('accesories');
    recommendedLogic();
    newsletterLogic();
    type();
    contactLogic();
};
export const renderProductsPage = () => {
    selectFiltersLogic();
    rendererAllProducts();
};
export const renderAllPagesComponents = () => {
    navLogic();
    scrollButtonFunctions();
};
