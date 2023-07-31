import { fromJS } from "immutable";
import { SET_POKEMONS, SET_POKEMON_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
});

const findAndSetFavorite = (state, action) => {
  const pokemonIndex = state
    .get("pokemons")
    .findIndex((p) => p.get("id") === action.payload.id);

  if (pokemonIndex < 0) {
    return state;
  }
  const isFavorite = state.getIn(["pokemons", pokemonIndex, "favorite"]);
  return state.setIn(["pokemons", pokemonIndex, "favorite"], !isFavorite);
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(["pokemons"], fromJS(action.payload));

    case SET_POKEMON_FAVORITE:
      return findAndSetFavorite(state, action);

    default:
      return state;
  }
};
