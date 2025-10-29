import React from "react";
import "./contactButton.css";

const ContactButton = ({ Text = "", customStyle = {} }) => {
  return (
    <button customStyle={{}} id="btn-contato">
      <a
        href="https://api.whatsapp.com/send?phone=5524993215864&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os."
        target="_blank"
        rel="noopener noreferrer"
      >
        {Text}
      </a>
    </button>
  );
};

export default ContactButton;
