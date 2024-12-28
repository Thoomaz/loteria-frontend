import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#como-fazer">Como fazer</a>
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
};

export default Header;
