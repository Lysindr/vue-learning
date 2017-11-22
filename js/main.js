new Vue({
	el: "#app",
	data: {
		message: "Hello World!"
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

