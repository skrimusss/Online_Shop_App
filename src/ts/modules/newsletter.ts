const submitButton: HTMLButtonElement = document.querySelector('.submit-button')

export const newsletterLogic = () => {
    const checkValues = () => {
        class newsletterModules {
            nameInput: HTMLInputElement = document.querySelector('#name')
            emailInput: HTMLInputElement = document.querySelector('#email')
            privacyInput: HTMLInputElement = document.querySelector('#privacy-checkbox')
            error:HTMLButtonElement = document.querySelector('.error')
        }
        const module = new newsletterModules

        const name = module.nameInput.value
        const email = module.emailInput.value

        if (!name || !email || !module.privacyInput.checked) {
            module.error.style.display = 'flex'
        } else {
            module.error.style.display = 'none'
            module.nameInput.value = ''
            module.emailInput.value = ''
            module.privacyInput.checked = false
        }
    }
    submitButton.addEventListener('click', (e: Event) => {
        e.preventDefault()

        checkValues()
    })
}