import React from "react";
import "./styles/styles.css";
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from "../../../../context/ThemeContext";

interface CategoryCardProps {
  name: string;
  url: string;
  image?: string;
  subtitle: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  subtitle,
  color,
}) => {

  const { theme } = useTheme();

  return (
    <div className="category-card">
      <div className="z-index-100">
        <span className="category-barra" style={{ color: color }}>
          /
        </span>
        <h2>{subtitle}</h2>
        <h1>{name}</h1>
        <FaArrowRight color={theme === "light"? "var(--dark)":"var(--light)"}></FaArrowRight>
      </div>
      <div className="color-hover"></div>
      <div
        className="category-card-hover"
        style={{ backgroundImage: image ? `url(${image})` : "none" }}
      />
    </div>
  );
};

export default CategoryCard;
