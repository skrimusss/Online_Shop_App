import { getLS, saveInLS } from "./storage/storage-utils.js"
import { Elements } from "./constants/ProductElements.js"

const FAVS_LS = 'favs'

export const favButtonEffect = () => {
	const productArea = Array.from(document.querySelectorAll(Elements.product));

	for (let i = 0; i < productArea.length; i++) {
		class productElements {
			favButton: HTMLButtonElement = productArea[i].querySelector(Elements.favButton);
		}

		const module = new productElements();

		module.favButton.addEventListener('click', () => {
			if (module.favButton.dataset.selected === 'true') {
				removeFromFav(module.favButton);
			} else {
				addToFav(module.favButton);
			}
		});
	}
};

const removeFromFav = (node: HTMLButtonElement) => {
	node.dataset.selected = 'false';
	node.innerHTML = Elements.heart;
	node.classList.remove(Elements.toggleButton);
	removeFromLS(getItemName(node));
}

const addToFav = (node: HTMLButtonElement) => {
	node.dataset.selected = 'true';
	node.innerHTML = Elements.solidHeart;
	node.classList.add(Elements.toggleButton);
	addToLS(getItemName(node));
}

const getItemName = ((node: HTMLButtonElement): string => {
    return node.closest('.propose__modules--box').querySelector('.content__subtitle').innerHTML;
})

const removeFromLS = (name: string) => {
	const storage = getLS(FAVS_LS);
	storage.splice(name.indexOf(name));
	saveInLS(FAVS_LS, storage);
}

const addToLS = (name: string) => {
	const storage = getLS(FAVS_LS);
	storage.push(name);
	saveInLS(FAVS_LS, storage);
}