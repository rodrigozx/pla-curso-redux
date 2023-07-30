import { SET_POKEMONS } from "./types";

export const setPokemons = (pokemons) =>
  ({ type: SET_POKEMONS, payload: pokemons });
