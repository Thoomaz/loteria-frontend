import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  type: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, title, type, price }) => {
  return (
    <Link
      to={"/"+title}
      state={{id, title, type}}
      className="cardLink"
    >
      <div className="card">
        <div className="cardContent">
          <h2 className="cardTitle">{title}</h2>
          <p className="cardType">{type}</p>
          <p className="cardPrice">R$ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;