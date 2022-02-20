import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY95DQw_hCJZfsi0LPtTmzM3_rWZYTVH4",
    authDomain: "clone-35fc4.firebaseapp.com",
    projectId: "clone-35fc4",
    storageBucket: "clone-35fc4.appspot.com",
    messagingSenderId: "174670894200",
    appId: "1:174670894200:web:9693638ade6ac37f2c898d",
    measurementId: "G-KKQF12141Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;

