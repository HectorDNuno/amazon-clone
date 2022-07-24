import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNJXEP5s4v72WzTHveSNMXEtW_3PZ-1HU",
  authDomain: "clone-a8546.firebaseapp.com",
  projectId: "clone-a8546",
  storageBucket: "clone-a8546.appspot.com",
  messagingSenderId: "423025121548",
  appId: "1:423025121548:web:fac9ae54142203505dd129",
  measurementId: "G-ZMQ41S1MP7",
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
