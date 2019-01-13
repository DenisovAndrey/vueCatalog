<template>
	<div class="col-12 col-lg-9 col-xl-8">
		<div class="cartItem">
			<div class="cartItem__img">
				<img :src="cartItemInfo.img">
			</div>
			<div class="cartItem__info">
				<div class="cartItem__info_name"><span>Name:</span>{{ cartItemInfo.name }}</div>
				<div class="cartItem__info_price"><span>Price:</span>{{ cartItemInfo.price }}</div>
				<div class="cartItem__info_quantity">
					<span>Quantity:</span>
					<button @click='changeQuantity(-1)'>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="10px" height="10px"><path d="M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21  S39.776,16,37.059,16z" fill="#088d05"/></svg>
					</button> 
					{{ quantity }} 
					<button @click='changeQuantity(1)'>
						<svg height="10px" viewBox="0 0 448 448" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
					</button> 
				</div>
			</div>
			<button class="cartItem__delet" @click='removeItem()'>
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 348.333 348.334" style="enable-background:new 0 0 348.333 348.334;" xml:space="preserve"><g><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></g></svg>
			</button>
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
			const { elements } = store.getters;
			return elements.find(item => item.id === this.id);
		}
	},
	methods: {
		changeQuantity(increment){
			const { cartElements } = store.getters;

			const index = cartElements.findIndex(({ id }) => id === this.id);
			if (this.quantity !== 0 || increment === 1){
				store.dispatch('increaseQuantityOfElement', {increment, index});
			}
		},
		removeItem(){
			const { cartElements } = store.getters;
			const index = cartElements.findIndex(({ id }) => id === this.id);
			store.dispatch('removeItemOfCart', index);
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
	position: relative;
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
			margin: 5px 0;
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
	&__delet{
		border: none;
		background: none;
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		z-index: 10;
		fill: #777;
		outline: none !important;
	}
}
@media (max-width: 991px){
	.cartItem{
		&__img{
			img{
				height: 120px;
			}
		}
		&__info{
			padding-left: 15px;
			font-size: 18px;
			&_price{
				margin: 15px 0;
			}
			span{
				font-size: 16px;
			}
		}
	}
}
@media (max-width: 575px){
	.cartItem{
		flex-direction: column;
		&__img{
			padding-right: 0;
			border-right: none;
			text-align: center;
			padding-bottom: 15px;
			border-bottom: 1px solid #E1E1E1;
			margin-bottom: 15px;
			img{
				height: auto;
				width: 70%;
				max-width: 210px;
			}
		}
		&__info{
			font-size: 16px;
			&_price{
				margin: 5px 0;
			}
			span{
				font-size: 15px;
			}
		}
	}
}
</style>