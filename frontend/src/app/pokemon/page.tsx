'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Pokemon = {
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
};

const PokemonDetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        const pokemon: Pokemon = {
          name: data.name,
          imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id}.png`,
          height: data.height,
          weight: data.weight,
        };

        setPokemonDetails(pokemon);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      }
    };

    if (name) {
      fetchPokemonDetails();
    }
  }, [name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.imageUrl} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
    </div>
  );
};

export default PokemonDetailsPage;