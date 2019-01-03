<template>
	<div class="catalogMain">
		<CatalogButtons />
		<CatalogContianerItems />
	</div>
</template>



<script>
import CatalogButtons from './CatalogButtons'
import CatalogContianerItems from './CatalogContianerItems'

export default {
	name: 'CatalogMain',
	components: {
		CatalogButtons,
		CatalogContianerItems
	}
}
</script>


