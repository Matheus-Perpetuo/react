import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroVagas.css";

function CadastroVagas() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("cadastro-vagas-page");

    return () => {
      document.body.classList.remove("cadastro-vagas-page");
    };
  }, []);

  return (
    <div className="cadastro-vagas-container">
      {/* Seta para voltar */}
      <div className="voltar" onClick={() => navigate("/")}>
        &#8592;
      </div>

      <h2>Cadastro de Vaga</h2>

      <div className="cadastro-vagas-input-group">
        <label>Nome da Empresa:</label>
        <input type="text" />
      </div>

      <div className="cadastro-vagas-input-group">
        <label>Vagas Disponíveis:</label>
        <input type="number" min="1" />
      </div>

      <div className="cadastro-vagas-input-group">
        <label>Salário:</label>
        <input type="text" placeholder="R$ 0,00" />
      </div>

      <div className="cadastro-vagas-input-group">
        <label>Data de Começo:</label>
        <input type="date" />
      </div>

      <button className="cadastro-vagas-btn">Cadastrar Vaga</button>
    </div>
  );
}

export default CadastroVagas;
