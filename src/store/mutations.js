export const ADD_ELEMENT_TO_CART = (state, addedElement) => {
	state.cartElements.unshift(addedElement);
}

export const INCREASE_QUANTITY_OF_ELEMENT = (state, paramsOfIncrease) => {
	state.cartElements[paramsOfIncrease.index].quantity += paramsOfIncrease.increment;
}

export const REMOVE_ITEM_OF_CART = (state, indexInCartItems) => {
	state.cartElements.splice(indexInCartItems, 1);
}