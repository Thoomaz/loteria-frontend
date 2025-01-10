import { useState } from "react";
import "./AddingGames.css";
import ButtonAdding from "../buttonAdding/ButtonAdding";

interface AddingGamesProps {
  gameType: string;
  actionType: string;
}

function AddingGames({ gameType, actionType }: AddingGamesProps) {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  const totalButtons = gameType === "Mega-Sena" ? 60 : gameType === "Lotofácil" ? 25 : 0;

  let minSelections = 6;
  let maxSelections = 20;

  if (gameType === "Mega-Sena" && actionType === "Contest") {
    minSelections = 6;
    maxSelections = 6;
  } else if (gameType === "Lotofácil" && actionType === "Bet") {
    minSelections = 15;
    maxSelections = 20;
  } else if (gameType === "Lotofácil" && actionType === "Contest") {
    minSelections = 15;
    maxSelections = 15;
  }


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
      <p className="selectionCount">Selecionados: {clickedButtons.length}/{maxSelections}</p>
      <ButtonAdding isDisabled={clickedButtons.length < minSelections} label={actionType === "Bet" ? "Adicionar Jogos" : "Adicionar Sorteio"} />
    </>
  );
}

export default AddingGames;