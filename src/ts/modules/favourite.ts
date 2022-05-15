import { products } from "./constants/products"
import { ProductInterface } from "./constants/products"
import { renderFavProducts } from "./render-products"

enum Elements {
    heart = "<i class='bx bx-heart'></i>",
    solidHeart = "<i class='bx bxs-heart'></i>",
    toggleButton = "toggle-fav-button",
    favButton = ".image-box__button",
    product = ".propose__modules--box"
}


export const favButtonEffect = (itemID?: number) => {
    const productArea = Array.from(document.querySelectorAll(Elements.product))

    for (let i = 0; i < productArea.length; i++) {
        class productElements {
            favButton: HTMLButtonElement = productArea[i]
            .querySelector(Elements.favButton)
        }

        const module = new productElements

        module.favButton.addEventListener('click', () => {
            if (module.favButton.dataset.selected === 'true') {
                module.favButton.dataset.selected = 'false'
                module.favButton.innerHTML = Elements.heart
                module.favButton.classList.remove(Elements.toggleButton)
            } else {
                module.favButton.dataset.selected = 'true'
                module.favButton.innerHTML = Elements.solidHeart
                module.favButton.classList.add(Elements.toggleButton)
            }
        })
    }
}