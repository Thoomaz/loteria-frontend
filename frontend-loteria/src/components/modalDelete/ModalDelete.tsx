import React from "react";
import "./ModalDelete.css";
import { useDeletePool } from "../../hooks/RemovePool";
import { useQueryClient } from "@tanstack/react-query";

interface ModalDeleteProps {
    isOpen: boolean;
    onClose: () => void;
    poolId: number;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ isOpen, onClose, poolId }) => {
    const { mutate } = useDeletePool();
    const queryClient = useQueryClient();

    if (!isOpen) return null; 

    const handleConfirmDelete = () => {
      mutate(poolId, {
        onSuccess: () => {
          queryClient.invalidateQueries();
          onClose();      
        }
      })    
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
