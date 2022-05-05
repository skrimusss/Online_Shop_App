import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";
import { contactLogic } from "./modules/contact.js";
import { type } from "./modules/typewriter.js";
import { rendererLogic } from "./modules/products/render-products.js";
import { rendererAll } from "./modules/products/render-products.js";
import { navLogic } from "./modules/nav.js";
import { scrollButtonFunctions } from "./modules/scroll.js";
export const renderMainPage = () => {
    rendererLogic('shoes');
    rendererLogic('clothes');
    rendererLogic('accesories');
    recommendedLogic();
    newsletterLogic();
    type();
    contactLogic();
};
export const renderProductsPage = () => {
    rendererAll();
};
export const renderAllPagesComponents = () => {
    navLogic();
    scrollButtonFunctions();
};
