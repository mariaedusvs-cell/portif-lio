import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// Página Home
function Home() {
  return (
    <div className="pagina">
      <h1>Meu Portfólio</h1>

      <p>
        Seja bem-vindo(a)! Sou Maria Eduarda, estudante de
        tecnologia, programação e desenvolvimento web. Aqui você encontrará
        alguns dos meus projetos e um pouco sobre minha trajetória.
      </p>

      <Link to="/sobre">
        <button>Conheça mais sobre mim</button>
      </Link>
    </div>
  );
}

// Página Sobre
function Sobre() {
  return (
    <div className="pagina">
      <h1>Sobre Mim</h1>

      <p>
        Atualmente estudo desenvolvimento de software e busco
        aprender novas tecnologias. Gosto de criar interfaces modernas e
        experiências agradáveis para os usuários.
      </p>

      <p>
        Entre minhas áreas de interesse estão React, JavaScript, design de
        interfaces e desenvolvimento de aplicações web.
      </p>

      <p>
        Obtive todo o meu conhecimento atraves do Instituto Federal do Rio de Janeiro e ainda sigo participando do curso tecnico em informática
      </p>

      <Link to="/projetos">
        <button>Ver meus projetos</button>
      </Link>
    </div>
  );
}

// Página Projetos
function Projetos() {
  return (
    <div className="pagina">
      <h1>Meus Projetos</h1>

      <ul>
        <li>
          <strong>🌐 Site Pessoal</strong>
          <p>
            Desenvolvimento de um site com interface moderna e navegação
            intuitiva, aplicando conceitos de HTML, CSS e JavaScript.
          </p>

          {/* Substitua o link abaixo pelo link real do seu site */}
          <a
            href="https://qxqq85.csb.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar Site</button>
          </a>
        </li>

        <li>
          <strong> Mão Robótica</strong>
          <p>
            Projeto de robótica desenvolvido para simular movimentos de uma luva, integrando conceitos de eletrônica e programação.
          </p>
        </li>

        <li>
          <strong> Banco de Dados</strong>
          <p>
            Desenvolvimento e modelagem de banco de dados, com criação de
            tabelas, relacionamentos e consultas para organização eficiente das
            informações.
          </p>
        </li>

        <li>
          <strong> Reprodução da Página do Spotify</strong>
          <p>
            Criação de uma interface inspirada no Spotify, utilizando React e
            CSS para reproduzir o design e funcionalidades básicas de um player
            de música.
          </p>
          <a
            href="https://docs.google.com/document/d/1rUknDFoF0kLNSEx6-vHmaOMPNkMbbLKc/edit?usp=sharing&ouid=115536703796535780164&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar Interface</button>
          </a>
        </li>

        <li>
          <strong> Jogo Interativo</strong>
          <p>
            Desenvolvimento de um jogo utilizando a plataforma Unity e seus recursos.
          </p>
          <a
            href="https://drive.google.com/file/d/1eL77Zq2TvKF5TJdfkY6VBugHi1O9GYfV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar Jogo</button>
          </a>
        </li>
      </ul>

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <nav className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "ativo" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? "ativo" : ""
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/projetos"
            className={({ isActive }) =>
              isActive ? "ativo" : ""
            }
          >
            Projetos
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;