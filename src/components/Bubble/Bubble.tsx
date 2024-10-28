import React, { ReactNode } from "react";
import "./styles/styles.css";

interface BubbleProps {
  children?: ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({ children }) => {
  return <div className="bubble">{children}</div>;
};

export default Bubble;
