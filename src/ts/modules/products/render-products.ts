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
                    // clothes
                    const product8 = `
                    <div class="propose__modules--box" id="${module.id[7]}" data-category="${module.category[7]}">
                            <img src="${module.images[7]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[7]}</p>
                                <p class="content__subtitle">${module.description[7]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[7]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product9 = `
                    <div class="propose__modules--box" id="${module.id[8]}" data-category="${module.category[8]}">
                            <img src="${module.images[8]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[8]}</p>
                                <p class="content__subtitle">${module.description[8]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[8]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product10 = `
                    <div class="propose__modules--box" id="${module.id[9]}" data-category="${module.category[9]}">
                            <img src="${module.images[9]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[9]}</p>
                                <p class="content__subtitle">${module.description[9]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[9]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product11 = `
                    <div class="propose__modules--box" id="${module.id[10]}" data-category="${module.category[10]}">
                            <img src="${module.images[10]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[10]}</p>
                                <p class="content__subtitle">${module.description[10]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[10]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product12 = `
                    <div class="propose__modules--box" id="${module.id[11]}" data-category="${module.category[11]}">
                            <img src="${module.images[11]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[11]}</p>
                                <p class="content__subtitle">${module.description[11]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[11]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product13 = `
                    <div class="propose__modules--box" id="${module.id[12]}" data-category="${module.category[12]}">
                            <img src="${module.images[12]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[12]}</p>
                                <p class="content__subtitle">${module.description[12]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[12]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product14 = `
                    <div class="propose__modules--box" id="${module.id[13]}" data-category="${module.category[13]}">
                            <img src="${module.images[13]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[13]}</p>
                                <p class="content__subtitle">${module.description[13]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[13]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product15 = `
                    <div class="propose__modules--box" id="${module.id[14]}" data-category="${module.category[14]}">
                            <img src="${module.images[14]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[14]}</p>
                                <p class="content__subtitle">${module.description[14]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[14]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product16 = `
                    <div class="propose__modules--box" id="${module.id[15]}" data-category="${module.category[15]}">
                            <img src="${module.images[15]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[15]}</p>
                                <p class="content__subtitle">${module.description[15]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[15]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product17 = `
                    <div class="propose__modules--box" id="${module.id[16]}" data-category="${module.category[16]}">
                            <img src="${module.images[16]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[16]}</p>
                                <p class="content__subtitle">${module.description[16]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[16]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product18 = `
                    <div class="propose__modules--box" id="${module.id[17]}" data-category="${module.category[17]}">
                            <img src="${module.images[17]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[17]}</p>
                                <p class="content__subtitle">${module.description[17]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[17]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product19 = `
                    <div class="propose__modules--box" id="${module.id[18]}" data-category="${module.category[18]}">
                            <img src="${module.images[18]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[18]}</p>
                                <p class="content__subtitle">${module.description[18]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[18]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product20 = `
                    <div class="propose__modules--box" id="${module.id[19]}" data-category="${module.category[19]}">
                            <img src="${module.images[19]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[19]}</p>
                                <p class="content__subtitle">${module.description[19]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[19]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product21 = `
                    <div class="propose__modules--box" id="${module.id[20]}" data-category="${module.category[20]}">
                            <img src="${module.images[20]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[20]}</p>
                                <p class="content__subtitle">${module.description[20]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[20]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product22 = `
                    <div class="propose__modules--box" id="${module.id[21]}" data-category="${module.category[21]}">
                            <img src="${module.images[21]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[21]}</p>
                                <p class="content__subtitle">${module.description[21]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[21]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `
                    const product23 = `
                    <div class="propose__modules--box" id="${module.id[22]}" data-category="${module.category[22]}">
                            <img src="${module.images[22]}" alt="vapormax">

                            <div class="content">
                            <p class="content__title">${module.brand[22]}</p>
                                <p class="content__subtitle">${module.description[22]}</p>
                                <div class="content__options">
                                    <p class="content__options--price">${module.price[22]}</p>
                                    <button class="content__options--add-cart"><i class="uil uil-shopping-cart-alt"></i> Add to cart</button>
                                    </div>
                            </div>
                            </div>
                    `

                    const sneakersArr = [product1, product2, product3, product4, product5, product6, product7]

                    const clothesArr = [product8, product9, product10, product11, product12, product13, product14, product15, product16]

                    const capArr = [product17, product18, product19, product20, product21, product22, product23]
                }
            productsHtml()
        })
    }
    render()
}