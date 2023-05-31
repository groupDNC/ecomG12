import React from "react";
import Header from "../../componentes/Header/Header";
import { useParams } from "react-router-dom";
import ProductDetail from "../../componentes/ProductDetail/ProductDetail";
import Footer from "../../componentes/Footer/Footer";
import "./index.scss";

const ProductsPage = ({ data }) => {
  const { productId } = useParams(); // Obtém o parâmetro de rota productId
  const selectedProduct = data.find((product) => product.id == productId); // Procura o produto correspondente ao productId na lista de dados

  return (
    <div>
      <section className="modalContainer">
        <Header /> {/* Componente do cabeçalho */}
        <ProductDetail data={selectedProduct} />{" "}
        {/* Componente de detalhes do produto */}
      </section>
      <Footer /> {/* Componente do rodapé */}
    </div>
  );
};

export default ProductsPage;
