<template>
	<div class="col-12 col-md-4 col-lg-3">
		<div class="catalogItem">
			<div class="catalogItem__img">
				<img :src="img" class="d-none">
				<img src="@/assets/images/item1.jpg">
			</div>
			<div class="catalogItem__name">{{ name }}</div>
			<div class="catalogItem__price">{{ price }}</div>
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
			const elements = store.getters.elements;
			const elementsAddedToCart = store.getters.elementsAddedToCart;
			const indexInAddedItems = elementsAddedToCart.findIndex(addedElement => addedElement.id === id);
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
				width: 80%;
			}
		}
		&__name{
			margin-top: 20px;
			font-weight: bold;
			font-family: sans-serif;
			text-transform: uppercase;
			font-size: 22px;
		}
		&__price{
			color: #B4DC97;
			font-size: 20px;
			font-weight: bold;
			&:after{
				content: ' usd'
			}
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
</style>