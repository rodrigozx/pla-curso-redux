import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import StarButton from "./StarButton";
import { setFavorite } from "../actions";

const { Meta } = Card;

const PokeCard = ({ pokemon: { types, name, id, sprites, favorite } }) => {
  const dispatch = useDispatch();
  const description = types.map((type) => type.type.name).join(" | ");

  const handleOnClick = () => {
    dispatch(setFavorite({ id: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={sprites.front_default} alt={name} />}
      extra={
        <StarButton isFavorite={favorite} onClick={() => handleOnClick()} />
      }
    >
      <Meta description={description} />
    </Card>
  );
};

export default PokeCard;
