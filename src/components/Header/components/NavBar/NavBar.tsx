import navbar from "../../../../data/navbar";
import "./styles/styles.css";

export default function NavBar() {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <ul>
          {navbar.map(({ name, url }) => (
            <li>
              <a href={url} className="navbar-items">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
