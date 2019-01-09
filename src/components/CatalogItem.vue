<template>
	<div class="col-12 col-sm-6 col-md-4 col-xl-3">
		<div class="catalogItem">
			<div class="catalogItem__img">
				<img :src="img" >
			</div>
			<div class="catalogItem__name">{{ name }}</div>
			<div class="catalogItem__price">{{ price }} usd</div>
			<div class="catalogItem__add">
				<button @click='addToCart(id)'>add to cart</button>
			</div>
		</div>
	</div>
</template>

<script>
import { addElementToCart } from '@/helpers.js';
import store from '@/store';

export default {
	name: 'CatalogItem',
	props: {
		name: String,
		price: Number,
		img: String,
		id: Number
	},
	methods: {
		addToCart(id){
			const addedElement = addElementToCart(id);
			const elementsAddedToCart = store.getters.elementsAddedToCart;
			const indexInAddedItems = elementsAddedToCart.findIndex(elementAddedToCart => elementAddedToCart.id === id);
			if (indexInAddedItems === -1){
				store.dispatch('ADD_ELEMENT_TO_CART_ARR', addedElement)
			} else {
				store.dispatch('INCREASE_IN_QUANTITY', indexInAddedItems);
			}
		}
	}
}
</script>

<style lang='scss'>
.catalogItem{
	border: #D5D5D5 3px solid;
	border-radius: 8px;
	padding: 20px;
	margin-top: 30px;
	&__img{
		text-align: center;
		border-bottom: 1px solid #D5D5D5;
		padding-bottom: 10px;
		img{
			height: 176px;
		}
	}
	&__name{
		margin-top: 20px;
		height: 55px;
		font-weight: bold;
		font-family: sans-serif;
		font-size: 20px;
		color: #DC831E;
		margin-bottom: 5px;
		line-height: 25px;
	}
	&__price{
		color: #B4DC97;
		font-size: 20px;
		font-weight: bold;
	}
	&__add{
		text-align: right;
		margin-top: 20px;
		button{
			background: #D5D5D5;
			border: none;
			border-radius: 3px;
			color: #fff;
			text-transform: uppercase;
			cursor: pointer;
			transition: 0.3s;
			font-size: 15px;
			&:hover{
				background: #91DC5A;
			}
		}
	}
}
@media (max-width: 991px){
	.catalogItem{
		&__name{
			line-height: normal;
			font-size: 18px;
			height: 42px;
		}
		&__img{
			img{
				height: 140px;
			}
		}
	}
}
</style>