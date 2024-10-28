import "./styles/styles.css";
import TitleSpace from "./Components/TitleSpace/TitleSpace";
import GameDemo from "./Components/GameDemo/GameDemo";
import ChoosePlatform from "./Components/ChoosePlatform/ChoosePlatform";

export default function MainBoard() {
  return (
    <div className="container-main-board">
      <TitleSpace></TitleSpace>
      <GameDemo></GameDemo>
      <ChoosePlatform></ChoosePlatform>
    </div>
  );
}
