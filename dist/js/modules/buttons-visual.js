export const buttonsElements = () => {
    const buttons = document.querySelectorAll('.select-options-content__sort-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            let circle = document.createElement('div');
            circle.classList.add('buttons-circles');
            buttons[i].appendChild(circle);
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            setTimeout(() => {
                circle.remove();
            }, 1500);
        });
    }
};
