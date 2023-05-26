import React from "react";
import "./index.scss";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Products from "../Products/Products";

const Home = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <Header />
        <img
          className="imgHome"
          src="./src/assets/imageHome.svg"
          alt="Imagem Home"
        />
        <section className="cards">
          {data.map((product) => (
            <Products key={product.id} data={product} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
