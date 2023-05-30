"use client";

import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from "./firebase";
import styles from './page.module.css'
import { getDocs, collection } from "firebase/firestore";

function Home() {
  const [myPokemon, setMyPokemon] = useState([]);

  const pokemonCollectionRef = collection(db, "pokemon");

  useEffect (() => {
     const getMyPokemon = async () => {
    try{
      const data = await getDocs(pokemonCollectionRef)
      const filteredData = data.docs.map((doc) =>({...doc.data(), id: doc.id}));
      setMyPokemon(filteredData);
      } catch (err){
        console.log(err)
      }
  }
  getMyPokemon();
  }, [])
 
  return (
  <main className={styles.main}>
  <div><Auth/></div>
</main>
)

}

export default Home;