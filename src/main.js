import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


// ***  Imports components
import App from './App.vue'
import Test from './test.vue'
import Posts from './components/posts.vue' 

Vue.component('test-vue', Test); // глобальный компонент, можем использовать в других файлах 
// Если компонент нужно использовать в одном/нескольких компонентах, можно импортировать 
// их в нужном компоненте локально (пример posts.vue импортируем в компонент App.vue)

new Vue({
	el: '#app',
	data: {
		// endpoint: 'https://jsonplaceholder.typicode.com/posts'		
	},
	methods: {
		
	},
	created: function() {
		
	},
	render: h => h(App) 
}) 
