// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRz4WcCRnBY39boHXwgqkQfcuqYqZ7E8c",
    authDomain: "newsapp-9a3e6.firebaseapp.com",
    projectId: "newsapp-9a3e6",
    storageBucket: "newsapp-9a3e6.appspot.com",
    messagingSenderId: "765560878011",
    appId: "1:765560878011:web:44b0c3692b3c46b6e90a9e",
    measurementId: "G-BRN7SKGDLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);