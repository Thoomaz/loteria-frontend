import "./Header.css";
import Tutorial from "../Tutorial/Tutorial";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src="/icon.svg" alt="Logo" className="logo-header" />
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <a >Como Fazer</a>
            <div className="submenu">
              <Tutorial />
            </div>
          </li>
          <li><Link to="/megasena">Mega-sena</Link></li>
          <li><Link to="/lotofacil">Lotofácil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
