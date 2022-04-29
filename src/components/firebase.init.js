// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW5KqRzn5FePqpb8bvMBQU-1olMWZlFwg",
    authDomain: "phone-stokes.firebaseapp.com",
    projectId: "phone-stokes",
    storageBucket: "phone-stokes.appspot.com",
    messagingSenderId: "8587698865",
    appId: "1:8587698865:web:40632209bed0f44b07b890",
    measurementId: "G-C2RC6PM5P7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
