import React from 'react'
import "./index.scss"

const Header = () => {
  return (
    <div>
      <header className='headerHome'>
        <div className='headerHome__div'>
          <img src="/logoDNC.svg" alt="Logo" height='60px'/>
          <input className='headerHome__div__input' type="text" placeholder='O que você está procurando?' />
        <img src="/car.svg" alt="Carrinho" height="60px"/>
        </div>
        <nav className='headerHome__nav'>
          <h3>Novidades</h3>
          <h3>Jogos</h3>
          <h3>Vídeo Games</h3>
          <h3>Mesas Gamer</h3>
          <h3>Promoções</h3>
          <h3>Atendimento</h3>
        </nav>
      </header>
    </div>
  )
}

export default Header