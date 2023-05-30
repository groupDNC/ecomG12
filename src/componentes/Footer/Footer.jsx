import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src="../DNC.svg" alt="" />
      <h3 className="footer__text">
        Preços e condições de pagamento exclusivos para compras via internet e
        podem variar nas lojas físicas. <br />
        <b>Para mais informações,</b> entre em contato: (011) 1111-2222
      </h3>
    </div>
  );
};

export default Footer;
