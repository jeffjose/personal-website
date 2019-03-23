import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDJOqNbGEebHwL2x103PTgy8wTVTvzwRl8",
  authDomain: "personal-c913b.firebaseapp.com",
  databaseURL: "https://personal-c913b.firebaseio.com",
  projectId: "personal-c913b",
  storageBucket: "personal-c913b.appspot.com",
  messagingSenderId: "174691957208"
});

export default firebase;
