import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKO9iXG4kKa6igr2IcdHBLt_jn-IRLV_k",
    authDomain: "exam2023-8191c.firebaseapp.com",
    projectId: "exam2023-8191c",
    storageBucket: "exam2023-8191c.appspot.com",
    messagingSenderId: "669644845356",
    appId: "1:669644845356:web:c687199f8e61519e3dfc89"
  };

 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebaseConfig;