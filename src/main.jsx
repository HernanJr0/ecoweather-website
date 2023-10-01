import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Telas/TelaHome/Home.jsx";
import Dicas from "./Telas/TelaDicas/Dicas.jsx";
import Auth from "./Telas/TelaAuth/Auth.jsx"
import Galeria from "./Telas/TelaGaleria/Galeria.jsx"
import ListaDez from "./Telas/TelaDicas/ListaDez/ListaDez.jsx"
import Previsao from "./Telas/TelaPrevisão/Previsao.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dicas",
        element: <Dicas />
      },
      {
        path: "/dicas/as-dez-dicas",
        element: <ListaDez />
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/galeria",
        element: <Galeria />
      },
      {
        path: "/previsao",
        element: <Previsao />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
