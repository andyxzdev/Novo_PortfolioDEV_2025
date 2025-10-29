import React from "react";
import WhatsappIcon from "../../assets/icons/whatsappIcon.png";
import "./whatsappButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5524993215864";
  const message = "Olá, gostaria de fazer um orçamento para o meu projeto!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">
      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <img src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
