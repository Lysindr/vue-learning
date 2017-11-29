<template>
	<div>
		<input type="text" v-bind:value="propMessage" v-on:input="changeMessage">
		<p>{{ message }}</p>
	</div>
</template> 

<script>
	export default {
		props: ['propMessage'],
		data() {
			return {
				message: ''
			}
		},
		methods: {
			changeMessage(e) {
				this.message = e.target.value;
				this.$emit('messageChange', this.message);
			}
		}
	}
</script>