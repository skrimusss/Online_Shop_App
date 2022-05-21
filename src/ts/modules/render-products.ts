import { products, ProductInterface } from './constants/products.js';
import { Elements } from './constants/ProductElements.js';

export const rendererFilteredProducts = (filter: string) => {
    const recommendedSections = Array.from(document.querySelectorAll('.propose__modules'))
    let filteredProducts = products.filter(product => product.filter === filter)

    filteredProducts.forEach((product) => {
        const box = document.createElement('div')
        box.innerHTML = buildProduct(product);

        if (filter === 'shoes') {
            recommendedSections[0].appendChild(box)
        } else if (filter === 'clothes') {
            recommendedSections[1].appendChild(box)
        } else {
            recommendedSections[2].appendChild(box)
        }
    })
}

export const rendererAllProducts = () => {
    const mainAreaSection = document.querySelector('.sneakers-area__modules')

    products.forEach((product: ProductInterface) => {
        const box = document.createElement('div')
        box.innerHTML = buildProduct(product)
        mainAreaSection.appendChild(box)
    })
}

export const renderFavProducts = () => {
    const favArea = document.querySelector('.fav-item-list')
    const favButton: HTMLButtonElement = document.querySelector(Elements.favButton);

    products.forEach((product: ProductInterface) => {
        let box: HTMLDivElement

            if (favButton.dataset.selected === 'true') {
                box = document.createElement('div')
                box.classList.add('product-main-box')
                box.innerHTML = buildFavProduct(product)
                favArea.appendChild(box)
            }
    })
}

const buildProduct = ({id, category, description, images, price, brand}: ProductInterface) =>  {
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
    `
}

const buildFavProduct = ({id, category, description, images, price}: ProductInterface) =>  {
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
    `
}