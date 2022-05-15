import { getLS, saveInLS } from './storage/storage-utils.js';
const FAVS_LS = 'favs';
var Elements;
(function (Elements) {
    Elements["heart"] = "<i class='bx bx-heart'></i>";
    Elements["solidHeart"] = "<i class='bx bxs-heart'></i>";
    Elements["toggleButton"] = "toggle-fav-button";
    Elements["favButton"] = ".image-box__button";
    Elements["product"] = ".propose__modules--box";
})(Elements || (Elements = {}));
export const favButtonEffect = (itemID) => {
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
        });
    }
};
function removeFromFav(node) {
    node.dataset.selected = 'false';
    node.innerHTML = Elements.heart;
    node.classList.remove(Elements.toggleButton);
    removeFromLS(getItemName(node));
}
function addToFav(node) {
    node.dataset.selected = 'true';
    node.innerHTML = Elements.solidHeart;
    node.classList.add(Elements.toggleButton);
    addToLS(getItemName(node));
}
function getItemName(node) {
    return node.closest('.propose__modules--box').querySelector('.content__subtitle').innerHTML;
}
function removeFromLS(name) {
    const storage = getLS(FAVS_LS);
    storage.splice(name.indexOf(name));
    saveInLS(FAVS_LS, storage);
}
function addToLS(name) {
    const storage = getLS(FAVS_LS);
    storage.push(name);
    saveInLS(FAVS_LS, storage);
}
