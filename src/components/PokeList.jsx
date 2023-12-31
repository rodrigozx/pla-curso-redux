import React from "react";
import PokeCard from "./PokeCard";
import "./PokeList.css";

const PokeList = ({ pokemons }) => {
  return (
    <div className="PokeList">
      {pokemons.map((pokemon) => {
        return <PokeCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default PokeList;
