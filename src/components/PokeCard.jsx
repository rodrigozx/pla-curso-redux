import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const PokeCard = ({ pokemon }) => {
  return (
    <Card
      title={pokemon.title}
      cover={<img src={pokemon.cover} alt={pokemon.title} />}
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.description} />
    </Card>
  );
};

export default PokeCard;
