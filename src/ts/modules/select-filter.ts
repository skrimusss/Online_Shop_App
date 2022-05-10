import { products } from "./constants/products"
import { ProductInterface } from "./constants/products"
import { Datasets } from './../../../dist/js/modules/types/enums';

const selectBoxes = Array.from(document.querySelectorAll('.select-options__modules--select-box'))
const buttons = Array.from(document.querySelectorAll('.select-options-content__sort-button'))
const sortButtons = Array.from(document.querySelectorAll('.sorting-filters-buttons'))

export const selectFiltersLogic = () => {
    const accordions = () => {
            selectBoxes.forEach(selectBox => {
                class selectBoxModules {
                    header: HTMLButtonElement = selectBox.querySelector('.select-options-header__button')
                    content: HTMLDivElement = selectBox.querySelector('.select-options-content')
                    arrow: HTMLParagraphElement = selectBox.querySelector('.select-options-header__button--arrow')
                }

                const module = new selectBoxModules

                let dataSet: string = module.content.dataset.expanded

                const addProperties = () => {
                    dataSet = 'true'
                    module.content.style.maxHeight = '35rem'
                    module.arrow.style.transform = 'rotate(0)'
                }

                const removeProperties = () => {
                    dataSet = 'false'
                    module.content.style.maxHeight = '0'
                    module.arrow.style.transform = 'rotate(180deg)'
                }

                const toggleAccordion = () => {
                    if (dataSet === 'false') {
                        addProperties()
                    } else {
                        removeProperties()
                    }
                }

                module.header.addEventListener('click', () => {
                toggleAccordion()
                console.log('kurwo')
            })
        })
    }

    const toggleFilters = () => {
        for (let i = 0; i < sortButtons.length; i++) {
            sortButtons[i].addEventListener('click', () => {
                sortButtons.forEach(button => {
                    button.classList.remove('active-button')
                    button.innerHTML = button.textContent
                })

                if (sortButtons[i].classList.contains('active-button')) {
                    sortButtons[i].classList.add('active-button')
                    sortButtons[i].innerHTML = sortButtons[i].innerHTML + '<i class="uil uil-check"></i>'
                } else {
                    sortButtons[i].classList.remove('active-button')
                    sortButtons[i].innerHTML = sortButtons[i].textContent
                }
            })
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                if (!buttons[i].classList.contains('active-button')) {
                    buttons[i].classList.add('active-button')
                    buttons[i].innerHTML = buttons[i].innerHTML + '<i class="uil uil-check"></i>'
                } else {
                    buttons[i].classList.remove('active-button')
                    buttons[i].innerHTML = buttons[i].textContent
                }
            })
        }
    }

    // const sorting = () => {
    //     products.map(product => {
    //         let filtered = products.filter(({brand}: ProductInterface) => {
    //             product.brand === brand
    //         })

    //         filtered.forEach(() => {
    //             let brandData = product.brand

    //             buttons.forEach((button: HTMLButtonElement) => {
    //                 button.addEventListener('click', () => {
    //                     if (button[1].dataset.brand === 'Nike sportswear') {
    //                         return product[1].style.visibility = 'hidden'
    //                     }
    //                 })

    //             })
    //         })
    //     })
    // }

    // sorting()
    accordions()
    toggleFilters()
}