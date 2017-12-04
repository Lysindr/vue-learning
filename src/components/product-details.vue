<template>
	<div class="products-details">
		<h4 style="color: red;">Product details, который находится на одном уровне с products-list</h4>
		<p><strong>Product title: {{ currentProduct.title }} </strong> </p>
		<p><strong>Product price:  {{ currentProduct.price }} </strong> </p>
		<p><strong>Product quantity:  {{ currentProduct.qt }} </strong> </p>
	</div>
</template>

<script>
	export default {
		props: {
			currentProduct: {
				type: Object
			}
		}
	}
</script>