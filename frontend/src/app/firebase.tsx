// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKO9iXG4kKa6igr2IcdHBLt_jn-IRLV_k",
  authDomain: "exam2023-8191c.firebaseapp.com",
  projectId: "exam2023-8191c",
  storageBucket: "exam2023-8191c.appspot.com",
  messagingSenderId: "669644845356",
  appId: "1:669644845356:web:c687199f8e61519e3dfc89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)