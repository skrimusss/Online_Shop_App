const selectBoxes = Array.from(document.querySelectorAll('.select-options__modules--select-box'));
const buttons = Array.from(document.querySelectorAll('.select-options-content__sort-button'));
const sortButtons = Array.from(document.querySelectorAll('.sorting-filters-buttons'));
export const selectFiltersLogic = () => {
    const accordions = () => {
        selectBoxes.forEach(selectBox => {
            class selectBoxModules {
                constructor() {
                    this.header = selectBox.querySelector('.select-options-header__button');
                    this.content = selectBox.querySelector('.select-options-content');
                    this.arrow = selectBox.querySelector('.select-options-header__button--arrow');
                }
            }
            const module = new selectBoxModules;
            let dataSet = module.content.dataset.expanded;
            const addProperties = () => {
                dataSet = 'true';
                module.content.style.maxHeight = '30rem';
                module.arrow.style.transform = 'rotate(0)';
            };
            const removeProperties = () => {
                dataSet = 'false';
                module.content.style.maxHeight = '0';
                module.arrow.style.transform = 'rotate(180deg)';
            };
            const toggleAccordion = () => {
                if (dataSet === 'false') {
                    addProperties();
                }
                else {
                    removeProperties();
                }
            };
            module.header.addEventListener('click', () => {
                toggleAccordion();
                console.log('kurwo');
            });
        });
    };
    const toggleFilters = () => {
        for (let i = 0; i < sortButtons.length; i++) {
            sortButtons[i].addEventListener('click', () => {
                sortButtons.forEach(button => {
                    button.classList.remove('active-button');
                    button.innerHTML = button.textContent;
                });
                if (sortButtons[i].classList.contains('active-button')) {
                    sortButtons[i].classList.add('active-button');
                    sortButtons[i].innerHTML = sortButtons[i].innerHTML + '<i class="uil uil-check"></i>';
                }
                else {
                    sortButtons[i].classList.remove('active-button');
                    sortButtons[i].innerHTML = sortButtons[i].textContent;
                }
            });
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                if (!buttons[i].classList.contains('active-button')) {
                    buttons[i].classList.add('active-button');
                    buttons[i].innerHTML = buttons[i].innerHTML + '<i class="uil uil-check"></i>';
                }
                else {
                    buttons[i].classList.remove('active-button');
                    buttons[i].innerHTML = buttons[i].textContent;
                }
            });
        }
    };
    accordions();
    toggleFilters();
};
