<template>
	<section>
		<h2>Products list</h2>

		<div class="products-container">
			<div class="products-list">
				<product-item 
					:productData="product"  
					:index="(i + 1)"
					v-for="(product, i) in products" 
					@viewDetails="viewChildDetails"
					:key="product.id" >				
				</product-item>
				<!-- :productData="product" - запишим в переменную productData обьект 'product', который содержит информацию о текущем продукте в цикле и передадим 
						это значение в дочерний компонент 'product-item.vue'. В нем укажим обьект props: ['productData'] - который принимает этот параметр;
				 -->
			</div>

			<div class="products-details">
				<p><strong>Product id: {{ viewdId }}</strong></p>
				<p><strong>Product title: {{ viewTitle }}</strong> </p>
				<p><strong>Product price: {{ viewPrice }} </strong> </p>
				<p><strong>Product quantity:  {{ viewQt }} </strong> </p>
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
				viewdId: null,
				viewTitle: null,
				viewPrice: null,
				viewQt: null
			}
		},
		components: {
			'product-item': productItem
		},
		methods: {
			viewChildDetails(product) {
				console.log(product.id);
				console.log(product);
				this.viewdId = product.id;
				this.viewTitle = product.title;
				this.viewPrice = product.price;
				this.viewQt = product.qt;


				// если нужно передать данные компоненту на одном уровне с текущим, то
				// эмитируем это событие дальше
				this.$emit('viewDetails', product);
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