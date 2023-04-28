import React from 'react'
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <header className='headerLogin'>
            <img src="/logoDNC.svg" alt="LogoDNC" width="164px" height="82px"/>
        </header>
        <section className='sectionLogin'>
            <h2 className='sectionLogin__h2'>Acesse com seu login ou cadastre-se!</h2>
            <h3 className='sectionLogin__h3'>você pode entrar com o seu CPF</h3>
            <form className='divInput'>
                <label className='divInput__label'>Digite seu CPF:</label>
                <input className='divInput__input' type="text" />
                <label className='divInput__label'>Senha:</label>
                <input className='divInput__input' type="text" />
                <button type='submit' className='divInput__button'>
                <Link to={"/Home"}>Entrar</Link>
                </button>
            </form>
            
        </section>
    </div>
  )
}

export default Home