async function getRandomData() {
  const response = await fetch(
    `${import.meta.env.VITE_PB_API}/collections/randomPokemon/records`
  );
  const data = await response.json();

  return data;
}

export default getRandomData;
