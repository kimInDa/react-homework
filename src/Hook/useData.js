import { useState } from 'react';
import pb from '../api/pocketbase';

async function useData() {
  const [data, setData] = useState(null);

  try {
    const pokemonData = await pb.collection('randomPokemon').getFullList();
    setData(pokemonData);
  } catch (error) {
    console.log(error);
  }

  return data;
}

export default useData;
