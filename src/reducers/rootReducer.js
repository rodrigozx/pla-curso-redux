import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

const rootRedurer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootRedurer;
