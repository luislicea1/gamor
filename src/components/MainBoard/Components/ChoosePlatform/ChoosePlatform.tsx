import { useState } from "react";
import "./styles/styles.css";
import games from "../../../../data/games";
import TabBar from "./components/TabBar/TabBar";
import GameSearch from "./components/GameSearch/GameSearch";
import GameList from "./components/GameList/GameList";
import TitleChoosePlatform from "./components/TitleChoosePlatform/TitleChoosePlatform";
import Button from "../../../Button/Button";

export default function ChoosePlatform() {
  const [activeTab, setActiveTab] = useState<"Party" | "Match" | "Streams">(
    "Party",
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState<string[]>(
    games[0][activeTab],
  );

  const handleSearch = () => {
    const filtered = games[0][activeTab].filter((game) =>
      game.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredGames(filtered);
  };

  const handleTabClick = (tab: "Party" | "Match" | "Streams") => {
    setActiveTab(tab);
    setSearchTerm("");
    setFilteredGames(games[0][tab]);
  };

  return (
    <div className="container-choose-game">
      <div>
        <TitleChoosePlatform number="01." title="Choose Platform" />
        <TabBar activeTab={activeTab} setActiveTab={handleTabClick} />
      </div>
      <div>
        <TitleChoosePlatform number="02." title="Searching Game" />
        <div className="search-game-container">
          <GameSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <GameList games={filteredGames} />
          <div className="container-search-now-btn">
            <Button className="search-now-button" onClick={handleSearch}>
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
