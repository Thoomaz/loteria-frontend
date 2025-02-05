import React, { useState } from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import ModalDelete from '../modalDelete/ModalDelete';

interface CardProps {
  id: number;
  title: string;
  type: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ id, title, type, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <button className="deleteButton" onClick={() => setIsModalOpen(true)}>
        <img src="./lixeira.png" alt="Apagar" className="imgDeleteButton" />
      </button>

      <ModalDelete isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default Card;