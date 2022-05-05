import { products } from './constants/products.js';
const recommendedSections = Array.from(document.querySelectorAll('.propose__modules'));
const mainAreaSection = document.querySelector('.sneakers-area__modules');
export const rendererFilteredProducts = (filter) => {
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
    products.forEach((product) => {
        const box = document.createElement('div');
        box.innerHTML = buildProduct(product);
        mainAreaSection.appendChild(box);
    });
};
const buildProduct = ({ id, category, description, images, price, brand }) => {
    return `
    <div class="propose__modules--box" id="${id}" data-category="${category}">
        <img src="${images}" alt="vapormax">
            <div class="content">
                <p class="content__title">${brand}</p>
                <p class="content__subtitle">${description}</p>
                <div class="content__options">
                <p class="content__options--price">${price}$</p>
                <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
            </div>
        </div>
    </div>
`;
};
