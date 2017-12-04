import Vue from 'vue';

export default new Vue({
	data: {
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
		]
	},
	methods: {
		viewDetails(product) {
			this.$emit("viewDetails", productToView);
		}
	}
});