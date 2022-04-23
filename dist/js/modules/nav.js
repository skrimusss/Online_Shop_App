const navOpenButtonElement = document.querySelector('.nav__menu-button');
const navCloseButtonElement = document.querySelector('.nav__modules--header');
let background;
const nav = document.querySelector('.nav');
export const navLogic = () => {
    const navToggle = () => {
        if (nav.getAttribute('aria-expanded') === 'false') {
            nav.classList.add('opened-nav');
            nav.setAttribute('aria-expanded', 'true');
            navOpenButtonElement.innerHTML = '<i class="uil uil-times"></i>';
            renderClickArea();
            navOpenButtonElement.classList.add('nav-buttons-animation');
        }
        else {
            nav.classList.remove('opened-nav');
            nav.setAttribute('aria-expanded', 'false');
            navOpenButtonElement.innerHTML = '<i class="uil uil-bars"></i>';
            removeClickArea();
            navOpenButtonElement.classList.remove('nav-buttons-animation');
        }
    };
    const renderClickArea = () => {
        background = document.createElement('div');
        background.classList.add('background-click-area');
        document.body.appendChild(background);
        background.style.opacity = '1';
        background.addEventListener('click', () => {
            navToggle();
        });
    };
    const removeClickArea = () => {
        background.remove();
    };
    navOpenButtonElement.addEventListener('click', navToggle);
    navCloseButtonElement.addEventListener('click', navToggle);
};
