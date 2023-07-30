import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const PokeCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.types.map((type) => ` | ${type.type.name}`)} />
    </Card>
  );
};

export default PokeCard;
