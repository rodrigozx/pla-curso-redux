import { getPokemonDetail } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

export const getPokemonsWithDetails =
  (pokemonList = []) =>
  async (dispatch) => {
    const pokemonListDetailed = await Promise.all(
      pokemonList.map((pokemon) => getPokemonDetail(pokemon))
    );

    dispatch(setPokemons(pokemonListDetailed));
  };
