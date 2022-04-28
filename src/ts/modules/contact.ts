const contact: HTMLElement = document.querySelector('.contact')
const contactNavLink = document.querySelector('.contact-nav-link')
const contactHideButton: HTMLDivElement = document.querySelector('.contact__hide-button')
const contactSubmitButton: HTMLButtonElement = document.querySelector('.contact-submit-button')
const nameInput: HTMLInputElement = document.querySelector('#contact-name')
const descriptionInput: HTMLTextAreaElement = document.querySelector('#contact-text')
const contactError: HTMLParagraphElement = document.querySelector('.contact-error')
const contactPrivacy: HTMLInputElement = document.querySelector('#contact-privacy-checkbox')

export const toggleContact = () => {
    if (contact.getAttribute('aria-expanded') === 'false') {
        contact.classList.add('toggle-contact')
        contact.setAttribute('aria-expanded', 'true')
    } else {
        contact.classList.remove('toggle-contact')
        contact.setAttribute('aria-expanded', 'false')
    }
}

export const contactLogic = () => {
    contactNavLink.addEventListener('click', () => {
        toggleContact()
    })
    contactHideButton.addEventListener('click', () => {
        toggleContact()
    })

    const checkForm = () => {
        if (nameInput.value === '' || descriptionInput.value === '' || !contactPrivacy.checked) {
            contactError.style.display = 'flex'
        } else {
            contactError.style.display = 'none'
            contactPrivacy.checked = false
            nameInput.value = ''
            descriptionInput.value = ''
            toggleContact()
        }
    }

    contactSubmitButton.addEventListener('click', (e: Event) => {
        e.preventDefault()
        checkForm()
    })
}