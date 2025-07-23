import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-navbar">
        <div className="logo">Dsander <span>Site</span></div>
        <nav>
          <ul>
            <li><a href="/Login">Entrar</a></li>
            <li><a href="/CadastroVagas">Cadastrar Vagas</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo ao Dsander Site!</h1>
          <p>
            Explore um mundo de oportunidades e informações em um só lugar. Fique à vontade para navegar e saber mais.
          </p>
          <button className="cta-button">Saiba Mais</button>
        </div>
      </section>
    </div>
  );
}

export default Home;