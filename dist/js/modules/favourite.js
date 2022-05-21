import { getLS, saveInLS } from "./storage/storage-utils.js";
import { Elements } from "./constants/ProductElements.js";
import { renderFavProducts } from "./render-products.js";
export const favButtonEffect = () => {
    const productArea = Array.from(document.querySelectorAll(Elements.product));
    const favArea = document.querySelector('.fav-item-list');
    let amount = favArea.getElementsByClassName('product-main-box');
    const favPopupEmpty = document.querySelector('.fav-popup__empty');
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
            if (amount.length) {
                favPopupEmpty.style.display = 'block';
                favArea.style.display = 'none';
            }
            else {
                favPopupEmpty.style.display = 'none';
                favArea.style.display = 'block';
            }
            console.log(amount.length.toString());
        });
    }
};
const addAmount = () => {
    const favArea = document.querySelector('.fav-item-list');
    let amount = favArea.getElementsByTagName('div');
    const counter = document.querySelector('.fav-amount-span');
    counter.textContent = amount.length.toString();
};
const removeFromFav = (node) => {
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
    addAmount();
};
const getItemName = ((node) => {
    return node.closest('.propose__modules--box').querySelector('.content__subtitle').innerHTML;
});
const removeFromLS = (name) => {
    const FAVS_LS = 'favs';
    const storage = getLS(FAVS_LS);
    storage.splice(name.indexOf(name));
    localStorage.removeItem(name);
    saveInLS(FAVS_LS, storage);
};
const addToLS = (name) => {
    const FAVS_LS = 'favs';
    const storage = getLS(FAVS_LS);
    storage.push(name);
    saveInLS(FAVS_LS, storage);
};
