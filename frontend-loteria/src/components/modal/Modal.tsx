import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { createPool } from "../../hooks/CreatePool";
import { PoolInput } from "../../interfaces/pool-input";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../loader/Loader";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [title, setPoolName] = useState("");
  const [type, setLotteryChoice] = useState("Mega-Sena");
  const queryClient = useQueryClient();

  const { mutate, isPending } = createPool();

  useEffect(() => {
    if (isOpen) {
      setPoolName(""); // Limpa o campo de título ao abrir o modal
      setLotteryChoice("Mega-Sena")
    }
  }, [isOpen]);

  const handleSubmit = () => {
    const data: PoolInput = {
      title,
      type
    };

    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(); // Atualiza os dados em cache
        onClose(); // Fecha o modal
      },
      onError: (error) => {
        console.error("Erro ao criar o bolão:", error);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2 className={styles.titleModal}>Novo bolão</h2>

        {isPending ? (
          <Loader />
        ) : (
          <>
            <label htmlFor="poolName" className={styles.labels}>
              Nome do bolão:{" "}
            </label>
            <input
              type="text"
              id="poolName"
              className={styles.poolName}
              placeholder="ex: Bolão dos amigos"
              value={title}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 30) {
                  setPoolName(value);
                }
              }}
            />
            <p className={styles.charCounter}>{title.length}/30</p>
            <label htmlFor="lotteryChoice" className={styles.labels}>
              Escolha uma opção:{" "}
            </label>
            <select
              name="lotteryChoice"
              id="lotteryChoice"
              className={styles.lotteryChoice}
              value={type}
              onChange={(e) => setLotteryChoice(e.target.value)}
            >
              <option value="Mega-Sena" className={styles.lotteryOption}>
                Mega-sena
              </option>
              <option value="Lotofácil" className={styles.lotteryOption}>
                Lotofácil
              </option>
            </select>
            <button className={styles.saveButton} onClick={handleSubmit}>
              Salvar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;