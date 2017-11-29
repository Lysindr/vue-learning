
Vue.component('text-comp', {
	template: '<div v-on:click="sum()" style="color: green;">Пользовательский компоент: {{ comment }} - {{ counter }}</div>',
	data: function() {
		return {
			comment: 'user comment',
			counter: 0
		}
	},
	methods: {
		sum: function() {
			this.counter = this.counter + 1;
		}
	}
});


new Vue({
	el: "#app",
	data: {
		message: "Hello World!"
	},
	filters: {
		uppercase: function(value) {
			return value.toUpperCase();
		}
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('');
		}
	}
});

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
		],
		inputText: ''
	},
	methods: {
		addBear: function() {
			this.bears.push({ name: this.inputText, status: false });
			this.inputText = '';
		},
		deleteBear: function() {
			this.bears.pop();
		}
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
	props: ['buttonconfirm', 'buttoncancel'],
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
			this.active = false;
		}
	}
});

var modal = new Vue({
	el: "#modal"
});


//


Vue.component('app-car', {
	template: '#car',
	data: function() {
		return {
			cars: [
				{ model: "BMW" },
				{ model: "Volvo" },
				{ model: "Mercedes-Benz" },
				{ model: "Audi" },
				{ model: "Mini-cooper" },
				{ model: "Ford" }
			]
		}
	}
});

var cars = new Vue({
	el: "#cars-components"
});

var cars2 = new Vue({
	el: "#cars-components-2"
});


//Динамические компоненты
var dynamic_components = new Vue({
	el: "#dynamic-components",
	data: {
		currentView: 'square'
	},
	components: {
		square: {
			template: '#square-template'
		},
		triangle: {
			template: '#triangle-template',
		},
		circleBase: {
			template: '#circle-template'
		}
	},
	methods: {
		switchView: function(view) {
			this.currentView = view;
		}
	}
});

//Создание событий
Vue.component('message', {
	template: '<input v-model="message" @keyup.enter="saveMessage">',
	data: function() {
		return {
			message: ''
		}
	},	
	methods: {
		saveMessage: function() {
			this.$emit('message-saved', this.message);
			this.message = '';
		}
	}
});

var events = new Vue({
	el: "#events",
	data: {
		messages: []
	},
	methods: {
		handleMessage: function(message) {
			console.log(message);
			this.messages.push(message);
			console.log(this.messages);
		}
	}
});


var counter = new Vue({
	el: "#counter",
	data: {
		counter: 0,
		checkedNames: []
	},
	methods: {
		increaseCounter: function() {
			console.log(this.counter);
			return this.counter++;		
		}
	}
});

/* Tabs */

// Vue.component('tabs', {
// 	template: '#tabs-template',
// 	data: function() {
// 		return {
// 			tabs: []
// 		}
// 	},

// 	created: function() {
// 		this.tabs = this.$children;
// 	},

// 	methods: {
// 		selectTab: function(selectedTab) {
// 			this.tabs.forEach(tab => {
// 				tab.selected = (tab.name == selectedTab.name);
// 			})
// 		}
// 	}
// });

// Vue.component('tab', {
// 	template: '#tab-template',

// 	props: {
// 		name: {
// 			required: true
// 		},
// 		selected: {
// 			default: false
// 		}
// 	}
// });


// var tabs = new Vue({
// 	el: "#tabs",	
// 	data: {

// 	},
// 	computed: {

// 	}
// });