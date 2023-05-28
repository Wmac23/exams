'use client';

import { useEffect, useState } from 'react';
import Nav from '../shared/nav';
import Footer from '../shared/footer';
import styles from './page.module.css'
type Pokemon = {
  name: string;
  imageUrl: string;
};

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();

        const pokemonList = data.results.map((pokemon: { name: string; }) => ({
          name: pokemon.name,
          url: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`,
        }));

        setPokemonData(pokemonList);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <main className={styles.main}><div>
        <Nav/>
      <img className={styles.pokePic} src="choose.png" alt="" />
      {pokemonData.map((pokemon: Pokemon) => (
        <div className={styles.pokedex} key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.url} alt='' />
          <button>Add to favourite</button>
          <Footer/>
        </div>
      ))}
    </div>
    </main>
  );
};

export default PokemonPage;