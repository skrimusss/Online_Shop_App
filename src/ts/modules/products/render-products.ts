import { products } from './products.js';
import { ProductInterface } from './products.js';

const recommendedSection1 = document.querySelector('.propose1')

export const rendererLogic = () => {
    const render = () => {
        products.map(product => {
                class productModules {
                    id: number = product.id
                    price: number = product.price
                    description: string = product.description
                    category: string = product.category
                    brand: string = product.brand
                    images: string[] = product.images
                }

                const module = new productModules

                const productsHtml = () => {
                    // sneakers
                    const product1 = `
                        <div class="propose__modules--box" id="${module.id[0]}" data-category="${module.category[0]}">
                        <img src="${module.images[0]}" alt="vapormax">

                        <div class="content">
                        <p class="content__title">${module.brand[0]}</p>
                        <p class="content__subtitle">${module.description[0]}</p>
                        <div class="content__options">
                        <p class="content__options--price">${module.price[0]}</p>
                        <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                        </div>
                        </div>
                        </div>
                    `
                    const product2 = `
                        <div class="propose__modules--box" id="${module.id[1]}" data-category="${module.category[1]}">
                            <img src="${module.images[1]}" alt="vapormax">

                            <div class="content">
                                <p class="content__title">${module.brand[1]}</p>
                                <p class="content__subtitle">${module.description[1]}</p>
                                <div class="content__options">
                                <p class="content__options--price">${module.price[1]}</p>
                                <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                </div>
                                </div>
                        </div>
                    `
                    const product3 = `
                        <div class="propose__modules--box" id="${module.id[2]}" data-category="${module.category[2]}">
                            <img src="${module.images[2]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[2]}</p>
                                <p class="content__subtitle">${module.description[2]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[2]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product4 = `
                        <div class="propose__modules--box" id="${module.id[3]}" data-category="${module.category[3]}">
                        <img src="${module.images[3]}" alt="vapormax">

                        <div class="content">
                                <p class="content__title">${module.brand[3]}</p>
                                <p class="content__subtitle">${module.description[3]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[3]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                </div>
                                </div>
                                </div>
                    `
                    const product5 = `
                    <div class="propose__modules--box" id="${module.id[4]}" data-category="${module.category[4]}">
                            <img src="${module.images[4]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[4]}</p>
                                <p class="content__subtitle">${module.description[4]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[4]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product6 = `
                        <div class="propose__modules--box" id="${module.id[5]}" data-category="${module.category[5]}">
                            <img src="${module.images[5]}" alt="vapormax">

                            <div class="content">
                                <p class="content__title">${module.brand[5]}</p>
                                <p class="content__subtitle">${module.description[5]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[5]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                </div>
                            </div>
                            </div>
                    `
                    const product7 = `
                    <div class="propose__modules--box" id="${module.id[6]}" data-category="${module.category[6]}">
                            <img src="${module.images[6]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[6]}</p>
                                <p class="content__subtitle">${module.description[6]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[6]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `

                    const sneakersArr = [product1, product2, product3, product4, product5, product6, product7]

                    sneakersArr.map(product => {
                        // recommendedSection1.innerHTML = product
                        console.log(product.innerHTML);
                    })
                }
            productsHtml()
        })
    }
    render()
}