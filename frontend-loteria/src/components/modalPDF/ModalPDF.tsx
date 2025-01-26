import React from "react";
import "./ModalPDF.css";

interface ModalPDFProps {
  onClose: () => void;
}

const ModalPDF: React.FC<ModalPDFProps> = ({ onClose }) => {

  return (
    <div className="modalPDF">
      <div className="modalPDFContent">
        <h2 className="ModalPDFTitle">Gerar PDF</h2>
        <div className="options">
          <input
            type="radio"
            id="all"
            name="filterOption"
            value="all"
            className="option"
          />
          <label htmlFor="all">Todas as apostas</label>
          <input
            type="radio"
            id="matched"
            name="filterOption"
            value="matched"
            className="option"
          />
          <label htmlFor="matched">Apenas apostas com acertos</label>
        </div>
        <div className="actions">
            <button className="confirmButton">Baixar</button>
            <button onClick={onClose} className="cancelButton">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalPDF;
