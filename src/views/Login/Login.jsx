import React from 'react'
import "./index.scss";

const Home = () => {
  return (
    <div>
        <header className='header'>
            <img src="/logoDNC.svg" alt="LogoDNC" width="164px" height="82px"/>
        </header>
        <section className='sectionLogin'>
            <h2 className='sectionLogin__h2'>Acesse com seu login ou cadastre-se!</h2>
            <h3 className='sectionLogin__h3'>você pode entrar com o seu CPF</h3>
            <div className='divInput'>
                <label className='divInput__label'>Digite seu CPF:</label>
                <input type="text" />
                <label className='divInput__label'>Senha:</label>
                <input type="text" />
            </div>
            <button>Entrar</button>
        </section>
    </div>
  )
}

export default Home