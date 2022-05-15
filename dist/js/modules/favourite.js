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
                this.favButton = productArea[i]
                    .querySelector(Elements.favButton);
            }
        }
        const module = new productElements;
        module.favButton.addEventListener('click', () => {
            if (module.favButton.dataset.selected === 'true') {
                module.favButton.dataset.selected = 'false';
                module.favButton.innerHTML = Elements.heart;
                module.favButton.classList.remove(Elements.toggleButton);
            }
            else {
                module.favButton.dataset.selected = 'true';
                module.favButton.innerHTML = Elements.solidHeart;
                module.favButton.classList.add(Elements.toggleButton);
            }
        });
    }
};
