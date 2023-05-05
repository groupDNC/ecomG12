import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <img
    className="imgHome"
       src="./src/assets/imageHome.svg"
        alt="Imagem Home"
      />
      <section className="cards">
        <button>
          <Link to={"/Products"}>Produtos</Link>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
