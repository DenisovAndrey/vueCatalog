<template>
	<div class="col-12 col-md-10 col-lg-8">
		<div class="cartItem">
			<div class="cartItem__img">
				<img :src="cartItemInfo.img" class="d-none">
				<img src="@/assets/images/item1.jpg">
			</div>
			<div class="cartItem__info">
				<div>Наименование: {{ cartItemInfo.name }}</div>
				<div>Цена: {{ cartItemInfo.price }}</div>
				<div>Количество: {{ quantity }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';

export default {
	name: 'CatalogCartItem',
	props: {
		quantity: Number,
		id: Number
	},
	computed: {
		cartItemInfo() {
			const allElements = store.getters.elements;
			const indexInAllItems = allElements.findIndex(item => item.id === this.id);
			return allElements[indexInAllItems];
		}
	}
}
</script>

<style lang="scss">

</style>