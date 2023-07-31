export const getPokemonList = async () => {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
      return res.json().then((data) => {
        // console.log(data.results);
        return data.results;
      });
    })
    .catch((err) => console.error(err));
};

export const getPokemonDetail = async ({ url }) => {
  return await fetch(url)
    .then((res) => {
      return res.json().then((data) => {
        // console.log(data);
        return data;
      });
    })
    .catch((err) => console.error(err));
};
