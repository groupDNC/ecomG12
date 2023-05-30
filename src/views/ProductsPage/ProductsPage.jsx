import React from "react";
import Header from "../../componentes/Header/Header";
import { useParams } from "react-router-dom";
import ProductDetail from "../../componentes/ProductDetail/ProductDetail";
import Footer from "../../componentes/Footer/Footer";

const ProductsPage = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);
  return (
    <div>
      <section>
        <Header />
        <ProductDetail data={selectedProduct} />
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
