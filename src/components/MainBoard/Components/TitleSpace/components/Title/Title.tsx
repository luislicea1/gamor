import React from "react";

interface TitleProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, style, className }) => {
  return (
    <h3 style={style} className={className}>
      {children}
    </h3>
  );
};

export default Title;
