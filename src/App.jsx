import "antd/dist/reset.css";
import "./App.css";

import logo from "./static/logo.svg";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getPokemonsWithDetails } from "./actions";

import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons } from "./api";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonList = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonList));
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
