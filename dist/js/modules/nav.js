const navOpenButtonElement = document.querySelector('.account-nav__menu-button');
const navCloseButtonElement = document.querySelector('.hide-nav-button');
let backgroundAreaElement = document.querySelector('.background-click-area');
const navLinksElements = Array.from(document.querySelectorAll('.nav__modules--link'));
const navElement = document.querySelector('.nav');
const themeButtonElement = document.querySelector('.theme-button');
const themeCircleElement = document.querySelector('.theme-button--circle');
const accordionElements = Array.from(document.querySelectorAll('.accordion'));
const loginPopupElement = document.querySelector('.login-popup');
const userLinkElement = document.querySelector('.user-link');
const userToFavButtonElement = document.querySelector('.login-popup__buttons--fav-button ');
const userToCartButtonElement = document.querySelector('.login-popup__buttons--cart-button ');
const favLinkElement = document.querySelector('.fav-link');
const favPopupElement = document.querySelector('.fav-popup');
const favButtonElement = document.querySelector('.fav-popup__button');
const cartPopupElement = document.querySelector('.cart-popup');
const cartLinkElement = document.querySelector('.cart-link');
const cartPopupButton = document.querySelector('.cart-popup__button');
export const navLogic = () => {
    const navFunctions = () => {
        const removeNavProperties = () => {
            navElement.classList.remove('opened-nav');
            navElement.setAttribute('aria-expanded', 'false');
            backgroundAreaElement.style.display = 'none';
        };
        const removeUserPopupProperties = () => {
            loginPopupElement.classList.remove('toggle-popup');
            loginPopupElement.setAttribute('aria-expanded', 'false');
            backgroundAreaElement.style.display = 'none';
        };
        const removeFavPopupProperties = () => {
            favPopupElement.classList.remove('toggle-popup');
            favPopupElement.setAttribute('aria-expanded', 'false');
            backgroundAreaElement.style.display = 'none';
        };
        const removeCartPopupProperties = () => {
            cartPopupElement.classList.remove('toggle-popup');
            cartPopupElement.setAttribute('aria-expanded', 'false');
            backgroundAreaElement.style.display = 'none';
        };
        const addNavProperties = () => {
            navElement.classList.add('opened-nav');
            navElement.setAttribute('aria-expanded', 'true');
            backgroundAreaElement.style.display = 'flex';
        };
        const navToggle = () => {
            if (navElement.getAttribute('aria-expanded') === 'false') {
                addNavProperties();
            }
            else {
                removeNavProperties();
            }
            backgroundAreaElement.addEventListener('click', () => {
                removeNavProperties();
            });
        };
        const chooseNavLogic = () => {
            const removeNavByLinks = () => {
                navLinksElements.forEach(link => {
                    link.addEventListener('click', () => {
                        navToggle();
                    });
                });
            };
            const toggleTheme = () => {
                if (document.body.getAttribute('data-theme') === 'dark') {
                    document.body.setAttribute('data-theme', 'light');
                    themeCircleElement.classList.add('toggle-theme-circle');
                }
                else {
                    document.body.setAttribute('data-theme', 'dark');
                    themeCircleElement.classList.remove('toggle-theme-circle');
                }
            };
            const accordions = () => {
                accordionElements.forEach(accordion => {
                    class accordionModules {
                        constructor() {
                            this.header = accordion.querySelector('.accordion__header');
                            this.content = accordion.querySelector('.accordion__content');
                            this.arrow = accordion.querySelector('.accordion__header--arrow');
                        }
                    }
                    const module = new accordionModules;
                    module.content.style.maxHeight = module.content.scrollHeight + 'px';
                    const addProperties = () => {
                        module.arrow.style.transform = 'rotate(180deg)';
                        module.content.style.maxHeight = module.content.scrollHeight + 'px';
                    };
                    const removeProperties = () => {
                        module.arrow.style.transform = 'rotate(0)';
                        module.content.style.maxHeight = '0';
                    };
                    module.header.addEventListener('click', () => {
                        if (accordion.getAttribute('aria-expanded') === 'true') {
                            accordion.setAttribute('aria-expanded', 'false');
                            addProperties();
                        }
                        else {
                            accordion.setAttribute('aria-expanded', 'true');
                            removeProperties();
                        }
                    });
                });
            };
            navOpenButtonElement.addEventListener('click', () => {
                removeFavPopupProperties();
                removeUserPopupProperties();
                removeCartPopupProperties();
                navToggle();
            });
            navCloseButtonElement.addEventListener('click', navToggle);
            themeButtonElement.addEventListener('click', toggleTheme);
            accordions();
            removeNavByLinks();
        };
        const userNavLogic = () => {
            const addUserPopupProperties = () => {
                loginPopupElement.classList.add('toggle-popup');
                loginPopupElement.setAttribute('aria-expanded', 'true');
                backgroundAreaElement.style.display = 'flex';
            };
            const addFavPopupProperties = () => {
                favPopupElement.classList.add('toggle-popup');
                favPopupElement.setAttribute('aria-expanded', 'true');
                backgroundAreaElement.style.display = 'flex';
            };
            const toggleUserPopup = () => {
                if (loginPopupElement.getAttribute('aria-expanded') === 'false') {
                    addUserPopupProperties();
                }
                else {
                    removeUserPopupProperties();
                }
            };
            const toggleFavPopup = () => {
                if (favPopupElement.getAttribute('aria-expanded') === 'false') {
                    addFavPopupProperties();
                }
                else {
                    removeFavPopupProperties();
                }
            };
            const addCartPopupProperties = () => {
                cartPopupElement.classList.add('toggle-popup');
                cartPopupElement.setAttribute('aria-expanded', 'true');
                backgroundAreaElement.style.display = 'flex';
            };
            const toggleCartPopup = () => {
                if (cartPopupElement.getAttribute('aria-expanded') === 'false') {
                    addCartPopupProperties();
                }
                else {
                    removeCartPopupProperties();
                }
            };
            userLinkElement.addEventListener('click', () => {
                removeNavProperties();
                removeFavPopupProperties();
                removeCartPopupProperties();
                toggleUserPopup();
            });
            userToFavButtonElement.addEventListener('click', () => {
                removeUserPopupProperties();
                addFavPopupProperties();
            });
            userToCartButtonElement.addEventListener('click', () => {
                removeUserPopupProperties();
                addCartPopupProperties();
            });
            favLinkElement.addEventListener('click', () => {
                removeUserPopupProperties();
                removeNavProperties();
                removeCartPopupProperties();
                toggleFavPopup();
            });
            favButtonElement.addEventListener('click', () => {
                removeFavPopupProperties();
                navToggle();
            });
            cartPopupButton.addEventListener('click', () => {
                removeCartPopupProperties();
                navToggle();
            });
            cartLinkElement.addEventListener('click', () => {
                removeUserPopupProperties();
                removeFavPopupProperties();
                removeNavProperties();
                toggleCartPopup();
            });
            backgroundAreaElement.addEventListener('click', () => {
                removeFavPopupProperties();
                removeUserPopupProperties();
                removeCartPopupProperties();
            });
        };
        chooseNavLogic();
        userNavLogic();
    };
    navFunctions();
};
