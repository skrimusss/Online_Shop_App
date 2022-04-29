const texts: string[] = ['Best and newest shop with sneakers and clothes            ', 'Save 20% off your first order            ']
let count: number = 0
let index: number = 0
let currentText: string = ''
let letter: string = ''

export const type = () => {
    if (count === texts.length) {
        count = 0
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing-heading').textContent = letter
    if (letter.length === currentText.length) {
        count++
        index = 0
    }

    setTimeout(type, 50)
}