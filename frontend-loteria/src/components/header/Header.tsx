import "./Header.css";
import Tutorial from "../tutorial/Tutorial";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/icon.svg" alt="Logo" className="logo-header" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/" className="lotoCheck">LotoCheck</Link>
          </li>
          <li className="nav-item">
            <p className="tutorial">Como Fazer</p>
            <div className="submenu">
              <Tutorial />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
