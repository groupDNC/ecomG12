import React from "react";
import "./index.scss";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div>
      <section className="product">Products</section>
    </div>
  );
};

export default Products;
