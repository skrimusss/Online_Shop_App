import { navLogic } from "./modules/nav.js";
import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";
import { contactLogic } from "./modules/contact.js";
import { scrollButtonFunctions } from "./modules/scroll.js";
import { type } from "./modules/typewriter.js";
import { rendererLogic } from "./modules/products/render-products.js";

const mainFunctions = () => {
    navLogic()
    rendererLogic('shoes')
    rendererLogic('clothes')
    rendererLogic('accesories')
    recommendedLogic()
    newsletterLogic()
    contactLogic()
    scrollButtonFunctions()
    type()
};

document.addEventListener('DOMContentLoaded', mainFunctions)