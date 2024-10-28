import "./styles/styles.css";
import GameLogoImage from "../../../../assets/images/pngimg.com - fortnite_PNG177.webp";
import GameDarkLogoImage from "../../../../assets/images/pngimg.com - fortnite_PNG125.webp";
import ExtraImageLight1 from "../../../../assets/images/pngimg.com - fortnite_PNG126.webp";
import ExtraImageLight2 from "../../../../assets/images/pngegg.webp";
import ExtraImageDark1 from "../../../../assets/images/pngimg.com - fortnite_PNG177.webp";
import ExtraImageDark2 from "../../../../assets/images/pngimg.com - fortnite_PNG180.webp";
import Clock from "../Clock/Clock";
import Bubble from "../../../Bubble/Bubble";
import { FaUser, FaHeart, FaEye } from "react-icons/fa";
import { useTheme } from "../../../../context/ThemeContext";
import BubbleGamePlayer from "./components/BubbleGamePlayer";
import Ring from "../../../Ring/Ring";
import selectedGamesStore from "../../../../utils/selectedGamesStore"; 
import { useEffect, useState } from "react";

export default function GameDemo() {
  const { theme } = useTheme();
  const [selectedGame, setSelectedGame] = useState(
    selectedGamesStore.getSelectedGame(),
  );

  useEffect(() => {
    const listener = (game: string) => setSelectedGame(game);
    selectedGamesStore.addListener(listener);

    return () => {
      selectedGamesStore.removeListener(listener);
    };
  }, []);

  return (
    <div className="container-game-demo">
      <div className="game-title-selected">
        <h2 className="h2-game-title">{selectedGame}</h2>{" "}
        <h4 className="h4-game-player">Join Leave Stream</h4>
      </div>
      <div className="game-clock">
        <div className="game-clock-center">
          <div className="game-clock-bubble-container">
            <Bubble>
              <FaUser size={24} color="white"></FaUser>
            </Bubble>
          </div>
          <Clock></Clock>
        </div>
      </div>
      <img
        src={theme === "light" ? GameLogoImage : GameDarkLogoImage}
        alt=""
        className="game-logo-image"
      />
      <Ring
        bottom="20%"
        left="10%"
        className="ring ring-game-demo"
        width="70%"
        height="30%"
      ></Ring>
      {theme === "light" ? (
        <>
          <BubbleGamePlayer
            src={ExtraImageLight1}
            alt="game-logo-player-1"
            top="35%"
            left="5%"
          />
          <BubbleGamePlayer
            src={ExtraImageLight2}
            alt="game-logo-player-1"
            top="45%"
            right="5%"
            children={
              <div
                style={{
                  background: "black",
                  width: "35px",
                  height: "35px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%",
                  padding: "10px",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                }}
              >
                <FaHeart color="white"></FaHeart>
              </div>
            }
          />
        </>
      ) : (
        <>
          <BubbleGamePlayer
            src={ExtraImageDark1}
            alt="game-logo-player-1"
            top="60%"
            left="5%"
            children={
              <div
                style={{
                  background: "black",
                  width: "35px",
                  height: "35px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%",
                  padding: "10px",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                }}
              >
                <FaEye color="white"></FaEye>
              </div>
            }
          />
          <BubbleGamePlayer
            src={ExtraImageDark2}
            alt="game-logo-player-1"
            top="35%"
            right="5%"
          />
        </>
      )}
    </div>
  );
}
