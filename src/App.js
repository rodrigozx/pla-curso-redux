import { Col } from "antd";
import "antd/dist/reset.css";
import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";
import logo from "./static/logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

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

export default App;
