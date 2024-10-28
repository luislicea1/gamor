import "./styles/styles.css";
import React from "react";

interface RingProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

const Ring: React.FC<RingProps> = ({
  width,
  height,
  top,
  left,
  right,
  bottom,
  className,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: top || "auto",
    left: left || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
    width: width,
    height: height,
    borderRadius: "50%",
    borderTop: "1px solid transparent",
    borderRight: "1px solid",
    borderBottom: "1px solid",
    borderLeft: "1px solid",
  };

  return <div style={style} className={className}></div>;
};

export default Ring;
