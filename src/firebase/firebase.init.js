// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_API,
  authDomain: "coffee-store-a56fd.firebaseapp.com",
  projectId: "coffee-store-a56fd",
  storageBucket: "coffee-store-a56fd.firebasestorage.app",
  messagingSenderId: "902413113049",
  appId: "1:902413113049:web:79dd6137e73dae58a110c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth (app);