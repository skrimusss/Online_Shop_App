import { navLogic } from "./modules/nav.js";
import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";
import { contactLogic } from "./modules/contact.js";
import { scrollButtonFunctions } from "./modules/scroll.js";
import { type } from "./modules/typewriter.js";
const mainFunctions = () => {
    navLogic();
    recommendedLogic();
    newsletterLogic();
    contactLogic();
    scrollButtonFunctions();
    type();
};
document.addEventListener('DOMContentLoaded', mainFunctions);
