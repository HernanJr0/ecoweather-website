import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./TelaHome/Home.jsx";
import Dicas from "./TelaDicas/Dicas.jsx";
import Auth from "./TelaAuth/Auth.jsx"
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
        path: "/Dicas",
        element: <Dicas />,
      },
      {
        path: "/Auth",
        element: <Auth />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
