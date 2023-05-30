import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  return (
    <section className="home__card">
      <img
        className="home__card-productsCard"
        src={data.imgPathDetail}
        alt="produto"
      />
      <div className="home__card-description">
        <p>{data.description}</p>
      </div>
      <button className="home__card-button">
        <Link to={`/productsPage/${data.id}`}>Ver mais</Link> {/* Cria um link para a página de detalhes do produto com base no seu ID */}
      </button>
    </section>
  );
};

export default Products;
