<template>
	<div class="catalogContainer">
		<div class="contianer">
			<div class="row">
				<CatalogItem />
			</div>
		</div>
	</div>
</template>

<script>
import CatalogItem from './CatalogItem';

export default {
	name: 'CatalogButtons',
	components: { CatalogItem }
}
</script>

<style lang='scss'>
.basketButton{
	margin-top: 20px;
	text-align: right;
	button{
		background: none;
		border: none;
	}
}
</style>

