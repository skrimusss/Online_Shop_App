import { navLogic } from "./modules/nav.js";
import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";
import { contactLogic } from "./modules/contact.js";
import { scrollButtonFunctions } from "./modules/scroll.js";
import { type } from "./modules/typewriter.js";
import { rendererLogic, rendererAll } from "./modules/products/render-products.js";

const mainFunctions = () => {
    navLogic()
    scrollButtonFunctions()
    if (document.body.getAttribute('data-page') === 'main') {
        rendererLogic('shoes')
        rendererLogic('clothes')
        rendererLogic('accesories')
        recommendedLogic()
        newsletterLogic()
        type()
        contactLogic()
    } else if (document.body.getAttribute('data-page') === 'products') {
        rendererAll()
    }
};

document.addEventListener('DOMContentLoaded', mainFunctions)