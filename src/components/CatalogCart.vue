<template>
	<div class="catalogCart">
		<div class="container">
			<div class="catalogCart__title">
				<h2>Shopping basket</h2>
				<router-link class="catalogCart__title_back" to="/">back to catalog</router-link>
			</div>
			<div class="row">
				<div class="col-12 col-md-10 col-lg-8"></div>
			</div>
		</div>
	</div>
</template>



<script>
export default {
	name: 'CatalogCart'
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
			a{
				color: #DC831E;
				font-size: 20px;
				text-transform: uppercase;
			}
		}
	}
</style>