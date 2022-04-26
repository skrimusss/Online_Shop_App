import { navLogic } from "./modules/nav.js";
import { recommendedLogic } from "./modules/recommended.js";
import { newsletterLogic } from "./modules/newsletter.js";

const mainFunctions = () => {
    navLogic()
    recommendedLogic()
    newsletterLogic()
};

document.addEventListener('DOMContentLoaded', mainFunctions)