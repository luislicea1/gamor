import { useNavigate } from "react-router-dom";
import Button from "../../../Button/Button";
import Ring from "../../../Ring/Ring";
import Line from "../../../Line/Line";
import { useTheme } from "../../../../context/ThemeContext";
import Title from "./components/Title/Title";
import "./styles/styles.css"

export default function TitleSpace() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const isLoggedIn = sessionStorage.getItem("user");
  return (
    <div className="container-title-space">
      <Ring
        top="15%"
        left="5%"
        className="ring-title"
        width="70%"
        height="20%"
      ></Ring>
      <Ring
        top="25%"
        left="5%"
        className="ring-title"
        width="70%"
        height="20%"
      ></Ring>
      <Ring
        top="35%"
        left="5%"
        className="ring-title"
        width="70%"
        height="20%"
      ></Ring>
      <div className="title-space">
        <Title style={{ fontSize: "3rem", fontWeight: "bolder", zIndex: "10" }}>
          start
        </Title>
        <Title style={{ fontSize: "3rem", fontWeight: "bolder", zIndex: "10", color: theme === "light"? "#fe8944":"#7e34ee" }}>
          streaming
        </Title>
        <Title style={{ fontSize: "3rem", fontWeight: "bolder", zIndex: "10" }}>
          games
        </Title>
        <Title style={{ fontSize: "3rem", fontWeight: "bolder", zIndex: "10" }}>
          diferently
        </Title>
      </div>
      <div className="phrase">
        <p>gamor now has stream party platform</p>
        <div className="line-position">
          <Line width="230" height="480" color={theme === "light"? "#7e34ee":"#fe8944"}></Line>
        </div>
      </div>
      <div className="title-space-buttons">
        {!isLoggedIn ? (
          <>
            <Button
              className="title-space-create-accont-button"
              onClick={handleCreateAccount}
            >
              <p>Create Account</p>
            </Button>
            <Button className="header-login-button" onClick={handleLogin}>
              <p>Login</p>
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}
