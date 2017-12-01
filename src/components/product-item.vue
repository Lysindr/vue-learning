<template>
	<div class="product-card">
		<h4><strong>{{ index }}. </strong>{{ productData.title }}</h4>
		<p>Product price: <strong>{{ productData.price }}</strong></p>
		<p>In stock: <strong>{{ productData.qt }}</strong></p>

		<button v-on:click="viewDetails()">Vie details</button>		
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
			viewDetails() {
				this.$emit('viewDetails', this.index);
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
			cursor: pointer;
		}
	}
</style>