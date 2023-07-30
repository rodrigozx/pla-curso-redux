import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const PokeCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          }
          alt={pokemon.name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.description} />
    </Card>
  );
};

export default PokeCard;
