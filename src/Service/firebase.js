// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8UW311hg0Uyq3Rwmkw9B0_UTEhYvDnRo",
  authDomain: "connectify-d7e59.firebaseapp.com",
  projectId: "connectify-d7e59",
  storageBucket: "connectify-d7e59.appspot.com",
  messagingSenderId: "56136857758",
  appId: "1:56136857758:web:5351218c1bc76ae393238f",
  measurementId: "G-3T1J7EL42S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export default app;
