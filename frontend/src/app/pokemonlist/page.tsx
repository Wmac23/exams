'use client';
import Link from "next/link";
import Nav from "../shared/nav";
import Footer from "../shared/footer";
import styles from './page.module.css'
import { useEffect, useState } from 'react';

type Pokemon = {
  name: string;
  imageUrl: string;
};

type PokemonApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string }[];
};

const PokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  const [previousPageUrl, setPreviousPageUrl] = useState<string | null>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

  const fetchPokemonData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data: PokemonApiResponse = await response.json();

        const pokemonList = data.results.map((pokemon: { name: string }, index: number) => {
          const imageNumber = ("00" + (index + 1)).slice(-3)
          return {
            name: pokemon.name,
            imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageNumber}.png`,
          };
        });

      setPokemonData(pokemonList);
      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  useEffect(() => {
    fetchPokemonData(nextPageUrl);
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchPokemonData(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl) {
      fetchPokemonData(previousPageUrl);
    }
  };

  return (
<main className={styles.main}>
  <Nav/>
 
    <div>
     <img src="choose.png" alt="" />
      {pokemonData.map((pokemon: Pokemon) => (
            <Link href={`${pokemon.name}`}><div key={pokemon.name} className={styles.pokedex}>
          <h2>{pokemon.name}</h2>
        <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div></Link>
      ))}
      <div>
        {previousPageUrl && (
          <button onClick={handlePreviousPage}>Previous Page</button>
        )}
        {nextPageUrl && <button onClick={handleNextPage}>Next Page</button>}
      </div>
    </div>
    <Footer/>
</main>
  );
};

export default PokemonPage;
