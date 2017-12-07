<template>
	<section>
		<h2>User</h2>
		<h3>Hello, <strong>{{ userData.name }}</strong></h3>

		<p><strong style="color: red;">Всего фото: {{ totalPhotos }}</strong></p>

		
		<transition-group name="slide-fade" tag="div" class="photos">
			<div class="photo" v-for="(photo, index) in userPhotos" v-bind:key="index">
				<img :src="photo.urls.small" alt="">
			</div>
		</transition-group>		

		<p><strong style="color: red;">Показано фото: {{ userPhotos.length }}</strong></p>

		<button @click="fetchUserPhotos" v-if="userPhotos.length !== totalPhotos">Load More</button>
	</section>
</template>



<script>

import apiConfigs from '../apiConfigs.json';

export default {
	data() {
		return {
			currentPage: 0,
			username: this.$route.params.username,
			userData: {},
			totalPhotos: 0,
			perPage: 9,
			userPhotos: []
		}
	},
	methods: {
		fetchUserData(username) {

			const options = {
				params: {
					client_id: apiConfigs.unsplashId
				}
			};

			this.$http.get('https://api.unsplash.com/users/'+username, options).then(function(response) {				

				this.userData = response.data;

			}, function(error) {
				console.log(error);
			});
		},

		fetchUserPhotos() {
			this.currentPage++;

			const options = {
				params: {
					client_id: apiConfigs.unsplashId,
					per_page: this.perPage,
					page: this.currentPage
				}
			};

			this.$http.get(`https://api.unsplash.com/users/${this.username}/photos`, options).then(function(response) {
				
				// this.userPhotos.push.apply(this.userPhotos, response.data);
				this.userPhotos.push(...response.data);

				this.totalPhotos = parseInt(response.headers.get('x-total'));	

				console.log(response);

			}, function(error) {
				console.log(error);
			});
		}
	},
	created() {
		this.fetchUserData(this.$route.params.username);
		this.fetchUserPhotos();			
	}
}

</script>




<style lang="scss">
	.photos {
		display: flex;
		flex-wrap: wrap;
	}

	.photo {
		width: 33.33%;
		padding: 15px;
		img {
			width: 100%;
			height: 250px;
			object-fit: cover;
			box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.35);
			max-width: 100%;
		}
	}

	.slide-fade-enter-active {
		transition: all 1.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active до версии 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>