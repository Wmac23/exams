"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from './page.module.css'
import { getDocs, collection, addDoc } from "firebase/firestore";
import Nav from "../shared/nav";
import Footer from "../shared/footer";

function Home() {
  const [myPokemon, setMyPokemon] = useState([]);

  const [myPokemonName, setMyPokemonName] = useState([]);
  const [myPokemonType, setMyPokemonType] = useState([]);
  const [myPokemonAbility, setMyPokemonAbility] = useState([]);

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

  const onSubmitPokemon = async () => {
    try{
    await addDoc(pokemonCollectionRef, {name: myPokemonName, type: myPokemonType, Abilities: myPokemonAbility})
    } catch(err){
      console.log (err);
    }
  }
 
  return (
  <main className={styles.main}>
    <Nav/>
    <div>
    <img src="mylist.png" alt="" />
    <div>
      <input placeholder="Pókemon name" type="text" onChange={(e) => setMyPokemonName(e.target.value)} />
      <input placeholder="Pókemon type" type="text"  onChange={(e) => setMyPokemonType(e.target.value)} />
      <input placeholder="Pókemon ability" type="text"  onChange={(e) => setMyPokemonAbility(e.target.value)} />
      <button onClick={onSubmitPokemon}>Submit pókemon</button>
    </div>
    
  
  {myPokemon.map((pokemon) => (
    <div key={pokemon.name} className={styles.pokedex}>
      <img src="logo.png" alt="" />
      <h2>Name:</h2>
  <p>{pokemon.name}</p>
  <h2>Type:</h2>
  <p>{pokemon.type}</p>
  <h2>Ability:</h2>
  <p>{pokemon.Abilities}</p>
  </div>
    ))}
  </div>
  <Footer/>
</main>
)

}

export default Home;