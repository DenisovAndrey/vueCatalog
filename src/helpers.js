import store from '@/store';


export const addElementToCart = id => {
	return {
		id: id,
		quantity: 1
	}
};