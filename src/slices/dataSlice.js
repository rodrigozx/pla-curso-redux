import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetail, getPokemonList } from "../api";
import { setLoading } from "./uiSlice";

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonList = await getPokemonList();
    const pokemonListDetailed = await Promise.all(
      pokemonList.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemons(pokemonListDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    pokemons: [],
    search: "",
  },
  reducers: {
    searchPokemon: (state, action) => {
      state.search = action.payload.search;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonIndex = state.pokemons.findIndex(
        (p) => p.id === action.payload.id
      );

      if (pokemonIndex >= 0) {
        const isFavorite = state.pokemons[pokemonIndex].favorite;
        state.pokemons[pokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite, searchPokemon } = dataSlice.actions;
export default dataSlice.reducer;
