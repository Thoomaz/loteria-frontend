/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styles from "./Modal.module.css";
import { createPool } from "../../../hooks/CreatePool";
import { PoolInput } from "../../../interfaces/pool-input";
import { useQueryClient } from "@tanstack/react-query";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [title, setPoolName] = useState("");
  const [lotteryChoice, setLotteryChoice] = useState("mega-sena");
  const queryClient = useQueryClient();

  const { mutate } = createPool();

  const handleSubmit = () => {
    const data: PoolInput = {
      title,
    };

    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        onClose();
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
        <label htmlFor="poolName" className={styles.labels}>
          Nome do bolão:{" "}
        </label>
        <input
          type="text"
          id="poolName"
          className={styles.poolName}
          placeholder="ex: Bolão dos amigos"
          value={title}
          onChange={(e) => setPoolName(e.target.value)}
        />
        <label htmlFor="lotteryChoice" className={styles.labels}>
          Escolha uma opção:{" "}
        </label>
        <select
          name="lotteryChoice"
          id="lotteryChoice"
          className={styles.lotteryChoice}
          value={lotteryChoice}
          onChange={(e) => setLotteryChoice(e.target.value)}
        >
          <option value="mega-sena" className={styles.lotteryOption}>
            Mega-sena
          </option>
          <option value="lotofacil" className={styles.lotteryOption}>
            Lotofácil
          </option>
        </select>
        <button className={styles.saveButton} onClick={handleSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Modal;

