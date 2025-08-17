// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-783f4.firebaseapp.com",
  projectId: "mern-blog-783f4",
  storageBucket: "mern-blog-783f4.firebasestorage.app",
  messagingSenderId: "235470233557",
  appId: "1:235470233557:web:0e4c7aeebc38d39eae275c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);