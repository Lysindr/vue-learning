<template>
	<div id="app">
		<div class="logo">
			<img src="./assets/logo.png">
		</div>

		<test-vue></test-vue>

		<posts></posts>	
		
	</div>
</template>

<script>

import Posts from './components/posts.vue'

export default {
	data () {
		return {
			
		}
	},
	components: {
		'posts': Posts
	}
}

</script>

<style lang="scss">

$primary-color: #42b983;

#app {
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 15px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.logo {
	text-align: center;;
}

a {
	color: $primary-color;
}

</style>
