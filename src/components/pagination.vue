<template>
	<div class="pagination">		
		<div class="pagination__left">
			<a href="#" class="pagination__link" v-if="hasPrev()" v-on:click="changePage(prevPage)">Предыдущая</a>
		</div>
		<div class="pagination__mid">
			<span>{{ current }} из {{ totalPages }}</span>
			<div>
				<strong style="padding: 0 5px;" v-if="hasFirst()"><a href="#" v-on:click="changePage(1)">1</a></strong>
				<span v-for="page in pages"><a href="#" v-on:click="changePage(page)" v-bind:class="{ current: current == page }" >{{ page }}</a></span>
				<strong style="padding: 0 5px;" v-if="hasLast()"><a href="#" v-on:click="changePage(totalPages)">{{ totalPages }}</a></strong>
			</div>
		</div>
		<div class="pagination__right">
			<a href="#" class="pagination__link" v-if="hasNext()" v-on:click="changePage(nextPage)">Следующая</a>
		</div>
	</div>
</template>


<script>

export default {
	props: {
		current: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 0
		},
		perPage: {
			type: Number,
			default: 9
		},
		pageRange: {
			type: Number,
			default: 2
		}
	},
	computed: {
		nextPage() {
			return this.current + 1;
		},
		prevPage() {			
			return this.current - 1;
					
		},
		totalPages() {
			return parseInt(this.total/this.perPage);
		},
		rangeStart() {
			var start = this.current - this.pageRange; 

			if (start > 0) {
				return start;
			} else {
				return 1;
			}
		},
		rangeEnd() {
			var end = this.current + this.pageRange;

			return (end < this.totalPages) ? end : this.totalPages;
		},
		pages() {
			var pages = [];

			for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
				pages.push(i);
			}

			return pages;
		}
	},
	methods: {
		/*метод, который принимает номер страницы и через созданое событие передавать его остальному приложению. Таким образом в нужном месте отловив это соытие мы легко сможем узнать, какую страницу нужно грузить*/
		changePage(page) { 
			this.$emit('page-changed', page);
		},
		hasPrev() {
			return this.current > 1;
		},
		hasNext() {
			return this.current < this.totalPages;
		},
		hasFirst() {
			return this.rangeStart !== 1;
		},
		hasLast() {
			return this.rangeEnd < this.totalPages;
		}
	}
}

</script>


<style lang="scss">

.pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;

	.current {
		color: #42b983;
	}
}

.pagination__link {
	display: inline-block;
	padding: 10px;
	border-radius: 5px;
	border: 2px solid #ccc;
	text-decoration: none;
	color: #42b983;
	text-align: center;
	transition-property: border-color;
	transition-duration: .3s;
	&:hover,
	&:focus,
	&:active {
		border-color: #42b983;
		outline: none;
	}
}

</style>