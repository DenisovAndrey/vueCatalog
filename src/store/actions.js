import { addElementsToLocalStore } from '@/helpers.js';

export const addElementToCart = ({ commit }, addedElement) => {
	commit('ADD_ELEMENT_TO_CART', addedElement);
	addElementsToLocalStore();
}

export const increaseQuantityOfElement = ({ commit }, paramsOfIncrease) => {
	commit('INCREASE_QUANTITY_OF_ELEMENT', paramsOfIncrease);
	addElementsToLocalStore();
}

export const removeItemOfCart = ({ commit }, indexInCartItems) => {
	commit('REMOVE_ITEM_OF_CART', indexInCartItems);
	addElementsToLocalStore();
}