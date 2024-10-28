import React from "react";
import "./styles.css/styles.css";

interface TabBarProps {
  activeTab: "Party" | "Match" | "Streams";
  setActiveTab: (tab: "Party" | "Match" | "Streams") => void;
}

const TabBar: React.FC<TabBarProps> = ({ setActiveTab }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" defaultChecked={false} />
        <label
          className="tab"
          htmlFor="radio-1"
          onClick={() => setActiveTab("Party")}
        >
          🎉 Party
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label
          className="tab"
          htmlFor="radio-2"
          onClick={() => setActiveTab("Match")}
        >
          Matchs
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label
          className="tab"
          htmlFor="radio-3"
          onClick={() => setActiveTab("Streams")}
        >
          Streams
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default TabBar;
