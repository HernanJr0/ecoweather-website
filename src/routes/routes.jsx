import React, { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import Home from "../Telas/TelaHome/Home.jsx";
import Dicas from "../Telas/TelaDicas/Dicas.jsx";
import Auth from "../Telas/TelaAuth/Auth.jsx"
import Galeria from "../Telas/TelaGaleria/Galeria.jsx"
import ListaDez from "../Telas/TelaDicas/ListaDez/ListaDez.jsx"
import Previsao from "../Telas/TelaPrevisão/Previsao.jsx"
import { Login } from "../Telas/TelaAuth/Login"
import { createTheme, ThemeProvider } from "@mui/material";

import "../index.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { AuthGoogleProvider } from "../contexts/authGoogle.jsx";
import { PrivateRoutes } from "./index.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

export const Router = () => {

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <BrowserRouter>
            <Fragment>
                <ThemeProvider theme={darkTheme}>
                    <Header />

                    <Routes>
                        <Route path="/" element={<Auth />} />
                        <Route path="/home" element={<PrivateRoutes />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/home/dicas" element={<Dicas />} />
                            <Route path="/home/dicas/as-dez-dicas" element={<ListaDez />} />
                            <Route path="/home/galeria" element={<Galeria />} />
                            <Route path="/home/previsao" element={<Previsao />} />
                        </Route>
                    </Routes>
                    
                    <Footer />
                </ThemeProvider>
            </Fragment>
        </BrowserRouter>
    )
}
/* createBrowserRouter(
    [
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
                    element: <Login />
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
        }
    ]);
// */
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <AuthGoogleProvider>
//             <RouterProvider router={router} />
//         </AuthGoogleProvider>
//     </StrictMode>
// );
