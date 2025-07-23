import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import "./Cadastro.css"

function Cadastro() {
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    document.body.classList.add("cadastro-page");

    return () => {
      document.body.classList.remove("cadastro-page");
    };
  }, []);

  return (
    <div className="cadastro-container">
      {/* Seta para voltar */}
      <div className="voltar" onClick={() => navigate("/login")}>
        
        &#8592; {/* Código HTML para seta esquerda */}
      </div>

      <h2>Cadastro</h2>
      <div className="cadastro-input-group">
        <label>Nome:</label>
        <input type="text" />
      </div>
      <div className="cadastro-input-group">
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className="cadastro-input-group">
        <label>Senha:</label>
        <input type="password" />
      </div>
      <div className="cadastro-input-group">
        <label>Data de Nascimento:</label>
        <input type="date" />
      </div>
      <button className="cadastro-btn">Cadastrar</button>
    </div>
  );
}

export default Cadastro;
