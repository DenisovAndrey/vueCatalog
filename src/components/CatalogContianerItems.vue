<template>
	<div class="catalogContainer">
		<div class="container">
			<div class="row">
				<CatalogItem
					v-for="(element, key) in elements" 
					:key="key"
					:id="element.id" 
					:name="element.name" 
					:price="element.price"
					:img="element.img" />
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import CatalogItem from './CatalogItem';

export default {
	name: 'CatalogButtons',
	components: { CatalogItem },
	computed: {
		elements() {
			return store.getters.elements;
		}
	}
}
</script>

<style lang='scss'>
.catalogContainer{
	padding-top: 50px;
}
</style>

