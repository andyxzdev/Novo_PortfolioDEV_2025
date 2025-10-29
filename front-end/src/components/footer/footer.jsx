import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logodevbranc.png";

const Footer = ({ customStyle }) => {
  return (
    <footer>
      <div className="collunmCenter">
        <img src={logo} alt="#" data-aos="fade-down" />
        <div className="icones">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            data-aos="fade-left"
          >
            <i class="bi bi-instagram"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            data-aos="fade-up"
          >
            <i class="bi bi-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            data-aos="fade-left"
          >
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
      <p> © 2025 Andyxdev | todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
