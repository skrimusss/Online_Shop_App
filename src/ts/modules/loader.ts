export const loader = () => {
    const load: HTMLDivElement = document.querySelector('.loader')

    setTimeout(() => {
        load.style.opacity = '0'
        load.style.visibility = 'hidden'
    }, 1000);
}