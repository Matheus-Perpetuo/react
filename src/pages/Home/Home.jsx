import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa o hook para navegação
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  // Função de navegação
  const handleRedirect = (path) => {
    navigate(path);  // Vai para a rota especificada
  };

  return (
    <div className="home-container">
      <h1>Bem-vindo à Home</h1>
      <div className="buttons-container">
        <button onClick={() => handleRedirect('/cadastrar')}>Cadastrar Usuário</button>
        <button onClick={() => handleRedirect('/login')}>Login</button>
        <button onClick={() => handleRedirect('/')}>Voltar para a Home</button>
      </div>
    </div>
  );
};

export default Home;
