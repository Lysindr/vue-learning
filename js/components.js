Vue.component('my-component', {
	props: ['message', 'myNumber'],
	template: '<p>{{ myNumber }} Simple component: {{ message }} - {{ title }}</p>',
	data: function() {
		return {
			title: 'Component title'
		}
	}
})

new Vue({
	el: "#example",
	data: {

	},
	components: {
		'local-component': {
			template: '<h3>Local component</h3>'
		}
	}
});