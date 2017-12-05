<template>
	<section>
		<h2>Gallery</h2>
		<h3>Photos provided by <a class="link" href="https://unsplash.com?utm_source=vue_learning&utm_medium=referral&utm_campaign=api-credit">Unsplash</a></h3>

		<pagination
			v-bind:current="currentPage"
			v-bind:total="totaslPhotos" 
			v-bind:perPage="perPage"
			@page-changed="fetchPohotos"
		>		 	
		 </pagination>
		 

	 	<div class="loader" v-if="loading"></div> 
		 

		<div class="gallery__container">
			<div class="gallery__card-wrapper" v-for="photo in photos">
				<div class="gallery__card">
					<img class="gallery__image" :src="photo.urls.small" alt="">
					<div class="gallery__card-footer">
						<div class="gallery__card-footer-left">
							<img v-bind:src="photo.user.profile_image.medium" alt="">
						</div>

						<div class="gallery__card-footer-right">
							<strong>Photo by:</strong>
							<a class="link" v-bind:href="photo.user.links.html + utmUrl" target="_blank">{{ photo.user.name }}</a>

							<p>
								<router-link class="link" :to="{ name: 'user', params: { username: photo.user.username } }">View profile</router-link>	
							</p>
						</div>

					</div>
				</div>
			</div>
			
		</div>
	</section> 
</template>


<script>
import Pagination from '../components/pagination.vue';
import apiConfigs from '../apiConfigs.json';

//Service https://unsplash.com
// const unsplashId = 'd14afeb2dd8a4c24cf34abddc05b4050326dcaee9a2fa8209c9220ebd827f92f';

export default {
	data() {
		return {
			utmUrl: '?utm_source=vue_learning&utm_medium=referral&utm_campaign=api-credit',
			photos: [],
			totaslPhotos: 0,
			perPage: 9,
			loading: false,
			currentPage: 1
		}
	},
	components: {
		pagination: Pagination
	},
	methods: {
		fetchPohotos(page) {
			var options= {
				params: {
					client_id: apiConfigs.unsplashId,
					page: page, // номер страницы
					order_by: 'latest', 
					per_page: this.perPage // кол-во изображений на странице
				}
			}

			this.loading = true;

			this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

				this.loading = false;
				console.log(response);

				this.photos = response.data;
				this.totaslPhotos = parseInt(response.headers.get('x-total'));
				this.currentPage = page;

				console.log(this.photos);

			}, function(error) {
				console.log(error);
			});

		}
	},
	created() {
		this.fetchPohotos(this.currentPage);
	}
}
	
</script>


<style lang="scss">
	.gallery__container {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.gallery__card-wrapper {
		width: 33.33%;
		padding: 10px;
		box-sizing: border-box;
		
	}

	.gallery__card {
		box-shadow: 0 0 2px rgba(#000, .35);

		
	}

	.gallery__image {
		max-width: 100%;
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	.gallery__card-footer {
		display: flex;
		align-items: flex-start;
		padding: 10px;
	}

	.gallery__card-footer-left {
		width: 64px;
		flex-shrink: 0;
		margin-right: 10px;
	}

	.gallery__card-footer-right {
		flex-grow: 1;
	}

	.link {
		color: #42b983;
	}

	.loader {
		position: relative;
		width: 50px;
		height: 50px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 50%;
		// background-color: #ccc;
		transition: .5s all;	
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			border-top: 4px solid #42b983;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
			border-bottom: 4px solid transparent;
			transition: .5s all;
			animation-name: loader;
			animation-duration: 1.5s;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
			box-sizing: border-box;
		}
	}

	@keyframes loader {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(360deg);
		}
	}


</style>