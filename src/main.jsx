import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import Dicas from "./Components/Dicas/Dicas.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dicas",
        element: <Dicas />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
