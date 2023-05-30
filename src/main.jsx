import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PRODUCTS_MOCK } from "../src/mock/products.mock";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Products from "./componentes/Products/Products";
import ProductsPage from "./views/ProductsPage/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/Products",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/productsPage/:productId",
    element: <ProductsPage data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
