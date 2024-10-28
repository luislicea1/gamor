import React, { ReactNode } from "react";
import "./styles/styles.css";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type,
}) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
