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
            <a href="#home">inicio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#feedbacks">Feedbacks</a>
          </li>
          <li>
            <a href="#formulario">Fazer orçamento</a>
          </li>
        </ul>
        <button className="ButtHeader">Entre em contato</button>
      </nav>
    </header>
  );
};

export default Header;
