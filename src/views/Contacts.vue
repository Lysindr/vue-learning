<template>
	<section>
		<div class="books-container">
			<h2>Vue JS and FireBase simple Application </h2>
			<hr>
			

			<div class="books-add">
				<h3>Add Book</h3>
				<hr>
				<div class="books-form">
					<input class="input" type="text" placeholder="Enter title" v-model="newBook.title">
					<input class="input" type="text" placeholder="Enter author" v-model="newBook.author">
					<input class="input" type="text" placeholder="Enter url" v-model="newBook.url">
					<button class="button" @click="addBook()">Add book</button>		
				</div>					
			</div>


			<h3>Books list</h3>	
			<div class="books-list">
				<div class="book" v-for="(book, id) in books" :key="id"> 
					<div v-if="!book.edit">
						<p>Book title: <a class="link" v-bind:href="book.url" target="_blank">{{ book.title }}</a>, author: <strong>{{ book.author }}</strong></p>
						<div>
							<button class="button button--alert" @click="deleteBook(book)">Delete book</button>
							<button @click="editBook(book)" class="button button--secondary">Edit book</button>
						</div>
					</div>					

					<div v-else class="book-edit">
						<h3>Edit book information</h3>
						<div class="book-edit__row">
							<label :for="'editTitle-' + id">Edit title</label>
							<input class="input" :id="'editTitle-' + id" type="text" v-model="book.title">
						</div>

						<div class="book-edit__row">
							<label :for="'editAuthor-' + id">Edit author</label>
							<input class="input" :id="'editAuthor-' + id" type="text" v-model="book.author">
						</div>

						<div class="book-edit__row">
							<label :for="'editUrl-' + id">Edit url</label>
							<input class="input" :id="'editUrl-' + id" type="text" v-model="book.url">
						</div>

						<div class="book-edit__row">
							<button @click="confirmEdit(book)" class="button">Confirm</button>
							<button @click="cancelEdit(book)" class="button button--secondary">Cancel</button>
						</div>
					</div>
				</div>
			</div>	
			
		</div>


		<h2>Страница Контакты</h2>
		<ul>
			<li>
				<strong>Адресс:</strong>ул. Пушкина
			</li>
			<li>
				<strong>Телефон:</strong> 777-999
			</li>
			<li>
				<strong>E-mail:</strong> emailtest@user.com
			</li>
		</ul>
	</section>
</template>


<script>

import {db} from '../firebase.js';

let booksRef = db.ref('books');

	export default {
		firebase: {
			books: booksRef
		},
		data() {
			return {
				newBook: {
					title: '',
					author: '',
					url: ''
				}
			}
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
			},
			editBook(book) {
				booksRef.child(book['.key']).update({ edit: true });
			},
			cancelEdit(book) {
				booksRef.child(book['.key']).update({ edit: false })
			},
			confirmEdit(book) {
				booksRef.child(book['.key']).update({ title: book.title, author: book.author, url: book.url, edit: false });
			}
		}
	}

</script>

<style lang="scss">

.books-container {
	margin-bottom: 50px;
	padding-bottom: 15px;
	border-bottom: 1px solid #ccc;
}

.books-list {
		
}

.book {
	margin: 15px 0;
	padding: 15px;
	border: 1px solid #ccc;
	border-left: 4px solid #42b983;
}

.books-add {
	margin-bottom: 30px;
	padding: 15px;
    box-shadow: 0px 0 4px 0px rgba(0, 0, 0, 0.51);
}

.button {	
	padding: 10px 15px;
	background-color: #42b983;
	color: #fff;
	border-radius: 5px;
	border: 0;
	cursor: pointer;
	transition: .3s all;

	&.button--secondary {
		background-color: #303f9f;
		&:hover {
			background-color: darken(#303f9f, 15%);
		}
	}

	&.button--alert {
		background-color: #f44336;
		&:hover {
			background-color: darken(#f44336, 15%);
		}
	}

	&:hover,
	&:focus {
		outline: 0;
		background-color: darken(#42b983, 15%);
	}
}

.book-edit__row {

	label {
		display: inline-block;
		width: 120px;
	}
	+ .book-edit__row {
		margin-top: 15px;
	}
}

.input {
	padding: 8px 5px; 
	border-radius: 0px; 
	box-shadow: none; 
	border: 2px solid #42b983;
	transition: .3s all;
	&:focus {
		box-shadow: inset 0 0 5px rgba(66, 185, 131, 0.6);
		outline: 0;
	}
}
	
</style>