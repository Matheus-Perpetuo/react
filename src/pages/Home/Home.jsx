import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">Dsander <span>Site</span></div>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/Login">Login</a></li>
            <li><a href="/Cadastro">Cadastro</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="phone-number">📞 (##) ####-####</div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Teste</h1>
          <p>
            Texto
          </p>
          <button className="cta-button">Saiba Mais</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
