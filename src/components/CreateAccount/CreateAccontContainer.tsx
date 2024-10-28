import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUpNewUser } from "../../services/auth.service";
import Button from "../Button/Button";
import {
  RegisterFormSchema,
  registerSchema,
} from "./schema/registerUserSchema";
import "./styles/styles.css";

export default function CreateAccount() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      await signUpNewUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account">
        <div className="create-account-title">
        <div className="light-beam"></div>
          <div className="logo">
            <h1 onClick={() => navigate("/")}>Gamor</h1>
          </div>
          <h2>Create Account</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="create-account-form-form"
        >
          <label htmlFor="email" className="create-account-form-label">
            <p>Email</p>
          </label>
          <input
            type="email"
            className="create-account-form-input"
            {...register("email")}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="create-account-form-label">
            <p>Password</p>
          </label>
          <input
            type="password"
            className="create-account-form-input"
            {...register("password")}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}

          <Button type="submit" className="login-button">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}