// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8dpxvsd4cXqgLaRHTg5yUn6LLe7cGNE0",
    authDomain: "student-volunteer.firebaseapp.com",
    projectId: "student-volunteer",
    storageBucket: "student-volunteer.appspot.com",
    messagingSenderId: "840935833735",
    appId: "1:840935833735:web:ecf2e0189a71a2e3e6f822",
    measurementId: "G-QHKBZPVENT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
