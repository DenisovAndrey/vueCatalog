<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import store from '@/store';
export default {
	name: 'app',
	mounted() {
		const cartElements = JSON.parse(localStorage.getItem('cartElements'));
		if(cartElements && cartElements.length > 0) {
			cartElements.forEach((item) => {
				if(item.quantity !== 0){
					store.dispatch('addElementToCart', item);
				}
			});
		}
	}
}

</script>
