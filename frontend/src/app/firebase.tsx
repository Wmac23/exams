// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMAyJglx9Ontf4vwfpYztJI1f5SXPz0Sc",
  authDomain: "ba-exam.firebaseapp.com",
  projectId: "ba-exam",
  storageBucket: "ba-exam.appspot.com",
  messagingSenderId: "595062448983",
  appId: "1:595062448983:web:d1f2c72741f55633d39412",
  measurementId: "G-V2RD5YRTK6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
 