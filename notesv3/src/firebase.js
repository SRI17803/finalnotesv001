// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IZ1ZsuzaDGLDr-z7UsrsGIDEWMHEfms",
  authDomain: "notesv3-6ae1d.firebaseapp.com",
  projectId: "notesv3-6ae1d",
  storageBucket: "notesv3-6ae1d.firebasestorage.app",
  messagingSenderId: "1082924454390",
  appId: "1:1082924454390:web:0e317be198355aacd9f7d7",
  measurementId: "G-5GLW3FCM0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Initialize Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
