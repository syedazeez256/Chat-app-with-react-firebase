// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlJ0eqphMnpEiv0CfItch_QJf24pfPvXM",
  authDomain: "chat-app-ced46.firebaseapp.com",
  projectId: "chat-app-ced46",
  storageBucket: "chat-app-ced46.appspot.com",
  messagingSenderId: "694113888015",
  appId: "1:694113888015:web:73ecb7b67b0b64fd60007a",
  measurementId: "G-0HQZ5YZMNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
