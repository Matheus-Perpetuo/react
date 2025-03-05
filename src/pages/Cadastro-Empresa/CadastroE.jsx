import React, { useState } from 'react';
import './Cadastro.css'; // Estilo específico para a tela de cadastro

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados ou validar
    console.log({ email, nome, telefone, senha, dataNascimento });
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2 className="cadastro-title">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              type="date"
              id="dataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="cadastro-btn">Cadastrar</button>
            <a href="/Login" className="login-link">Já possui cadastro? Faça login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
