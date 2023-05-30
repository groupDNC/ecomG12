import React from "react";
import "./index.scss";

const ProductDetail = ({ data }) => {
  return (
    <div className="productDetail">
      <section className="productDetail__left">
        <img
          className="productDetail__left-image"
          src={data.imgPathDetail}
          alt={data.description}
        />
        <p className="productDetail__left-p">{data.description}</p>
        <h3 className="productDetail__left-description">Descrição</h3>
        <span className="underline">{data.paragraph}</span>
      </section>
      <section className="productDetail__right">
        <h1 className="productDetail__right-title underline">
          {data.description}
        </h1>
        <h2 className="productDetail__right-price">{data.price},00</h2>
        <button className="productDetail__right-button">
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  );
};

export default ProductDetail;
