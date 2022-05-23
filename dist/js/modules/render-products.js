import { products } from './constants/products.js';
import { Elements } from './types/ProductElements.js';
export const rendererFilteredProducts = (filter) => {
    const recommendedSections = Array.from(document.querySelectorAll('.propose__modules'));
    let filteredProducts = products.filter(product => product.filter === filter);
    filteredProducts.forEach((product) => {
        const box = document.createElement('div');
        box.innerHTML = buildProduct(product);
        if (filter === 'shoes') {
            recommendedSections[0].appendChild(box);
        }
        else if (filter === 'clothes') {
            recommendedSections[1].appendChild(box);
        }
        else {
            recommendedSections[2].appendChild(box);
        }
    });
};
export const rendererAllProducts = () => {
    const mainAreaSection = document.querySelector('.sneakers-area__modules');
    products.forEach((product) => {
        const box = document.createElement('div');
        box.innerHTML = buildProduct(product);
        mainAreaSection.appendChild(box);
    });
};
export const renderFavProducts = () => {
    const favButton = document.querySelector(Elements.favButton);
    const favArea = document.querySelector('.fav-item-list');
    products.forEach((product) => {
        let box;
        if (favButton.dataset.selected === 'true') {
            box = document.createElement('div');
            box.classList.add('product-main-box');
            box.innerHTML = buildFavProduct(product);
            favArea.appendChild(box);
        }
    });
    const productBox = document.querySelectorAll('.product-main-box');
    for (let i = 0; i < productBox.length; i++) {
        class favProductBox {
            constructor() {
                this.removeButton = productBox[i].querySelector('.remove-button');
            }
        }
        const module = new favProductBox;
        const removeItem = () => {
            const removeFavItem = module.removeButton.closest('.product-main-box');
            removeFavItem.style.transform = 'translateX(-10rem)';
            removeFavItem.style.opacity = '0';
            setTimeout(() => {
                removeFavItem.remove();
            }, 300);
        };
        module.removeButton.addEventListener('click', () => {
            removeItem();
            console.log('trybi');
            const favElements = favArea.getElementsByClassName('product-main-box').length;
            const counter = document.querySelector('.fav-amount-span').textContent = favElements.toString();
        });
    }
};
const buildProduct = ({ id, category, description, images, price, brand }) => {
    return `
        <div class="propose__modules--box" id="${id}" data-brand="${brand}" data-category="${category}">
            <div class="image-box">
            <button class="image-box__button" data-selected="false">
            <i class='bx bx-heart'></i>
            </button>
            <img src="${images}" alt="${description}">
            </div>
                <div class="content">
                    <p class="content__title">${brand}</p>
                    <p class="content__subtitle">${description}</p>
                    <div class="content__options">
                    <p class="content__options--price">${price}$</p>
                    <button class="content__options--add-cart"><i class='bx bx-cart'></i> Add to cart</button>
                </div>
            </div>
        </div>
    `;
};
const buildFavProduct = ({ id, category, description, images, price }) => {
    return `
    <div class="fav-item-list__item" id="${id}">
    <p class="count">${id}</p>
    <img src="${images}" alt="${description}">

    <div class="right-items">
        <p class="price">${price}$</p>
        <p class="category">${category}</p>
    </div>

    <button class="remove-button">
        <i class='bx bx-x'></i>
    </button>
    </div>
    `;
};
