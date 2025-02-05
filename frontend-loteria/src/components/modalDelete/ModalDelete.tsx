import React from "react";
import "./ModalDelete.css";

interface ModalDeleteProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    const handleConfirmDelete = () => {
        console.log(`Vamos colocar para deletar aqui`);
        onClose();
    }

    return (
        <div className="modalDeleteContainer">
          <div className="modalDeleteContent">
            <h2 className="textConfirm">Tem certeza que deseja excluir o bolão?</h2>
            <div className="modalDeleteButtons">
              <button className="confirmButton" onClick={handleConfirmDelete}>Deletar</button>
              <button className="cancelButton" onClick={onClose}>Cancelar</button>
            </div>
          </div>
        </div>
      );
};

export default ModalDelete;
