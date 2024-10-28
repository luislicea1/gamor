import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import NavButtons from "./components/NavButtons/NavButtons";
import "./styles/styles.css";
import MenuButton from "../MenuButton/MenuButton";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      {!isMobile && <NavBar />}
      <HeaderTitle />
      {!isMobile && <NavButtons />}
      {isMobile && <MenuButton />}
    </header>
  );
};

export default Header;
