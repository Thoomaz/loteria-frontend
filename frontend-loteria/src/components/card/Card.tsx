import React from 'react';
import "./Card.css" // Assuming you have a CSS module for styling

interface CardProps {
  id: number
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, price}) => {
  return (
    <div className="card">
      <div className="cardContent">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardPrice">{price}</p>
      </div>
    </div>
  );
};

export default Card;