import "antd/dist/reset.css";
import "./App.css";

import logo from "./static/logo.svg";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import React, { useEffect } from "react";

import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading, shallowEqual);
  const search = useSelector((state) => state.data.search, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  const filteredPokemons = search
    ? pokemons.filter((p) => p.name.includes(search))
    : pokemons;

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <div className="Searcher">
          <Searcher />
        </div>
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokeList pokemons={filteredPokemons} />
      )}
    </div>
  );
}

export default App;
