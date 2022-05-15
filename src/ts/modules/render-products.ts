import { products, ProductInterface } from './constants/products.js';
const recommendedSections = Array.from(document.querySelectorAll('.propose__modules'))
const mainAreaSection = document.querySelector('.sneakers-area__modules')

export const rendererFilteredProducts = (filter: string) => {
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
    products.forEach((product: ProductInterface) => {
        const box = document.createElement('div')
        box.innerHTML = buildProduct(product)
        mainAreaSection.appendChild(box)
    })
}

const renderFavProducts = (itemID: number) => {
    const favArea = document.querySelector('.fav-popup')

    const favProducts: ProductInterface[] = []
    const clickedProduct = products.find(product => product.id === itemID)
    favProducts.push(clickedProduct)

    products.forEach((product: ProductInterface) => {
        const box = document.createElement('div')
        box.innerHTML = buildFavProduct(product)
        favArea.appendChild(box)
        console.log('trybi')
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

const buildFavProduct = ({id, category, description, images, price, brand}: ProductInterface) =>  {
    return `
    <div>
    <p>
    kurwo
    </p>
    </div>
    `
}

const buttons = Array.from(document.querySelectorAll('.image-box__button'))

export const kurwo = () => {
    buttons.forEach(button => {
        const chuj = (itemID?: number) => {
            button.addEventListener('click', () => {
                renderFavProducts(itemID)
                console.log('chuj')
            })
        }
        chuj()
    })
    console.log(buttons)
}
