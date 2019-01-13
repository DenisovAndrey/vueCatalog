import store from '@/store';

export const getters = {
	elements() {
		return store.state.elements;
	},
	cartElements() {
		return store.state.cartElements;
	}
}