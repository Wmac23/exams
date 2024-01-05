"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from './page.module.css'
import { getDocs, collection} from "firebase/firestore";
import Navbar from "../components/Navbar";
import RejsekortNav from "../components/RejsekortNav";
import { Tooltip } from "../components/tooltip";

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
    <h1>Rejsekort</h1>
  {myPokemon.map((pokemon) => (
    <div className={styles.text}>
    <table className="charts-css line">
    <thead>
      <caption>{pokemon.name}</caption>
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
  <Tooltip/>
</main>
)

}

export default Home;