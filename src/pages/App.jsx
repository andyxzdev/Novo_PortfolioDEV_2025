import React, { useEffect } from "react";
import "./App.css";
import "../styles/globalStyles.css";
import Header from "../components/header/header.jsx";
import "../components/header/header.css";
import TagPage from "../components/tagsPage/tagPage.jsx";
import "../components/tagsPage/tagPage.css";
import ImagemApresentacao from "../assets/arts/foto2.png";
import ImagemSoluctions from "../assets/arts/artes22-1080.png";
import Icon1Stats from "../assets/icons/iconteste 1.png";
import ClienteImg1 from "../assets/clients/imagem1.png";
import ClienteImg2 from "../assets/clients/imagem2.png";
import ClienteImg3 from "../assets/clients/imagem3.png";
import ImageForms from "../assets/arts/art3-1.png";
import ContactForm from "../components/contactForm/ContactForm.jsx";
import ContactButton from "../components/contactButton/contactButton.jsx";
import "../components/contactButton/contactButton.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer/footer.jsx";
import WhatsAppButton from "../components/whatsappButton/whatsappButton.jsx";
import ImageTecnologias from "../assets/arts/artes2.png";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <section className="Home" id="home"></section>

      <section className="Apresentation" id="sobre">
        <div className="infos" data-aos="fade-left">
          <TagPage
            Text="Sobre"
            customStyle={{
              paddingLeft: "35px",
            }}
          />
          <h1>Apresentação</h1>
          <p>
            Olá, me chamo Andy e sou um desenvolvedor mobile & web apaixonado
            por tecnologia e inovação. Combinando criatividade e código, crio
            experiências digitais atraentes e funcionais. Meu foco é desenvolver
            soluções que encantam os usuários e resolvem problemas reais com
            agilidade e eficiência.
          </p>
          <ContactButton Text="Quero um orçamento" />
        </div>
        <div className="image" data-aos="fade-right">
          <img
            src={ImagemApresentacao}
            alt="imagem apresentação"
            style={{ width: "40em", height: "auto" }}
          />
        </div>
      </section>

      <section className="Services" id="servicos">
        <div className="imageSoluctions">
          <img
            src={ImagemSoluctions}
            alt="imagem soluçôes"
            data-aos="fade-right"
          />
        </div>
        <div className="infos" data-aos="fade-left">
          <TagPage Text="Serviços" customStyle={{ paddingLeft: "25px" }} />
          <h1>
            Soluções que elevam<br></br>seu negócio
          </h1>
          <p>
            <span>Desenvolvimento Mobile:</span> Aplicativos modernos e
            intuitivos para iOS e Android, garantindo performance e usabilidade.
            <br></br> <br></br>
            <span>Desenvolvimento Web:</span> Construção de sites e interfaces
            interativas com foco em desempenho, acessibilidade e design
            responsivo.<br></br> <br></br>
            <span>Identidade Visual:</span> Criação de logotipos, paleta de
            cores e elementos visuais para o seu projeto web ou app,
            fortalecendo sua marca e destacando seu negócio.
          </p>
          <ContactButton Text="Entrar em contato" />
        </div>
      </section>

      <section className="Technologies" id="tecnologias">
        <div className="infos" data-aos="fade-up">
          <TagPage Text="Tecnologias" customStyle={{ paddingLeft: "10px" }} />
          <h1>
            Do back-end<br></br>ao front-end
          </h1>
          <p>
            Com um domínio das principais tecnologias do desenvolvimento
            moderno, entrego soluções completas, da lógica de sistemas ao visual
            que encanta. Trabalho com foco em performance, responsividade e
            código limpo para garantir qualidade em cada linha.
          </p>

          <ContactButton Text="Saiba mais" />
        </div>

        <img src={ImageTecnologias} alt="" data-aos="fade-down" />
      </section>

      <section className="Projects" id="projetos">
        <div className="titleSection" data-aos="fade-left">
          <TagPage Text="Portfólio" customStyle={{ paddingLeft: "25px" }} />
          <h1>Projetos</h1>
          <h3>Clique no projeto para ver mais!</h3>
        </div>
        <div className="coluna1-horizontal">
          <a href="https://www.instagram.com/" target="_blank">
            <button className="img1" data-aos="fade-left"></button>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <button className="img2" data-aos="fade-up"></button>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <button className="img3" data-aos="fade-right"></button>
          </a>
        </div>

        <div className="imageCentro" data-aos="fade-up"></div>

        <div className="coluna2-horizontal">
          <a href="https://www.instagram.com/" target="_blank">
            <button className="img1" data-aos="fade-left"></button>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <button className="img2" data-aos="fade-up"></button>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <button className="img3" data-aos="fade-right"></button>
          </a>
        </div>
      </section>

      <section className="Feedbacks" id="feedbacks">
        <div className="clienteTitulo" data-aos="fade-up">
          <TagPage Text="Feedbacks" customStyle={{ paddingLeft: "17px" }} />
          <h1>O que meus clientes dizem</h1>
          <p>Confiança e resultados comprovados</p>
        </div>

        <div className="divQuadrados">
          <div className="quadrado" data-aos="fade-left">
            <div className="fotoCliente">
              <img src={ClienteImg1} alt="imagem cliente" />
            </div>
            <h1 className="nomeCliente">Ana</h1>
            <p>“A Unity revolucionou nossa presença online. Recomendo”</p>
          </div>

          <div className="quadrado" data-aos="fade-down">
            <div className="fotoCliente">
              <img src={ClienteImg2} alt="imagem cliente" />
            </div>
            <h1 className="nomeCliente">Carlos</h1>
            <p>“O app que desenvolveram superou nossas expectativas”</p>
          </div>

          <div className="quadrado" data-aos="fade-right">
            <div className="fotoCliente">
              <img src={ClienteImg3} alt="imagem cliente" />
            </div>
            <h1 className="nomeCliente">Ricardo</h1>
            <p>“Melhor investimento que fizemos em marketing digital”</p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer></Footer>
      <WhatsAppButton />
    </>
  );
};

export default App;
