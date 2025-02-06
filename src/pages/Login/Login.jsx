import {FaUser, FaLock } from "react-icons/fa"
import { useState } from "react";
import "./Login.css";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassord] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " - " + password);
    };

  return (
    <div className="container">
        <div>
            <a href="/">X</a>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className = "input-field">
                <FaUser className="icon" />
                <input type="email" placeholder='E-mail' 
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className = "input-field">
                <FaLock className="icon" />
                <input type="password" placeholder='Senha'
                onChange={(e) => setPassord(e.target.value)} />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembrar do Login
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta ? <a href="#">Registrar</a>
                </p>
            </div>
           
        </form>
    </div>
  )
}

export default Login
