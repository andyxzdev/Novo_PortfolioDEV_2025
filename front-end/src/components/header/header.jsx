import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo/logodevbranc.png";

const Header = ({ customStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header" style={customStyle}>
      <div className="LogoDiv">
        <img src={logo} alt="logo" />
      </div>

      <button className="menu-toggle" type="button" aria-label="Abrir menu" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <li>
            <a href="#home" onClick={toggleMenu}>
              inicio
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={toggleMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={toggleMenu}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={toggleMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#feedbacks" onClick={toggleMenu}>
              Feedbacks
            </a>
          </li>
          <li>
            <a href="#formulario" onClick={toggleMenu}>
              Fazer orçamento
            </a>
          </li>
        </ul>

        <button
          className="ButtHeader"
          onClick={() => window.open("https://wa.me/5524993215864", "_blank")}
        >
          Entre em contato
        </button>
      </nav>
    </header>
  );
};

export default Header;
