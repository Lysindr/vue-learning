import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(firebase);
Vue.use(VueFire);

// Для работы vue-router нужно создать базовый экземпляр и передать в него настройки
// (например, массив со всеми маршрутами(страницами) для приложения)

// *** Imports Views components (PAGES)
import Brands from './views/Brands.vue'
import Contacts from './views/Contacts.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'
import SinglePost from './views/SinglePost.vue'
import Gallery from './views/Gallery.vue'
import User from './views/User.vue'

const router= new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/brands', component: Brands }, // страница 'brands', содержимое = компонент './views/Brands.vue'
		{ path: '/projects', component: Projects },
		{ path: '/contacts', component: Contacts },
		{ path: '/blogs', component: Blog },
		{ path: '/post/:id', name: 'post', component: SinglePost },
		{ path: '/gallery', component: Gallery },
		{ path: '/user/:username', name: 'user', component: User }
	]
});



// Initialize Firebase
const configFireBase = {
	apiKey: "AIzaSyCDIipHQQUNcS8g9QckSWMDAxyOQbb83Ns",
	authDomain: "vuejs-firebase-learning.firebaseapp.com",
	databaseURL: "https://vuejs-firebase-learning.firebaseio.com",
	projectId: "vuejs-firebase-learning",
	storageBucket: "vuejs-firebase-learning.appspot.com",
	messagingSenderId: "631784825946"
};

let app = firebase.initializeApp(configFireBase);
let db = app.database();

let booksRef = db.ref('books');




// ***  Imports components
import App from './App.vue'
import Test from './components/test.vue'
import Posts from './components/posts.vue'
import MainHeader from './components/main-header.vue' 

Vue.component('test-vue', Test); // глобальный компонент, можем использовать в других файлах 
// Если компонент нужно использовать в одном/нескольких компонентах, можно импортировать 
// их в нужном компоненте локально (пример posts.vue импортируем в компонент App.vue)

new Vue({
	el: '#app',
	router: router,
	firebase: {
		books: booksRef
	},
	data: {
		newBook: {
			title: '',
			author: '',
			url: ''
		}
		
	},
	components: {
		'posts': Posts,
		'main-header': MainHeader
	},
	methods: {
		addBook() {
			booksRef.push(this.newBook);
			this.newBook.title = '';
			this.newBook.author = '';
			this.newBook.url = '';
			console.log('qwe');
		},
		deleteBook(book) {
			booksRef.child(book['.key']).remove();
		}
	}//,
	// render: h => h(App) 
}) 

