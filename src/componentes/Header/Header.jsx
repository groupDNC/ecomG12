import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <div>
      <header className="headerHome">
        <div className="headerHome__div">
          <img src="/logoDNC.svg" alt="Logo" height="60px" /> {/* Exibe o logotipo da empresa */}
          <input
            className="headerHome__div__input"
            type="text"
            placeholder="O que você está procurando?" /* Cria um campo de entrada de texto para pesquisar */
          />
          <img src="/car.svg" alt="Carrinho" height="60px" /> {/* Exibe um ícone de carrinho de compras */}
        </div>
        <nav className="headerHome__nav">
          <h3>Novidades</h3> {/* Exibe um link para a seção de novidades */}
          <h3>Jogos</h3> {/* Exibe um link para a seção de jogos */}
          <h3>Vídeo Games</h3> {/* Exibe um link para a seção de videogames */}
          <h3>Mesas Gamer</h3> {/* Exibe um link para a seção de mesas gamer */}
          <h3>Promoções</h3> {/* Exibe um link para a seção de promoções */}
          <h3>Atendimento</h3> {/* Exibe um link para a seção de atendimento */}
        </nav>
      </header>
    </div>
  );
};

export default Header;
