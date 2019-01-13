import store from '@/store';

export const addElementsToLocalStore = () => {
	const { cartElements } = store.getters;
	localStorage.setItem('cartElements', JSON.stringify(cartElements));
}