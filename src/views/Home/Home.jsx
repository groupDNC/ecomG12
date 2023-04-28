import React from 'react'
import "./index.scss";
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <img className='imgHome' src="./src/assets/imageHome.svg" alt="Imagem Home" />
      <section className='cards'>
        Cards
      </section>
      <Footer />
      
    </div>
  )
}

export default Home