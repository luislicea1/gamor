import React from "react"; // Asegúrate de importar React
import { useNavigate } from "react-router-dom";
import { signOut } from "../../../../services/auth.service";
import Button from "../../../Button/Button";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./styles/styles.css";

const NavButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    signOut();
    navigate("/");
  };
  const user = sessionStorage.getItem("user");
  return (
    <div className="container-nav-buttons">
      <ThemeToggle />
      {user ? (
        <>
          <Button onClick={handleLogout} className="header-login-button">
            <p>Logout</p>
          </Button>
          <p>
            Welcome <b>{JSON.parse(user).email.split("@")[0]}!</b>
          </p>
        </>
      ) : (
        <>
          <Button
            onClick={handleCreateAccount}
            className="header-create-accont-button"
          >
            <p>Create Account</p>
          </Button>
          <Button onClick={handleLogin} className="header-login-button">
            <p>Login</p>
          </Button>
        </>
      )}
    </div>
  );
};

export default NavButtons;
