import React from 'react'
import "./index.scss";
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer';

const Products = () => {
  return (
      <div>
          <Header />
          <section className='product'>
              <div className='product__left'>produto</div>
              <div className='product__right'>
                  Preço
                  <button>Adicionar ao carrinho</button>
              </div>
          </section>
          <Footer />
    </div>
  )
}

export default Products