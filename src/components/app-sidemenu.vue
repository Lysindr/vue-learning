<template>
	<div class="sidemenu-wrapper" v-show="isOpened" >
		<ul class="sidemenu">
			<li><a href="#">Brands</a></li>
			<li><a href="#">Projects</a></li>
			<li><a href="#">Gallery</a></li>
			<li><a href="#">Blog</a></li>
		</ul>
	</div>
</template>

<script>

import {toggleAsideMenu} from '../main.js';

// Listen for the i-got-clicked event and its payload.


	export default {
		data() {
			return {
				isOpened: false
			}
		},
		methods: {
			catchClick() {
				toggleAsideMenu.$on('i-got-clicked', clickCount => { 
					console.log('---', clickCount);
				});
			}
		}
	}
</script>


<style lang="scss">
	.sidemenu-wrapper {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 300px;
		background-color: rgba(#000, .5);		
	}

	.sidemenu {
		margin: 0;
		padding: 0;
		list-style-type: none;

		a {
			display: block;
			text-decoration: none;
			padding: 10px;
			background-color: #fdf4f4;
			border-bottom: 1px solid #ccc;
			color: #42b983;
			transition: .3s all;
			&:hover {
				background-color: #545353;
			}
		}
	}
</style>