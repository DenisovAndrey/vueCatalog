<template>
	<div class="catalogCart">
		<div class="container">
			<div class="catalogCart__title">
				<h2>Shopping cart</h2>
				<router-link class="catalogCart__title_back" to="/">back to catalog</router-link>
			</div>
			<div class="catalogCart__totalCost">{{ totalCost }}</div>
			<div class="row">
				<CatalogCartItem 
					v-for="(cartItem, key) in cartItems" 
					:key="key"
					:id="cartItem.id" 
					:quantity="cartItem.quantity" />
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import CatalogCartItem from './CatalogCartItem';

export default {
	name: 'CatalogCart',
	components: { CatalogCartItem },
	computed: {
		cartItems() {
			return store.getters.elementsAddedToCart;
		},
		totalCost() {
			let totalCost = 0;
			const cartElements = store.getters.elementsAddedToCart;
			if (cartElements.length == 0){
				return 'There is nothing in the shopping cart';
			}
			const allElementsOfCatalog = store.getters.elements;
			cartElements.forEach((item) => {
				const price = allElementsOfCatalog[allElementsOfCatalog.findIndex(itemOfCatalog => itemOfCatalog.id === item.id)].price;
				totalCost += item.quantity * price;
			});
			return `Total cost: ${totalCost} usd`;
		}
	},
	destroyed: () => {
		const cartElements = store.getters.elementsAddedToCart;
		cartElements.forEach((item, index) => {
			if (item.quantity === 0) {
				store.dispatch('removeItemOfCart', index);
			}
		});
	}
}
</script>

<style lang="scss">
	.catalogCart{
		padding-top: 20px;
		padding-bottom: 50px;
		&__title{
			flex-wrap: wrap;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			color: #91DC5A;
			margin-bottom: 50px;
			a{
				color: #DC831E;
				font-size: 20px;
				text-transform: uppercase;
			}
		}
	}
</style>