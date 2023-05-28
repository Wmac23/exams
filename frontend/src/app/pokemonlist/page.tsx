'use client';

import { useEffect, useState } from 'react';
import Nav from '../shared/nav';
import Footer from '../shared/footer';
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
          url: `https://pokeapi.co/api/v2/pokemon/1/`,
        }));

        setPokemonData(pokemonList);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <main><div>
        <Nav/>
      <h1>Pokemon List</h1>
      {pokemonData.map((pokemon: Pokemon) => (
        <div key={pokemon.name}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.url} alt='' />
          <Footer/>
        </div>
      ))}
    </div>
    </main>
  );
};

export default PokemonPage;