import React from "react";
import "./index.scss";

const ProductDetail = ({ data }) => {
  return (
    <div className="productDetail">
      {/* Seção esquerda */}
      <section className="productDetail__left">
        {/* Imagem do produto */}
        <img
          className="productDetail__left-image"
          src={data.imgPathDetail}
          alt={data.description}
        />
        {/* Descrição do produto */}
        <p className="productDetail__left-p">{data.description}</p>
        {/* Título "Descrição" */}
        <h3 className="productDetail__left-description">Descrição</h3>
        {/* Parágrafo do produto */}
        <span className="underline">{data.paragraph}</span>
      </section>

      {/* Seção direita */}
      <section className="productDetail__right">
        {/* Título do produto */}
        <h1 className="productDetail__right-title underline">
          {data.description}
        </h1>
        {/* Preço do produto */}
        <h2 className="productDetail__right-price">{data.price},00</h2>
        {/* Botão "Adicionar ao carrinho" */}
        <button className="productDetail__right-button">
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  );
};

export default ProductDetail;
