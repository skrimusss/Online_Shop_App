const arrowContainers = document.querySelectorAll('.propose__arrows-box')

export const recommendedLogic = () => {
    arrowContainers.forEach(arrowContainer => {
            class sliderModules {
                rightButton: HTMLButtonElement = arrowContainer.querySelector('.right-button')
                leftButton: HTMLButtonElement = arrowContainer.querySelector('.left-button')
                scrollContent: HTMLDivElement = arrowContainer.querySelector('.propose__modules')
            }

            const module = new sliderModules

            module.leftButton.addEventListener('click', () => {
                module.scrollContent.scrollLeft -= 750
            })
            module.rightButton.addEventListener('click', () => {
                module.scrollContent.scrollLeft += 750
            })

    })
}