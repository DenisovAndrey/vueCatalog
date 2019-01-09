<template>
	<div class="catalogCart">
		<div class="container">
			<div class="catalogCart__title">
				<h2>Shopping cart</h2>
				<router-link class="catalogCart__title_back" to="/">back to catalog</router-link>
			</div>
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
		}
	}
}
</script>

<style lang="scss">
	.catalogCart{
		&__title{
			margin-top: 20px;
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