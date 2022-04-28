const scrollButton = document.querySelector('.scroll-top-button');
export const scrollButtonFunctions = () => {
    const checkPos = () => {
        if (document.documentElement.scrollTop <= 750) {
            scrollButton.classList.remove('toggle-scroll-button');
        }
        else {
            scrollButton.classList.add('toggle-scroll-button');
        }
    };
    scrollButton.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    });
    document.addEventListener('scroll', checkPos);
};
