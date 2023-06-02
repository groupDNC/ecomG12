import React from "react";
import "./index.scss";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Products from "../../componentes/Products/Products";

const Home = ({ data }) => {
  return (
    <div className="body">
      <div>
        <Header /> {/* Componente do cabeçalho */}
        <img className="imgHome" src="/imageHome.svg" alt="Imagem Home" />
        <section className="home">
          {data.map((product) => (
            <Products
              key={product.id}
              data={product}
            /> /* Componente de produtos */
          ))}
        </section>
      </div>
      <Footer /> {/* Componente do rodapé */}
    </div>
  );
};

export default Home;
