import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    tipoProjeto: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/contato.php", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Mensagem enviada com sucesso!");
      setFormData({
        nome: "",
        tipoProjeto: "",
        whatsapp: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section className="FormsSection" id="formulario">
      <div className="formulario">
        <div className="tituloForms">
          <h1>
            Vamos tirar sua ideia<br></br>do papel?
          </h1>
          <p>
            Preencha o formulário abaixo com seus dados e me conte sobre seu
            projeto. Seja um site, aplicativo ou identidade visual, estou pronto
            para ajudar você a transformar sua visão em realidade.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="formContainer">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="tipoProjeto"
            placeholder="Tipo de projeto (ex: site, app, marca...)"
            value={formData.tipoProjeto}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="Seu WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensagem"
            placeholder="Fale um pouco sobre o que você precisa..."
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            required
          />

          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
