import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore, collection, getDocs, getDoc} from 'firebase/firestore';
import styles from './page.module.css';
import Nav from "./shared/nav";
import Footer from './shared/footer';

const firebaseConfig = ({
  apiKey: "AIzaSyAKO9iXG4kKa6igr2IcdHBLt_jn-IRLV_k",
  authDomain: "exam2023-8191c.firebaseapp.com",
  projectId: "exam2023-8191c",
  storageBucket: "exam2023-8191c.appspot.com",
  messagingSenderId: "669644845356",
  appId: "1:669644845356:web:c687199f8e61519e3dfc89"
});

const auth = getAuth(firebaseApp);
const db = (getFirestore);
db.collection('todos').getdocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

auth.onAuthStateChanged(user => {

});

onAuthStateChanged(auth, user =>  {
  if (user != null) {
    console.log("logged in!")
  } else {
    console.log("no user")
  }
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>
      <img src="welcome.png" alt="" />
      <br />
     <img src="mypokemon.png" alt="" />
      </div>
      <img className={styles.logo} src="logo.png" alt="" />
      <div>
       <a href="/pokemonlist"><button className={styles.buttons}>See Pokémon</button></a> 
       <a href="/mypokemon"><button className={styles.buttons}>My Pokémon</button></a> 
      </div>
      <Footer/>
    </main>
  )
}