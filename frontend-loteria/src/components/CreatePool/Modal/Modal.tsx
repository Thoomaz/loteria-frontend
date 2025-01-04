import React, { useState } from "react";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [poolName, setPoolName] = useState("");
  const [lotteryChoice, setLotteryChoice] = useState("mega-sena");

  if (!isOpen) return null;

  const handleSave = () => {
    console.log("Bolão salvo:", { poolName, lotteryChoice });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="closeButton" onClick={onClose}>
          &times;
        </span>
        <h2 className="titleModal">Novo bolão</h2>
        <label htmlFor="poolName" className="labels">
          Nome do bolão:{" "}
        </label>
        <input
          type="text"
          id="poolName"
          className="poolName"
          placeholder="ex: Bolão dos amigos"
          value={poolName}
          onChange={(e) => setPoolName(e.target.value)}
        />
        <label htmlFor="lotteryChoice" className="labels">
          Escolha uma opção:{" "}
        </label>
        <select
          name="lotteryChoice"
          id="lotteryChoice"
          className="lotteryChoice"
          value={lotteryChoice}
          onChange={(e) => setLotteryChoice(e.target.value)}
        >
          <option value="mega-sena" className="lotteryOption">
            Mega-sena
          </option>
          <option value="lotofacil" className="lotteryOption">
            Lotofácil
          </option>
        </select>

        <button className="saveButton" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Modal;