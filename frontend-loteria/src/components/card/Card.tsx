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
    <div className="card">
      <Link
        to={"/"+title}
        state={{id, title, type}}
        className="cardLink"
      >

          <div className="cardContent">
            <div className='titleContainer'><h2 className="cardTitle">{title}</h2></div>
            <p className="cardType">{type}</p>
            <p className="cardPrice">R$ {price.toFixed(2)}</p>
          </div>

      </Link>
      <button className="deleteButton"><img src="./lixeira.png" alt="Apagar" className="imgDeleteButton" /></button>
    </div>
  );
};

export default Card;