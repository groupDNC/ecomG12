import React from "react";
import "./index.scss";

const ModalProduct = ({ children, isOpen, setIsOpen }) => {
  
  if (!isOpen) return null;

  return <>{children}</>;
};

export default ModalProduct;
