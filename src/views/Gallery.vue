<template>
	<section>
		<h2>Галерея</h2>

		<pagination
			v-bind:current="currentPage"
			v-bind:total="totaslPhotos" 
			v-bind:perPage="perPage"
			@page-changed="fetchPohotos"
		>
		 	
		 </pagination>

		<div class="gallery__container">
			<div class="gallery__card-wrapper" v-for="photo in photos">
				<div class="gallery__card">
					<img :src="photo.urls.small" alt="">
					<div class="gallery__card-footer">
						<p>
							<strong>Author:</strong>
							<router-link :to="{ name: 'user', params: { username: photo.user.username } }">Go to User</router-link>
							
							<a v-bind:href="photo.user.portfolio_url">{{ photo.user.name }}</a>
							<img v-bind:src="photo.user.profile_image.medium" alt="">
						</p>

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
			photos: [],
			totaslPhotos: 0,
			perPage: 9,
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

			this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

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
		return	this.fetchPohotos(this.currentPage);
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

		img {
			max-width: 100%;
			height: auto;;
		}
	}

	.gallery__card-footer {
		padding: 10px;;
	}


</style>