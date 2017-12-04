<template>
	<section>
		<h2>Страница Проекты</h2>

		<product-detais :currentProduct="selectedProduct"></product-detais>

		<products-list @viewDetails="sendDetails"></products-list>

	</section>
</template>

<script>
	import productsList from '../components/products-list.vue';
	import productDetails from '../components/product-details.vue';

	export default {
		data() {
			return {
				selectedProduct: {}
			}
		},
		components: {
			'products-list': productsList,
			'product-detais': productDetails
		},
		methods: {
			sendDetails(product) {
				this.selectedProduct = product;
			}
		}
	}
</script>