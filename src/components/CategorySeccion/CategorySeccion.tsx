import CategoryTitle from "./components/CategoryTitle/CategoryTitle";
import "./styles/styles.css";
import CategoryCard from "./components/CategoryCards/CategoryCard";
import category from "../../data/category";

export default function CategorySeccion() {
  return (
    <div className="category-seccion">
      <CategoryTitle></CategoryTitle>
      <div className="list-category-cards">
        {category.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              name={item.name}
              url={item.url}
              image={item.image}
              subtitle={item.subtitle}
              color={item.color}
            ></CategoryCard>
          );
        })}
        <CategoryCard
          name="View all"
          url="#"
          subtitle="08"
          color="transparent"
        ></CategoryCard>
      </div>
    </div>
  );
}
