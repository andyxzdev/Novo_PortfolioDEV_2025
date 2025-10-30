import React, { useState } from "react";
import axios from "axios"; // axios é usado para fazer requisições HTTP, que nesse caso é pro envio do formulario
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    //form data é o estado que guarda os dados do formulário
    //e o setFormData é a função que atualiza esse estado
    nome: "",
    tipoProjeto: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    //e é o evento que ocorre quando o usuário digita algo no formulário
    //handleChange é a função que atualiza o estado do formulário
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    //asyn é usado para fazer requisições assíncronas, ou seja, que não bloqueiam a execução do código
    //handleSubmit é a função que envia os dados do formulário
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/contato", formData); //await é usado para esperar a resposta da requisição antes de continuar a execução do código
      //axios.post é usado para enviar os dados do formulário para o servidor
      alert("Mensagem enviada com sucesso!");
      setFormData({
        nome: "",
        tipoProjeto: "",
        whatsapp: "",
        mensagem: "",
      });
    } catch (error) {
      //catch é usado para tratar erros que podem ocorrer durante a requisição
      //se ocorrer um erro, ele será tratado aqui
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
