import "antd/dist/reset.css";
import "./App.css";

import logo from "./static/logo.svg";
import { Col, Spin } from "antd";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import React, { useEffect } from "react";
import { getPokemonsWithDetails, setLoading } from "./actions";

import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons } from "./api";

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS(); // shallowEqual is used to compare the objects and avoid unnecessary re-renders

  const loading = useSelector((state) => state.get(["ui", "loading"]));

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonList = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonList));
    };
    fetchPokemons();
    dispatch(setLoading(false));
  }, []);

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
        <PokeList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
