import React from "react";
import "./header.css";
import logo from "../../assets/logo/logodevbranc.png";

const Header = ({ customStyle }) => {
  return (
    <header className="header" style={customStyle}>
      <div className="LogoDiv">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#portfolio">Tecnologias</a>
          </li>
          <li>
            <a href="#portfolio">Projetos</a>
          </li>
          <li>
            <a href="#feedbacks">Feedbacks</a>
          </li>
          <li>
            <a href="#feedbacks">Enviar projeto</a>
          </li>
        </ul>
        <button className="ButtHeader">Entre em contato</button>
      </nav>
    </header>
  );
};

export default Header;
