export const INCREASE_IN_QUANTITY = (state, indexInAddedItems) => {
	state.elementsAddedToCart[indexInAddedItems].quantity++;
}

export const ADD_ELEMENT_TO_CART_ARR = (state, addedElement) => {
	state.elementsAddedToCart.unshift(addedElement);
}

export const INCREASE_IN_QUANTITY_OF_ITEM = (state, paramsOfIncrease) => {
	state.elementsAddedToCart[paramsOfIncrease.indexInCartItems].quantity += paramsOfIncrease.increment;
}