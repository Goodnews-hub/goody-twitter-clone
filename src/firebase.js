import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH8iRNig3zDOtSzALKkLNsQ5GoRtZ3AFM",
    authDomain: "goody-twitter-clone.firebaseapp.com",
    projectId: "goody-twitter-clone",
    storageBucket: "goody-twitter-clone.appspot.com",
    messagingSenderId: "844465102866",
    appId: "1:844465102866:web:dde75e8fab2260ed6cb8cb",
    measurementId: "G-GCLDS7C33T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db; 