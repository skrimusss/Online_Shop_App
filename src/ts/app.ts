import { renderMainPage, renderAllPagesComponents, renderProductsPage } from "./main-controler.js";

const mainFunctions = () => {
    renderAllPagesComponents()
    if (document.body.dataset.page === 'main') {
        renderMainPage()
    } else if (document.body.dataset.page === 'products') {
        renderProductsPage()
    }
};

mainFunctions()