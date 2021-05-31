import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2i-6dIV_i9Gb9k9JL9fevuIoF8WD5Fi4",
    authDomain: "chatappfirebase-2dfca.firebaseapp.com",
    projectId: "chatappfirebase-2dfca",
    storageBucket: "chatappfirebase-2dfca.appspot.com",
    messagingSenderId: "740355036418",
    appId: "1:740355036418:web:2a42359b240b79487b9e1b",
    measurementId: "G-CW3GJNDW3V"
  };
  
firebase.initializeApp(firebaseConfig);
export default firebase;