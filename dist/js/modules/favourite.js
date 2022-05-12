var Elements;
(function (Elements) {
    Elements["heart"] = "<i class='bx bx-heart'></i>";
    Elements["solidHeart"] = "<i class='bx bxs-heart'></i>";
    Elements["toggleButton"] = "toggle-fav-button";
    Elements["favButton"] = ".image-box__button";
    Elements["product"] = ".propose__modules--box";
})(Elements || (Elements = {}));
export const favButtonEffect = () => {
    const productArea = Array.from(document.querySelectorAll(Elements.product));
    const favElements = [];
    const rednerProduct = () => {
    };
    for (let i = 0; i < productArea.length; i++) {
        class productElements {
            constructor() {
                this.favButton = productArea[i]
                    .querySelector(Elements.favButton);
            }
        }
        const module = new productElements;
        let dataSelect = module.favButton.dataset.selected;
        module.favButton.addEventListener('click', () => {
            if (dataSelect === 'true') {
                dataSelect = 'false';
                module.favButton.innerHTML = Elements.heart;
                module.favButton.classList.remove(Elements.toggleButton);
            }
            else {
                dataSelect = 'true';
                module.favButton.innerHTML = Elements.solidHeart;
                module.favButton.classList.add(Elements.toggleButton);
            }
        });
    }
};
