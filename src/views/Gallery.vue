<template>
	<section>
		<h2>Галерея</h2>
		<div class="gallery__container">
			<div class="gallery__card-wrapper" v-for="photo in photos">
				<div class="gallery__card">
					<img :src="photo.urls.small" alt="">
					<div class="gallery__card-footer">
						<p>
							<strong>Author:</strong>
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

//Service https://unsplash.com
const unsplashId = 'd14afeb2dd8a4c24cf34abddc05b4050326dcaee9a2fa8209c9220ebd827f92f';

export default {
	data() {
		return {
			photos: [],
			totaslPhotos: 2,
			perPage: 9,
			currentPage: 1
		}
	},
	methods: {
		fetchPohotos(page) {
			var options= {
				params: {
					client_id: unsplashId,
					page: page,
					order_by: 'latest',
					per_page: this.perPage
				}
			}

			this.$http.get('https://api.unsplash.com/photos', options).then(function(response) {

				console.log(response);
				this.photos = response.data;
				this.totaslPhotos = parseInt(response.headers.get('x-total'));
				this.currentPage = page;
				console.log(photos);

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
		width: 33%;
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