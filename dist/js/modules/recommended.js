const arrowContainers = document.querySelectorAll('.propose__arrows-box');
export const recommendedLogic = () => {
    arrowContainers.forEach(arrowContainer => {
        class sliderModules {
            constructor() {
                this.rightButton = arrowContainer.querySelector('.right-button');
                this.leftButton = arrowContainer.querySelector('.left-button');
                this.scrollContent = arrowContainer.querySelector('.propose__modules');
            }
        }
        const module = new sliderModules;
        module.leftButton.addEventListener('click', () => {
            module.scrollContent.scrollLeft -= 750;
            module.leftButton.classList.add('toggle-buttons-animation');
            setTimeout(() => {
                module.leftButton.classList.remove('toggle-buttons-animation');
            }, 500);
        });
        module.rightButton.addEventListener('click', () => {
            module.scrollContent.scrollLeft += 750;
            module.rightButton.classList.add('toggle-buttons-animation');
            setTimeout(() => {
                module.rightButton.classList.remove('toggle-buttons-animation');
            }, 500);
        });
    });
};
