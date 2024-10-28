import "./styles/styles.css";
import Bubble from "../../../Bubble/Bubble";

export default function HeaderTitle() {
  return (
    <div className="container-header-title">
      <div className="header-title">
        <div className="container-bubble">
          <Bubble></Bubble>
        </div>
        <h1>Gamor</h1>
      </div>
    </div>
  );
}
