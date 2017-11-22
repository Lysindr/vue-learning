new Vue({
	el: "#app",
	data: {
		message: "Hello World!"
	},
	filters: {
		uppercase: function(value) {
			return value.toUpperCase();
		}
	}
})

// Simple list
var list_bears = new Vue({
	el: "#list-bears",
	data: {
		bears: [
			{
				name: "гризли",
				status: false
			},
			{
				name: "белый",
				status: true
			},
			{
				name: "панда",
				status: false
			},
			{
				name: "губач",
				status: false
			}
		]
	}
});

//Simple popup, CLICK-event, METHODS
var simplePopup = new Vue({
	el: "#popup",
	data: {
		seen: false,
		popupTitle: "Signup title",
		popupText: "Subscribe on our news!",
		message: ""
	},
	methods: {
		showPopup: function() {
			this.seen = !this.seen;
		},
		showConsoleLog: function() {
			console.log(this.message);
		}
	}
});

//Transitions

var baseTransitions = new Vue({
	el: "#transitions",
	data: {
		show: false
	}
});

// Вычисляемые свойства
// Вычисляемые свойства кешируются, а обычные методы нет.
var calcProperties = new Vue({
	el: "#calcProperties",
	data: {
		text: '',
		maxLength: 30
	},
	computed: {
		count: function() {
			return this.text.length;
		}
	}
});

// Компоненты
Vue.component('modal', {
	template: '#modal-template',
	data: function() {
		return {
			active: false
		}
	},
	props: ['buttontext'],
	methods: {
		open: function() {
			this.active = true;
		},

		close: function() {
			this.active = false;
		},

		onCancel: function() {
			this.active = false;
		},

		onConfirm: function() {

		}
	}
});

var modal = new Vue({
	el: "#modal",
	data: {
		active: false
	}
});