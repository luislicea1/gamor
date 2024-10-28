import React from "react";
import selectedGamesStore from "../../../../../../utils/selectedGamesStore";
import "./styles/styles.css";
import { FaUser } from "react-icons/fa6";

interface GameListProps {
  games: string[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  const handleGameSelected = (game: string) => {
    selectedGamesStore.setSelectedGame(game);
  };
  return (
    <div className="games-list">
      {games.map((game, index) => (
        <div key={index} className="game-item">
          <div className="game-info">
            <div className="bubble-number-info">
              <p>{index + 1}</p>
            </div>
            <p>{game}</p>
            <div className="game-info-users">
              <div className="game-info-users-bubble1">
                <FaUser color="white"></FaUser>
              </div>
              <div className="game-info-users-bubble2">
                <FaUser color="white"></FaUser>
              </div>
            </div>
          </div>

          <button
            className="game-button"
            onClick={() => handleGameSelected(game)}
          >
            <p>+</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameList;
