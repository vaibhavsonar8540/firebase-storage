// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHAOc5yf9fSBhlikNLbLQZn8mJbkJ_O80",
  authDomain: "crud-bfb4b.firebaseapp.com",
  projectId: "crud-bfb4b",
  storageBucket: "crud-bfb4b.firebasestorage.app",
  messagingSenderId: "730612200119",
  appId: "1:730612200119:web:c34e9b714c11253483d332",
  measurementId: "G-KVNX4D4S6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
