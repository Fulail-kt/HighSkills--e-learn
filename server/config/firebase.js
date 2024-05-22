// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA71KD2OUEjpaA8V8H4rYTfzT6p7jJnYPg",
  authDomain: "e-learn-f5d53.firebaseapp.com",
  projectId: "e-learn-f5d53",
  storageBucket: "e-learn-f5d53.appspot.com",
  messagingSenderId: "1031645318074",
  appId: "1:1031645318074:web:811412dab500a13667ab83",
  measurementId: "G-PDESXX1739"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app}