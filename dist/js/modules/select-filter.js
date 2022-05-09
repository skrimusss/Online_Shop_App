const selectBoxes = Array.from(document.querySelectorAll('.select-options__modules--select-box'));
const filterContent = Array.from(document.querySelectorAll('.select-options-content'));
const buttons = Array.from(document.querySelectorAll('.select-options-content__sort-button'));
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
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                buttons[i].classList.toggle('active-button');
            });
        }
    };
    accordions();
    toggleFilters();
};
