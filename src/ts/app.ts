import { renderMainPage, renderAllPagesComponents, renderProductsPage } from "./main-controler.js"
import { Datasets, bodyData } from "./modules/types/enums.js"

const mainFunctions = () => {
    renderAllPagesComponents()

    if (bodyData === Datasets.Main) {
        renderMainPage()
    } else if (bodyData === Datasets.Products) {
        renderProductsPage()
    }
}

mainFunctions()