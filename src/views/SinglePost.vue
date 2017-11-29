<template>
	<article v-if="article">
		<h2>{{ article.title }}</h2>
		<img v-bind:src="article.image" alt="">
		<p>
			{{ article.body }}
		</p>
	</article>
</template>


<script>
//Импортируем данные о постах из файла  'posts.js' и передадим их в обьект 'data'
import Articles from '../posts.js'

export default {
	data: function() {
		return {
			articles: Articles,
			article: null
		}
	},
	created: function() {
		// обьект '$route' содержит данные касающиеся маршрута, так и параметры (params), которые мы в него передаем
		// из компонента 'Blog.vue'
		var postId = this.$route.params.id;  
		this.article = this.articles[postId];
		console.log(this.$route);
	}
}
</script>

