// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCNe4Zl8G6t2cacwmMNaU8Y6oQXLPgpWw",
  authDomain: "authentication-e289e.firebaseapp.com",
  projectId: "authentication-e289e",
  storageBucket: "authentication-e289e.appspot.com",
  messagingSenderId: "18370162767",
  appId: "1:18370162767:web:0f7dc5ca8e3c00a75cba3a",
  measurementId: "G-G5953314B4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
