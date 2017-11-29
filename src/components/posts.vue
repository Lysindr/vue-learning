<template>
	<section class="posts">

		<h2 class="posts__title">Response posts</h2>		
		<div class="posts__container">
			<article class="posts__single" v-for="post in posts">
				<h3><strong>{{ post.id }}.</strong>{{ post.title }}</h3>
				<p>{{ post.body }}</p>
				<span>User id: <strong>{{ post.userId }}</strong></span>
			</article>
		</div>
		
	</section>
</template>

<script>

export default {

	data() {
		return {
			endpoint: 'https://jsonplaceholder.typicode.com/posts',
			posts: [],
			post: {}
		}
	},
	computed: {
		resource() {
			return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}');
		}
	},
	methods: {
		getSinglePost() {			
			this.resource.get({ id: 1 }).then(function(response) {
				this.post = response.data
			});
		},

		getAllposts() {

			var options = {  // Передадим вторым параметром в get-запрос обьект с опциями. (номер поста, кол-во постов)
				params: {
					_start: 0,
					_limit: 15
				},
				headers: {
					'Content-Type': 'application/json'
				}
			}

			this.$http.get(this.endpoint, options).then(function(response) {
				// ответ пришел успешно
				console.log(response);
				console.log(response.data);
				this.posts = response.data;
			}, function(error) {
				// ошибка
				console.log(error);
				console.log('---- Ошибка');
			})
		}
	},
	created: function() {  // Хук Vue  'created' срабатывает  при создании компонента/экземпляра vue, и вызовит наш метод
		return this.getAllposts();
	}
}

</script>



<style lang="scss">

.posts {
	box-sizing: border-box;
}

.posts__title {
	color: #42b983;
}

.posts__container {
	height:  400px;
	overflow-y: auto;
}

.posts__single {
	margin: 15px;
	padding: 10px;
	box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.45);
}
	
</style>