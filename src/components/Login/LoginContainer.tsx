import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInWithEmail } from "../../services/auth.service";
import Button from "../Button/Button";
import { LoginFormSchema, loginSchema } from "./schema/loginSchema";
import "./styles/styles.css";

export default function LoginContainer() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = async (data: LoginFormSchema) => {
    try {
      await signInWithEmail(data.email, data.password);
      navigate("/");
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-title">
          <div className="light-beam"></div>
          <div className="logo">
            <h1 onClick={() => navigate("/")}>Gamor</h1>
          </div>
          <h2>Login</h2>
          <p>
            We're excited to have you on board! Please choose a way to sign up
            or log in.
          </p>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)} className="login-form-form">
            <label htmlFor="email" className="login-form-label">
              <p>Email</p>
            </label>
            <input
              type="email"
              className="login-form-input"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}

            <label htmlFor="password" className="login-form-label">
              <p>Password</p>
            </label>
            <input
              type="password"
              className="login-form-input"
              {...register("password")}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}

            {error && <p className="error-message">{error}</p>}
            <Button type="submit" className="login-button">
              Login
            </Button>
            <Button onClick={() => navigate("/create-account")} className="login-signup-button">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

