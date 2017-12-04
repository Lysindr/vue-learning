<template>
	<div class="product-card">
		<h4><strong>{{ index }}. </strong>{{ productData.title }}</h4>
		<p>Product price: <strong>{{ productData.price }}</strong></p>
		<p>In stock: <strong>{{ productData.qt }}</strong></p>

		<button v-on:click="viewDetailsClick()">Vie details</button>		
	</div>
</template>

<script>
	export default {
		// props: ['productData', 'index']
		props: {
			productData: {
				type: Object,
				required: true
			},
			index: {
				type: [Number, String]
			}
		},
		methods: {
			viewDetailsClick() { 
				// создаем событие 'viewDetails', которое принимает 'productData' -
				// обьект, хранящий инфо о продукте
				this.$emit('viewDetails', this.productData);
			}
		}
	}
</script>



<style lang="scss">
	.product-card {
		padding: 10px;
		border: 1px solid #000;

		+ .product-card {
			margin-top: 25px;;
		}

		button {
			padding: 10px 15px;
			background-color: #42b983;
			color: #fff;
			border-radius: 5px;
			border: 0;
			cursor: pointer;
			transition: .3s all;
			&:hover,
			&:focus {
				outline: 0;
				background-color: darken(#42b983, 15%);
			}
		}
	}
</style>