<template>
	<header class="main-header">
		<button @click="emitGlobalToggleSideMenu()">Menu</button>
		<img class="main-header__logo" src="../assets/logo.png">
		<nav class="main-nav">
			<router-link to="/brands">Brands</router-link>
			<router-link to="/projects">Projects</router-link>			
			<router-link to="/gallery">Gallery</router-link>
			<router-link to="/blogs">Blogs</router-link>
			<router-link to="/contacts">Contacts</router-link>
		</nav>
	</header>
</template>

<script>
// Import global events 'toggleAsideMenu'
import {toggleAsideMenu} from '../main.js';

	export default {
		data() {
			return {
				clickCount: 0
			}
		},
		methods: {
			emitGlobalToggleSideMenu() {
				console.log('aaaaa');
				this.clickCount++;
				console.log(clickCount);
				//Send the event on a channel (i-got-clicked) with a payload (the click count.)
				toggleAsideMenu.$emit('i-got-clicked', this.clickCount);
			}
		}
	}
</script>



<style lang="scss">

.main-header {
	padding: 20px 15px;;
	border-bottom: 1px solid #ccc;
}

.main-header__logo {
	max-width: 80px;	
	vertical-align: middle;
}

.main-nav {
	display: inline-block;
	vertical-align: middle;

	a {
		font-size: 18px;;
		color: #42b983;
		text-decoration: none;
		border-bottom: 2px solid #ccc;
		padding-bottom: 2px;
		transition-property: border-color;
		transition-duration: .3s;;

		+ a {
			margin-left: 15px;;
		}
	}

	.router-link-active {
		border-color: blue;
	}
}



</style>