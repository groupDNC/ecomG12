import React from "react"; // Importa o módulo React para a criação de componentes
import ReactDOM from "react-dom/client"; // Importa o módulo ReactDOM para a renderização dos componentes no DOM
import "./index.scss"; // Importa o arquivo de estilo SCSS específico para este módulo
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importa funções e componentes relacionados à navegação com react-router-dom
import { PRODUCTS_MOCK } from "../src/mock/products.mock"; // Importa uma variável chamada PRODUCTS_MOCK do arquivo "../src/mock/products.mock"
import Login from "./views/Login/Login"; // Importa o componente Login do diretório "./views/Login"
import Home from "./views/Home/Home"; // Importa o componente Home do diretório "./views/Home"
import Products from "./componentes/Products/Products"; // Importa o componente Products do diretório "./componentes/Products"
import ProductsPage from "./views/ProductsPage/ProductsPage"; // Importa o componente ProductsPage do diretório "./views/ProductsPage"


const router = createBrowserRouter([
  // Rota para a página de login
  {
    path: "/",
    element: <Login />,
  },
  // Rota para a página inicial
  {
    path: "/Home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  // Rota para a página de produtos
  {
    path: "/Products",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  // Rota para a página de detalhes do produto
  {
    path: "/productsPage/:productId",
    element: <ProductsPage data={PRODUCTS_MOCK} />,
  },
]);

// Renderiza o aplicativo no elemento com o id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
