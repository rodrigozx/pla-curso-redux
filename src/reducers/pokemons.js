import {
  SET_POKEMONS,
  SET_POKEMON_FAVORITE,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

const findAndSetFavorite = (state, action) => {
  const pokemonIndex = state.pokemons.findIndex(
    (p) => p.id === action.payload.id
  );
  if (pokemonIndex === -1) {
    return state;
  }
  const newPokemons = [...state.pokemons];
  newPokemons[pokemonIndex].favorite = !newPokemons[pokemonIndex].favorite;
  return { ...state, pokemons: newPokemons };
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case SET_POKEMON_FAVORITE:
      return findAndSetFavorite(state, action);

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
