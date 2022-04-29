const texts = ['Best and newest shop with sneakers and clothes         '];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
export const type = () => {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing-heading').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 100);
};
