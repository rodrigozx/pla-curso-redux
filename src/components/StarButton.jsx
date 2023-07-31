import React from "react";
import { Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const StarButton = ({ isFavorite, onClick }) => {
  const icon = isFavorite ? <StarFilled /> : <StarOutlined />;

  return <Button icon={icon} onClick={onClick}></Button>;
};

export default StarButton;
