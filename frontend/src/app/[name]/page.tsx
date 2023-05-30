'use client';

import Nav from "../shared/nav";
import Footer from "../shared/footer";
import styles from './page.module.css'
import { useEffect, useState } from 'react';

type Pokemon = {
  name: string;
  height: number;
  weight: number;
};

const PokemonDetailsPage = ({ pokemonName }: { pokemonName: string }) => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();

        const pokemon: Pokemon = {
          name: data.name,
          
          height: data.height,
          weight: data.weight,
        };

        setPokemonDetails(pokemon);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return (
    <main className={styles.main}>
      <Nav/>
      <div>
        <h1>Loading...</h1>
      </div>
    <Footer/>
    </main>
    );
  }

  return (
    <main className={styles.main}>
      <Nav/>
    <div>
      <h1>{pokemonDetails.name}</h1>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
    <Footer/>
    </main>
  );
};

export default PokemonDetailsPage;