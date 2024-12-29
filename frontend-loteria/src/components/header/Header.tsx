import "./Header.css";
import Tutorial from "../tutorial/Tutorial";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#como-fazer">Como Fazer</a>
            <div className="submenu">
              <Tutorial />
            </div>
          </li>
          <li>
            <a href="#tabela">Tabela</a>
          </li>
          <li>
            <a href="#mega-sena">Mega-sena</a>
          </li>
          <li>
            <a href="#lotofacil">Lotofácil</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
