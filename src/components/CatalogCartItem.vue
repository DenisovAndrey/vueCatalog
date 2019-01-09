<template>
	<div class="col-12 col-md-10 col-lg-8">
		<div class="cartItem">
			<div class="cartItem__img">
				<img :src="cartItemInfo.img">
			</div>
			<div class="cartItem__info">
				<div class="cartItem__info_name"><span>Name:</span>{{ cartItemInfo.name }}</div>
				<div class="cartItem__info_price"><span>Price:</span>{{ cartItemInfo.price }}</div>
				<div class="cartItem__info_quantity">
					<span>Quantity:</span>
					<button @click='changeQuantity(-1, id)'>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="10px" height="10px"><path d="M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21  S39.776,16,37.059,16z" fill="#088d05"/></svg>
					</button> 
					{{ quantity }} 
					<button @click='changeQuantity(1, id)'>
						<svg height="10px" viewBox="0 0 448 448" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
					</button> 
				</div>
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
	},
	methods: {
		changeQuantity(increment, id){
			console.log(this.quantity);
			const cartElements = store.getters.elementsAddedToCart;
			const indexInCartItems = cartElements.findIndex(item => item.id === id);
			store.dispatch('increaseInQuantityOfItem', {increment, indexInCartItems});
			// if (increment == 1){

			// }
		}
	}
}
</script>

<style lang="scss">
.cartItem{
	border: 2px solid #E1E1E1;
	margin-top: 30px;
	border-radius: 3px;
	padding: 15px;
	display: flex;
	flex-direction: row;
	&__img{
		border-right: 1px solid #E1E1E1;
		padding-right: 15px;
		img{
			height: 140px;
		}
	}
	&__info{
		padding-left: 25px;
		font-size: 20px;
		font-weight: bold;
		span{
			color: #000;
			font-size: 18px;
			margin-right: 5px
		}
		&_name{
			color: #DC831E;
		}
		&_price{
			color: #88D055;
			&:after{
				content: ' usd';
			}
		}
		&_quantity{
			span{
				margin-right: 10px;
			}
			button{
				background: none;
				border: none;
				outline: none !important;
				cursor: pointer;
				svg{
					fill: #088d05;
				}
			}
		}
	}
}
</style>