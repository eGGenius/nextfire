import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF1KRr-8c9S5cRkqo4eivff1fEkydDNSg",
  authDomain: "nextfire-final.firebaseapp.com",
  projectId: "nextfire-final",
  storageBucket: "nextfire-final.appspot.com",
  messagingSenderId: "217602771471",
  appId: "1:217602771471:web:f2ebba9b96727db582717a",
  measurementId: "G-JM8MD549ZD"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
