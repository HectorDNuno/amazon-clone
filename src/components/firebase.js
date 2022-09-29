import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNJXEP5s4v72WzTHveSNMXEtW_3PZ-1HU",
  authDomain: "clone-a8546.firebaseapp.com",
  projectId: "clone-a8546",
  storageBucket: "clone-a8546.appspot.com",
  messagingSenderId: "423025121548",
  appId: "1:423025121548:web:c585ed415e5c8d3c5dd129",
  measurementId: "G-N1HJ820D8J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
