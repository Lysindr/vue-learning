<template>
	<section>
		<h2>Страница блога</h2>

		<div>
			<article class="single-post" v-for="(article, index) in articles">
				<h3 class="single-post__title">
					<router-link :to="{ name: 'post', params: { id: index } }">{{ article.title }}</router-link>
				</h3>
				<img class="single-post__image" v-bind:src="article.image" alt="">>
			</article>
		</div>
	</section>
</template>


<script>
	//Импортируем данные о постах из файла  'posts.js' и передадим их в обьект 'data'
	import Articles from '../posts.js'

	export default {
		data: function() {
			return {
				articles: Articles
			}
		}
	}
	</script>


	<style lang="scss">

	.single-post {
		position: relative;
		height: 300px;
		margin-bottom: 30px;;
		overflow: hidden;
		text-align: center;		
	}

	.single-post__image {
		width: 100%;
		max-width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.single-post__title {
		position: absolute;
		top: 50%;
		width: 100%;
		margin:  0;
		padding:  10px;;
		font-size: 30px;
		background-color: rgba(0,0,0, .57);
		color: #fff;
		transform: translateY(-50%);

		a {
			color: #fff;
			text-decoration: none;
			transition: .3s all;
			&:hover {
				color: #42b983;
			}
		}
	}
	
	</style>