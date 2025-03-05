import React, { useState } from 'react';
import './Cadastro.css'; // Supondo que você tenha um arquivo CSS

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, nome, telefone, senha, dataNascimento };

    try {
      const response = await fetch('http://localhost:5000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Cadastro realizado com sucesso!');
        // Redirecionar ou exibir uma mensagem de sucesso
      } else {
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro na comunicação com o servidor:', error);
    }
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <h2>Cadastrar</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
