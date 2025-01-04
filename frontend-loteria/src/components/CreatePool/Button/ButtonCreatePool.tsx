import React from "react";
import styles from "./ButtonCreatePool.module.css";

type ButtonCreatePoolProps = {
  onClick: () => void;
};

const ButtonCreatePool: React.FC<ButtonCreatePoolProps> = ({ onClick }) => {
  return (
    <button className={styles.btnCreatePool} onClick={onClick}>
      Criar novo Bolão
    </button>
  );
};

export default ButtonCreatePool;