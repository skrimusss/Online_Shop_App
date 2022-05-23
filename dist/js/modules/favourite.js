import { getLS, saveInLS } from "./storage/storage-utils.js";
import { Elements } from "./types/ProductElements.js";
import { renderFavProducts } from "./render-products.js";
export let favProductsRender = [];
export const favButtonEffect = () => {
    const favArea = document.querySelector('.fav-item-list');
    const favPopupEmpty = document.querySelector('.fav-popup__empty');
    const productArea = Array.from(document.querySelectorAll(Elements.product));
    for (let i = 0; i < productArea.length; i++) {
        class productElements {
            constructor() {
                this.favButton = productArea[i].querySelector(Elements.favButton);
            }
        }
        const module = new productElements();
        module.favButton.addEventListener('click', () => {
            if (module.favButton.dataset.selected === 'true') {
                removeFromFav(module.favButton);
            }
            else {
                addToFav(module.favButton);
            }
            const favElements = favArea.getElementsByClassName('product-main-box').length;
            const counter = document.querySelector('.fav-amount-span').textContent = favElements.toString();
            if (favElements === 0) {
                favPopupEmpty.style.display = 'block';
                favArea.style.display = 'none';
            }
            else {
                favPopupEmpty.style.display = 'none';
                favArea.style.display = 'block';
            }
        });
    }
};
const FAVS_LS = 'favs';
export const storage = getLS(FAVS_LS);
export const removeFromFav = (node) => {
    node.dataset.selected = 'false';
    node.innerHTML = Elements.heart;
    node.classList.remove(Elements.toggleButton);
    removeFromLS(getItemName(node));
};
const addToFav = (node) => {
    node.dataset.selected = 'true';
    node.innerHTML = Elements.solidHeart;
    node.classList.add(Elements.toggleButton);
    addToLS(getItemName(node));
    renderFavProducts();
};
const getItemName = ((node) => {
    return node.closest('.propose__modules--box').querySelector('.content__subtitle').innerHTML;
});
const removeFromLS = (name) => {
    storage.splice(name.indexOf(name));
    localStorage.removeItem(name);
    saveInLS(FAVS_LS, storage);
};
const addToLS = (name) => {
    storage.push(name);
    saveInLS(FAVS_LS, storage);
};
