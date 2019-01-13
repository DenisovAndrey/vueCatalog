<template>
	<div class="catalogCart">
		<div class="container">
			<div class="catalogCart__title">
				<h2>Shopping cart</h2>
				<router-link class="catalogCart__title_back" to="/">back to catalog</router-link>
			</div>
			<div class="catalogCart__totalCost" v-html="totalCost"></div>
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
			return store.getters.cartElements;
		},
		totalCost() {
			let totalCost = 0;

			const { cartElements } = store.getters;
			const { elements } = store.getters;
			if (cartElements.length === 0) {
				return 'There is nothing in the shopping cart';
			}

			cartElements.forEach((item) => {
				const price = elements.find(({id}) => id === item.id).price;
				totalCost += item.quantity * price;
			});

			return `Total cost: <span>${totalCost} usd </span>`;
		}
	},
	destroyed() {
		const { cartElements } = store.getters;
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
			margin-bottom: 20px;
			a{
				color: #DC831E;
				font-size: 20px;
				text-transform: uppercase;
			}
		}
		&__totalCost{
			margin-bottom: 50px;
			font-size: 20px;
			color: #aaa;
			line-height: 22px;
			span{
				color: #DC831E;
				font-weight: bold;
			}
		}
	}
</style>