import firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDwFfCKEgoGzsf8OcM59STvM6MPyR8u1rg",
    authDomain: "nnangeweb.firebaseapp.com",
    databaseURL: "https://nnangeweb.firebaseio.com",
    projectId: "nnangeweb",
    storageBucket: "nnangeweb.appspot.com",
    messagingSenderId: "1051512940139",
    appId: "1:1051512940139:web:73287481e0e7ed9ca5332e",
    measurementId: "G-0TX8N6VY1N"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

  var db = firebaseApp.firestore();

  export { db };