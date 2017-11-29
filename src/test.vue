<template>
	<section>
		<h1>Значение переменной компонента test.vue *titleMessage*: {{ titleMessage }}</h1>
		<p>Ниже выводим компонент field.vue</p>
		<hr>
		<app-input v-bind:propMessage="titleMessage" @messageChange="titleMessage = $event"></app-input>
		
	</section>
</template>


<script>
	
	import Input from './field.vue'

	export default {
		
		data: function() {
			return {
				titleMessage: 'Тестовый заголовок'
			}
		},
		components: {
			'app-input': Input
		}
	}
</script>