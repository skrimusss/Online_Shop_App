import { products } from "./constants/products"
import { ProductInterface } from "./constants/products"

enum Elements {
    heart = "<i class='bx bx-heart'></i>",
    solidHeart = "<i class='bx bxs-heart'></i>",
    toggleButton = "toggle-fav-button",
    favButton = ".image-box__button",
    product = ".propose__modules--box",
}

export const favButtonEffect = () => {
    const productArea = Array.from(document.querySelectorAll(Elements.product))
    const favElements: Element[] = []

    const rednerProduct = () => {

    }

    for (let i = 0; i < productArea.length; i++) {
        class productElements {
            favButton: HTMLButtonElement = productArea[i]
            .querySelector(Elements.favButton)
        }
        const module = new productElements
        let dataSelect = module.favButton.dataset.selected

        module.favButton.addEventListener('click', () => {
            if (dataSelect === 'true') {
                dataSelect = 'false'
                module.favButton.innerHTML = Elements.heart
                module.favButton.classList.remove(Elements.toggleButton)
            } else {
                dataSelect = 'true'
                module.favButton.innerHTML = Elements.solidHeart
                module.favButton.classList.add(Elements.toggleButton)
            }
        })
    }
}
