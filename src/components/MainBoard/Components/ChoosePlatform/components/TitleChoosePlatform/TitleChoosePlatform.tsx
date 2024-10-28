import React from "react";
import "./styles/styles.css";

interface TitleChoosePlatformProps {
  number: string;
  title: string;
}

const TitleChoosePlatform: React.FC<TitleChoosePlatformProps> = ({
  number,
  title,
}) => {
  return (
    <div className="title-choose-platform-container">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleChoosePlatform;
