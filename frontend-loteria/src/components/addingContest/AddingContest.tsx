import { useState } from "react";
import ButtonAdding from "../buttonAdding/ButtonAdding";
import { AddingGameProps } from "../../interfaces/adding-game";
import { useCreateContest } from "../../hooks/CreateContest";
import "./AddingContest.css";
import { useQueryClient } from "@tanstack/react-query";

function AddingContest({ id, gameType }: AddingGameProps) {
  const queryClient = useQueryClient();
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);
  
  const totalButtons = gameType === "Mega-Sena" ? 60 : 25;
  const minSelections = gameType === "Mega-Sena" ? 6 : 15;
  const maxSelections = minSelections;

  const createContest = useCreateContest(); // Hook para criação do concurso

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
    createContest.mutate(
      { id, drawNumbers: clickedButtons },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
          setClickedButtons([]);
        },
        onError: (error) => {
          console.error("Error ao enviar o contest: ", error)
        }
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
        label={"Adicionar Sorteio"}
        onClick={handleSubmit}
      />
    </>
  );
}

export default AddingContest;
