import firebase from 'firebase'

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

export  const db = app.database();


// Export the database for components to use.
