import { getPokemonDetail } from "../api";
import { SET_POKEMONS, SET_LOADING } from "./types";

export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const getPokemonsWithDetails =
  (pokemonList = []) =>
  async (dispatch) => {
    const pokemonListDetailed = await Promise.all(
      pokemonList.map((pokemon) => getPokemonDetail(pokemon))
    );

    dispatch(setPokemons(pokemonListDetailed));
  };
