import Header from "../components/Header/Header";
import MainBoard from "../components/MainBoard/MainBoard";
import CategorySeccion from "../components/CategorySeccion/CategorySeccion";

export default function Principal() {
  return (
    <div className="container">
      <section>
        <Header></Header>
        <MainBoard></MainBoard>
        <CategorySeccion></CategorySeccion>
      </section>
    </div>
  );
}
