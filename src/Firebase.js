// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfU3MNnJeo9_XFMZVo-QMsUrF4U_xh4GE",
    authDomain: "login-movie-1003b.firebaseapp.com",
    projectId: "login-movie-1003b",
    storageBucket: "login-movie-1003b.appspot.com",
    messagingSenderId: "886335911194",
    appId: "1:886335911194:web:a0c27e6b7bab92a28668a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };