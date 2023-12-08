"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from './page.module.css'
import { getDocs, collection} from "firebase/firestore";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RejsekortNav from "../components/RejsekortNav";

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
    <Navbar/>
    <RejsekortNav/>
    <div>
    
  {myPokemon.map((pokemon) => (
    <div key={pokemon.name} className={styles.text}>
      <Bar> </Bar> 
    <table className="charts-css line">
    <thead>
    </thead>
    <tbody>
      <td>{pokemon.name}</td>
      <td>{pokemon.type}</td>
      <td>{pokemon.Abilities}</td>
    </tbody>
  </table>
  </div>

    ))}
  </div>
  <Footer/>
</main>
)

}

export default Home;