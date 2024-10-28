import React, { ReactNode } from "react";
import "./styles/styles.css";

interface BubbleProps {
  children?: ReactNode;
  className?: string;
}

const Bubble: React.FC<BubbleProps> = ({ children, className}) => {
  return <div className={className}>{children}</div>;
};

export default Bubble;
