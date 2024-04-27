// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkRaK-u3XKkZmtUULYh_93NZnHFh-qGWQ",
  authDomain: "react-app-b7baa.firebaseapp.com",
  projectId: "react-app-b7baa",
  storageBucket: "react-app-b7baa.appspot.com",
  messagingSenderId: "309483111426",
  appId: "1:309483111426:web:24d1b5331bf2a92701931b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth =getAuth(app);
export default app;

