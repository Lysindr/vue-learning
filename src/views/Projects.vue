<template>
	<section>
		<h2>Страница Проекты</h2>

		<products-list></products-list>
	</section>
</template>

<script>
	import productsList from '../components/products-list.vue';

	export default {
		components: {
			'products-list': productsList
		}
	}
</script>