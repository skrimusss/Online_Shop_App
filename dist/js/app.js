import { renderMainPage, renderAllPagesComponents, renderProductsPage } from "./main-controler.js";
import { Datasets, BodyData } from "./modules/types/enums.js";
const mainFunctions = () => {
    renderAllPagesComponents();
    if (BodyData === Datasets.Main) {
        renderMainPage();
    }
    else if (BodyData === Datasets.Products) {
        renderProductsPage();
    }
};
mainFunctions();
