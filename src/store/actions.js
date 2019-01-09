export const INCREASE_IN_QUANTITY = ({ commit }, indexInAddedItems) => {
	commit('INCREASE_IN_QUANTITY', indexInAddedItems);
}

export const ADD_ELEMENT_TO_CART_ARR = ({ commit }, addedElement) => {
	commit('ADD_ELEMENT_TO_CART_ARR', addedElement);
}

export const increaseInQuantityOfItem = ({ commit }, paramsOfIncrease) => {
	commit('INCREASE_IN_QUANTITY_OF_ITEM', paramsOfIncrease);
}
