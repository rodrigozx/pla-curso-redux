import "antd/dist/reset.css";
import "./App.css";

import logo from "./static/logo.svg";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons, getPokemonDetail } from "./api";
import { setPokemons } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getPokemons();
      const pokemonListDetailed = await Promise.all(
        pokemonList.map((pokemon) => getPokemonDetail(pokemon))
      );

      dispatch(setPokemons(pokemonListDetailed));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
