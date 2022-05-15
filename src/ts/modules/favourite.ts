import { products } from './constants/products';
import { ProductInterface } from './constants/products';
import { rendererAllProducts } from './render-products';
import { getLS, saveInLS } from './storage/storage-utils.js';

const FAVS_LS = 'favs';

enum Elements {
	heart = "<i class='bx bx-heart'></i>",
	solidHeart = "<i class='bx bxs-heart'></i>",
	toggleButton = 'toggle-fav-button',
	favButton = '.image-box__button',
	product = '.propose__modules--box',
}

export const favButtonEffect = (itemID?: number) => {
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

function removeFromFav(node: HTMLButtonElement) {
	node.dataset.selected = 'false';
	node.innerHTML = Elements.heart;
	node.classList.remove(Elements.toggleButton);
	removeFromLS(getItemName(node));
}

function addToFav(node: HTMLButtonElement) {
	node.dataset.selected = 'true';
	node.innerHTML = Elements.solidHeart;
	node.classList.add(Elements.toggleButton);
	addToLS(getItemName(node));
}

function getItemName(node: HTMLButtonElement): string {
	return node.closest('.propose__modules--box').querySelector('.content__subtitle').innerHTML;
}

function removeFromLS(name: string) {
	const storage = getLS(FAVS_LS);
	storage.splice(name.indexOf(name));
	saveInLS(FAVS_LS, storage);
}

function addToLS(name: string) {
	const storage = getLS(FAVS_LS);
	storage.push(name);
	saveInLS(FAVS_LS, storage);
}
