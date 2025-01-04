import React from "react";
import "./ButtonCreatePool.css";

type ButtonCreatePoolProps = {
  onClick: () => void;
};

const ButtonCreatePool: React.FC<ButtonCreatePoolProps> = ({ onClick }) => {
  return (
    <button className="btnCreatePool" onClick={onClick}>
      Criar novo Bolão
    </button>
  );
};

export default ButtonCreatePool;