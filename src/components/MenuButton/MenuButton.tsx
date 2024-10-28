import { useState } from "react";
import navbar from "../../data/navbar";
import "./styles/styles.css";
import { FaBars } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../Header/components/ThemeToggle/ThemeToggle";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-button-container">
      <button onClick={toggleMenu} className="menu-button">
        <FaBars color={theme === "light" ? "black" : "white"}></FaBars>
      </button>
      {isOpen && (
        <nav className="navbar-button">
          <ul>
            {navbar.map(({ name, url }) => (
              <li key={name}>
                <a href={url} className="navbar-items">
                  {name}
                </a>
              </li>
            ))}
            <ThemeToggle></ThemeToggle>
          </ul>
        </nav>
      )}
    </div>
  );
}
