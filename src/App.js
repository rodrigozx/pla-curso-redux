import { Col } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Searcher from "./components/Searcher";
import PokeList from "./components/PokeList";

function App() {
  const pokemons = Array(20).fill({
    id: Math.random(),
    title: "raychu",
    description: "electric pokemon",
    cover:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
  });

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
