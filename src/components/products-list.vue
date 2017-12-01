<template>
	<section>
		<h2>Products list</h2>

		<div class="products-container">
			<div class="products-list">
				<product-item 
					:productData="product"  
					:index="(i + 1)"
					v-for="(product, i) in products" 
					@viewDetails="viewParentDetails"
					:key="product.id" >				
				</product-item>
				<!-- :productData="product" - запишим в переменную productData обьект 'product', который содержит информацию о текущем продукте в цикле и передадим 
						это значение в дочерний компонент 'product-item.vue'. В нем укажим обьект props: ['productData'] - который принимает этот параметр;
				 -->
			</div>
			<div class="products-details">
				<p><strong>Product title: {{ viewedId }} </strong> </p>
				<p><strong>Product price: </strong> </p>
				<p><strong>Product quantity: </strong> </p>
			</div>
		</div>
		

	</section>
</template>

<script>
	
	import productItem from './product-item.vue';

	export default {
		data() {
			return {
				products: [
					{
						id: 1,
						title: 'Product #1',
						price: 30,
						qt: 5000
					},
					{
						id: 2,
						title: 'Product #2',
						price: 50,
						qt: 100
					},
					{
						id: 3,
						title: 'Product #3',
						price: 923,
						qt: 589
					}
				],
				viewedId: null
			}
		},
		components: {
			'product-item': productItem
		},
		methods: {
			viewParentDetails(id) {
				console.log(id);
				this.viewedId = id;
			}
		}
	}

</script>

<style lang="scss">
	.products-container {
		display: flex;
		align-items: flex-start;
	}

	.products-list,
	.products-details {
		width: 50%;
		padding: 0 15px;
	}

	.products-details {
		background-color: #ccc;
	}
</style>