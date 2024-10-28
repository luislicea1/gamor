import React from "react";
import { useTheme } from "../../../../context/ThemeContext";
import "./styles/style.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" onClick={toggleTheme} checked={theme === "dark"} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
