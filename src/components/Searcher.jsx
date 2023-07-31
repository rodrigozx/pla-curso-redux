import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(searchPokemon({ search: e.target.value }));
  };

  return <Input placeholder="Buscar pokemon" onChange={handleOnChange} />;
};

export default Searcher;
