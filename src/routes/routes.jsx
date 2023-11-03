import Home from "../Telas/TelaHome/Home.jsx";
import User from "../Telas/TelaUser/User.jsx";
import Informacoes from "../Telas/TelaInformacoes/Informacoes.jsx";
import Conteudos from '../Telas/TelaConteudos/Conteudos.jsx'
import Auth from "../Telas/TelaAuth/Auth.jsx"
import ConteudoDetalhado from "../Telas/TelaConteudos/ConteudoDetalhado.jsx"
import Previsao from "../Telas/TelaPrevisão/Previsao.jsx"
import { createTheme, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";

import "../index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <ThemeProvider theme={darkTheme}>

                <Header />
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<PrivateRoutes />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/user" element={<User />} />
                        <Route path="/home/conteudos" element={<Conteudos />} />
                        <Route path="/home/conteudos/:id" element={<ConteudoDetalhado />} />
                        <Route path="/home/informacoes" element={<Informacoes />} />
                        <Route path="/home/previsao" element={<Previsao />} />
                    </Route>
                </Routes>
                <Footer />
                <Analytics />
                
            </ThemeProvider>
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
