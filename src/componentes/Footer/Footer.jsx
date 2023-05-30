import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src="../DNC.svg" alt="" /> {/* Exibe uma imagem do logotipo da empresa */}
      <h3 className="footer__text">
        Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <br /> {/* Exibe um texto com informações sobre preços e condições de pagamento */}
        <b>Para mais informações,</b> entre em contato: (011) 1111-2222 {/* Exibe informações de contato */}
      </h3>
    </div>
  );
};

export default Footer;
