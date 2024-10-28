import React from "react";
import "./styles/styles.css";

interface GameSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const GameSearch: React.FC<GameSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Search game"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default GameSearch;
