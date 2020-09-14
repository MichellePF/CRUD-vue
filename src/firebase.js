import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJVqgcUj9zEzeq03OhYZYYViiWVMFwaOg",
    authDomain: "michelle-vue.firebaseapp.com",
    databaseURL: "https://michelle-vue.firebaseio.com",
    projectId: "michelle-vue",
    storageBucket: "michelle-vue.appspot.com",
    messagingSenderId: "363601948649",
    appId: "1:363601948649:web:cd231e0176149dad3b2578"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export {db}