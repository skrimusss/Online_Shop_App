import { navLogic } from "./modules/nav.js";
import { recommendedLogic } from "./modules/recommended.js";

const mainFunctions = () => {
    navLogic()
    recommendedLogic()
};

document.addEventListener('DOMContentLoaded', mainFunctions)