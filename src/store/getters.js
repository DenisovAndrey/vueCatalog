import store from '@/store';

export const getters = {
	elements() {
		return store.state.elements;
	},
	elementsAddedToCart() {
		return store.state.elementsAddedToCart;
	}
}