import React, { ReactNode } from "react";
import "./styles/styles.css";

interface BubbleGamePlayerProps {
  src: string;
  alt: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  children?: ReactNode;
}

const BubbleGamePlayer: React.FC<BubbleGamePlayerProps> = ({
  src,
  alt,
  top,
  left,
  right,
  bottom,
  children,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: top || "auto",
    left: left || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
    padding: "10px",
    display: "grid",
    placeContent: "center",
  };

  return (
    <div style={style} className="section-bubble-game-player">
      <div className="container-bubble-game-player">
        <img src={src} alt={alt} className="image-bubble-game-player" />
      </div>
      <div className="children-bubble-game-player">{children}</div>
    </div>
  );
};

export default BubbleGamePlayer;
