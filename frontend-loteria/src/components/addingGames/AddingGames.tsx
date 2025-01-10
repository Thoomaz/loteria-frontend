import { useState } from "react";
import "./AddingGames.css";
import ButtonAdding from "../buttonAdding/ButtonAdding";

interface AddingGamesProps {
  gameType: string;
}

function AddingGames({ gameType }: AddingGamesProps) {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  // Determina o número de botões com base no tipo do jogo
  const totalButtons = gameType === "Mega-Sena" ? 60 : gameType === "Lotofácil" ? 25 : 0;
  const maxSelections = 20; // Limite de seleções

  const handleClick = (number: number) => {
    setClickedButtons((prev) => {
      if (prev.includes(number)) {
        // Remove o botão se já estiver selecionado
        return prev.filter((n) => n !== number);
      } else if (prev.length < maxSelections) {
        // Adiciona o botão se o limite ainda não foi alcançado
        return [...prev, number];
      } else {
        // Se o limite for alcançado, não faz nada
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
      <ButtonAdding isDisabled={clickedButtons.length < 6} label={"Adicionar Jogos"} />
    </>
  );
}

export default AddingGames;