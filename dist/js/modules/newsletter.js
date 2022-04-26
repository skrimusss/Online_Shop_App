const submitButton = document.querySelector('.submit-button');
export const newsletterLogic = () => {
    const checkValues = () => {
        class newsletterModules {
            constructor() {
                this.nameInput = document.querySelector('#name');
                this.emailInput = document.querySelector('#email');
                this.privacyInput = document.querySelector('#privacy-checkbox');
                this.error = document.querySelector('.error');
            }
        }
        const module = new newsletterModules;
        const name = module.nameInput.value;
        const email = module.emailInput.value;
        if (name === '' || email === '' || !module.privacyInput.checked) {
            module.error.style.display = 'flex';
        }
        else {
            module.error.style.display = 'none';
            module.nameInput.value = '';
            module.emailInput.value = '';
            module.privacyInput.checked = false;
        }
    };
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkValues();
    });
};
