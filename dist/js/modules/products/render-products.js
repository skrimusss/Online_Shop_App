import { products } from './products.js';
const recommendedSections = Array.from(document.querySelectorAll('.propose__modules'));
export const rendererLogic = (filter) => {
    const filteredProducts = products.filter(product => product.filter === filter);
    filteredProducts.forEach(product => {
        const box = document.createElement('div');
        box.innerHTML = `
            <div class="propose__modules--box" id="${product.id}" data-category="${product.category}">
                <img src="${product.images}" alt="vapormax">
                    <div class="content">
                        <p class="content__title">${product.brand}</p>
                        <p class="content__subtitle">${product.description}</p>
                        <div class="content__options">
                        <p class="content__options--price">${product.price}$</p>
                        <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        `;
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
