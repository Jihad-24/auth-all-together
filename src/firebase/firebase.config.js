// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkoh71Woa2z5KhdOpF1yEgPT85BeHgHcY",
  authDomain: "auth-all-togather.firebaseapp.com",
  projectId: "auth-all-togather",
  storageBucket: "auth-all-togather.appspot.com",
  messagingSenderId: "469983694422",
  appId: "1:469983694422:web:d6a0e023015c46b098f5f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;