import React, { useState } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cpf.length !== 11) {
      setError('CPF inválido');
      return;
    } else if (password.length < 8) {
      setError('Senha deve ter no mínimo 8 caracteres');
        return;
    }
    navigate("/Home");
  };

  return (
    <div>
      <header className="headerLogin">
        <img src="/logoDNC.svg" alt="LogoDNC" width="164px" height="82px" />
      </header>
      <section className="sectionLogin">
        <h2 className="sectionLogin__h2">
          Acesse com seu login ou cadastre-se!
        </h2>
        <h3 className="sectionLogin__h3">você pode entrar com o seu CPF</h3>
        <form onSubmit={handleSubmit} className="divInput">
          <label className="divInput__label">Digite seu CPF:</label>
          <input
            className="divInput__input"
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <label className="divInput__label">Senha:</label>
          <input
            className="divInput__input"
            type="password"
            placeholder="***************"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p>{error}</p>
          <button type="submit" className="divInput__button">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
