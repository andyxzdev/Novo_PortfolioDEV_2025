import React from "react";
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

function App() {
  return (
    <>
      <Header />
      <section className="Home"></section>

      <section className="Apresentation">
        <div className="infos">
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
        </div>
        <div className="image">
          <img
            src={ImagemApresentacao}
            alt="imagem apresentação"
            style={{ width: "40em", height: "auto" }}
          />
        </div>
      </section>

      <section className="Soluctions">
        <div className="imageSoluctions">
          <img src={ImagemSoluctions} alt="imagem soluçôes" />
        </div>
        <div className="infos">
          <TagPage Text="Serviços" customStyle={{ paddingLeft: "25px" }} />
          <h1>Soluções que Elevam Seu Negócio</h1>
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
        </div>
      </section>

      <section className="Technologies">
        <div className="infos">
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
        </div>
      </section>

      <section className="Projects">
        <div className="titleSection">
          <TagPage Text="Portfólio" customStyle={{ paddingLeft: "25px" }} />
          <h1>Projetos</h1>
        </div>
        <div className="coluna1-horizontal">
          <div className="img1"></div>
          <div className="img1"></div>
          <div className="img1"></div>
        </div>
        <div className="imageCentro"></div>
        <div className="coluna2-horizontal">
          <div className="img1"></div>
          <div className="img1"></div>
        </div>
      </section>

      <section className="Statistcs">
        <div className="stats1">
          <img
            src={Icon1Stats}
            alt="icon-stats"
            style={{ width: "130px", height: "auto" }}
          />
          <h3>
            +150 clientes<br></br>satisfeitos
          </h3>
        </div>

        <div className="stats1">
          <img
            src={Icon1Stats}
            alt="icon-stats"
            style={{ width: "130px", height: "auto" }}
          />
          <h3>
            +150 clientes<br></br>satisfeitos
          </h3>
        </div>

        <div className="stats1">
          <img
            src={Icon1Stats}
            alt="icon-stats"
            style={{ width: "130px", height: "auto" }}
          />
          <h3>
            +150 clientes<br></br>satisfeitos
          </h3>
        </div>

        <div className="stats1">
          <img
            src={Icon1Stats}
            alt="icon-stats"
            style={{ width: "130px", height: "auto" }}
          />
          <h3>
            +150 clientes<br></br>satisfeitos
          </h3>
        </div>

        <div className="stats1">
          <img
            src={Icon1Stats}
            alt="icon-stats"
            style={{ width: "130px", height: "auto" }}
          />
          <h3>
            +150 clientes<br></br>satisfeitos
          </h3>
        </div>
      </section>

      <section className="Feedbacks">
        <div className="clienteTitulo">
          <TagPage Text="Feedbacks" customStyle={{ paddingLeft: "17px" }} />
          <h1>O que nossos clientes dizem</h1>
          <p>Confiança e resultados comprovados</p>
        </div>

        <div className="divQuadrados">
          <div className="quadrado">
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

      <section className="FormsSection">
        <img
          src={ImageForms}
          alt="imagem-final"
          style={{ width: "60em", height: "auto", marginLeft: "-180px" }}
        />
        <div className="formulario">
          <div className="tituloForms">
            <h1>
              Vamos tirar sua ideia do papel?<br></br>
              <h3>Fale comigo agora!</h3>
            </h1>
            <p>
              Preencha o formulário abaixo com seus dados e me conte sobre seu
              projeto. Seja um site, aplicativo ou identidade visual, estou
              pronto para ajudar você a transformar sua visão em realidade com
              agilidade, qualidade e design de alto nível.
            </p>
          </div>

          <form>
            <input type="text" placeholder="Nome" />
            <input
              type="text"
              placeholder="Tipo de projeto (ex: site, logo, app etc)"
            />
            <input type="tel" placeholder="WhatsApp" />
            <input type="text" placeholder="Mensagem" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer">
          <h1>footer</h1>
          <p>Desenvolvedor Mobile & Web</p>
        </div>
      </footer>
    </>
  );
}

export default App;
