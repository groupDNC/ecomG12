import { useState } from "react";
import ModalProduct from "../ModalProduct/ModalProduct";
import { Link } from "react-router-dom";
import "./index.scss";

const ProductDetail = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  console.log(modalOpen);
  return (
    <>
      <div style={{ background: modalOpen && "#2D2D2D" }}>
        <div
          className="productDetail"
          style={{
            visibility: modalOpen ? "hidden" : "visible",
          }}
        >
          {/* Seção esquerda */}
          <section className="productDetail__left">
            {/* Imagem do produto */}
            <img
              className="productDetail__left-image"
              src={data.imgPathDetail}
              alt={data.description}
            />
            {/* Descrição do produto */}
            <p className="productDetail__left-p">{data.description}</p>
            {/* Título "Descrição" */}
            <h3 className="productDetail__left-description">Descrição</h3>
            {/* Parágrafo do produto */}
            <span className="underline">{data.paragraph}</span>
          </section>

          {/* Seção direita */}
          <section className="productDetail__right">
            {/* Título do produto */}
            <h1 className="productDetail__right-title underline">
              {data.description}
            </h1>
            {/* Preço do produto */}
            <h2 className="productDetail__right-price">{data.price}</h2>
            {/* Botão "Adicionar ao carrinho" */}
            <button
              className="productDetail__right-button"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Adicionar ao carrinho
            </button>
          </section>
        </div>
      </div>
      <div
        className="over"
        style={{
          visibility: modalOpen ? "visible" : "hidden",
        }}
      >
        <ModalProduct isOpen={modalOpen} setIsOpen={setModalOpen}>
          {!checkout ? (
            <div className="modal">
              <div className="modal__left">
                <img
                  className="productDetail__left-image"
                  src={data.imgPathDetail}
                  alt={data.description}
                />
              </div>
              <div className="right">
                <h1>Meu carrinho</h1>
                <h1 className="productDetail__right-title underline">
                  {data.description}
                </h1>
                <h2 className="productDetail__right-price">{data.price}</h2>
                <button className="btn-blue">
                  <Link to={"/Home"}>Continuar comprando</Link>
                </button>
                <button
                  className="btn-gray"
                  onClick={() => {
                    setCheckout(true);
                  }}
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          ) : (
            <section className="modalPay">
              <h1 className="modalPay__title">Finalizar compra:</h1>
              <form className="modalPay__form">
                <label htmlFor="text">Digite seu nome:</label>
                <input type="text" placeholder="Nome Completo" />
                <label htmlFor="text">Digite seu CPF:</label>
                <input type="number" placeholder="Digite o CPF" />
                <label htmlFor="text">Endereço:</label>
                <input type="text" placeholder="Endereço" />
                <label htmlFor="text">Forma de Pagamento:</label>
                <input type="text" placeholder="Cartão ou boleto" />
              </form>
              <button className="btn-blue">
                <Link to={"/Home"}>Finalizar compra</Link>
              </button>
            </section>
          )}
        </ModalProduct>
      </div>
    </>
  );
};

export default ProductDetail;
