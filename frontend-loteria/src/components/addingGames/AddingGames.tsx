import { useState } from "react";
import "./AddingGames.css";

function AddingGames() {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  const handleClick = (number: number) => {
    setClickedButtons((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number) // Remove se já estiver marcado
        : [...prev, number] // Adiciona se não estiver marcado
    );
  };

  return (
    <>
      <h2 className="addingGamesTitle">Adicione os Jogos</h2>
      <div className="buttonsContainer">
        {Array.from({ length: 60 }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            className={`buttons ${clickedButtons.includes(number) ? "clicked" : ""}`}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button className="addButton">Adicionar</button>
    </>
  );
}

export default AddingGames;
