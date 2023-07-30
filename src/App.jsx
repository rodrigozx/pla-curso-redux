import "antd/dist/reset.css";
import "./App.css";

import logo from "./static/logo.svg";
import { Col } from "antd";
import { connect } from 'react-redux';
import React, { useEffect } from "react";

import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import { getPokemons } from "./api";
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons}) {
console.log("🚀 ~ file: App.js:13 ~ App ~ pokemons:", pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await getPokemons();
      setPokemons(res);
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

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
