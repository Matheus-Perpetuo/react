import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas
import { FaArrowLeft } from 'react-icons/fa'; // Ícone de seta para voltar
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha, lembrar });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Ícone de voltar */}
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        
        <h2 className="login-title">Login</h2>
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
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {/* Checkbox "Lembrar senha" */}
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={lembrar}
                onChange={() => setLembrar(!lembrar)}
              />
              Lembrar senha
            </label>
            <a href="#" className="forgot-password">Esqueci minha senha</a>
          </div>

          <div className="form-buttons">
            <button type="submit" className="login-btn">Entrar</button>
            <a href="/cadastro" className="register-link">Não possui cadastro? Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
