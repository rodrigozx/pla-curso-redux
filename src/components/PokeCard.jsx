import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const PokeCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.cover} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.description} />
    </Card>
  );
};

export default PokeCard;
