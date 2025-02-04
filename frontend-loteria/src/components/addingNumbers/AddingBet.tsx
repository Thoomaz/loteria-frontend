import { useState } from "react";
import ButtonAdding from "../buttonAdding/ButtonAdding";
import "./AddingNumbers.css";
import { AddingGameProps } from "../../interfaces/adding-game";
import { useCreateBet } from "../../hooks/CreateBet";
import { useQueryClient } from "@tanstack/react-query";

function AddingBet({ id, gameType }: AddingGameProps) {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);
  const queryClient = useQueryClient();

  const totalButtons = gameType === "Mega-Sena" ? 60 : 25;
  const minSelections = gameType === "Mega-Sena" ? 6 : 15;
  const maxSelections = 20;

  const createBet = useCreateBet();

  const handleClick = (number: number) => {
    setClickedButtons((prev) => {
      if (prev.includes(number)) {
        return prev.filter((n) => n !== number);
      } else if (prev.length < maxSelections) {
        return [...prev, number];
      } else {
        return prev;
      }
    });
  };

  const handleSubmit = () => {
    createBet.mutate(
      { id, gameType ,bet: clickedButtons },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries();
          setClickedButtons([]); // Limpa a seleção dos botões
          console.log("Bet submitted successfully:", data);
        },
        onError: (error) => {
          console.error("Error submitting bet:", error);
        },
      }
    );
  };

  return (
    <>
      <div className="buttonsContainer">
        {Array.from({ length: totalButtons }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            className={`buttons ${clickedButtons.includes(number) ? "clicked" : ""}`}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <p className="selectionCount">
        Selecionados: {clickedButtons.length}/{maxSelections}
      </p>
      <ButtonAdding
        isDisabled={clickedButtons.length < minSelections}
        label="Adicionar Jogos"
        onClick={handleSubmit}
      />
    </>
  );
}

export default AddingBet;