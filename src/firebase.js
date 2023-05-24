import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASOxU4jlc1fzX-wn9oaSpyYRdLTRxeSbM",
  authDomain: "crudfirebase-87748.firebaseapp.com",
  projectId: "crudfirebase-87748",
  storageBucket: "crudfirebase-87748.appspot.com",
  messagingSenderId: "550293965616",
  appId: "1:550293965616:web:273fc1d86014f188bf56f5",
  measurementId: "G-WC1N7668CE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}