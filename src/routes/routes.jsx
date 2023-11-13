import Home from "../Telas/TelaHome/Home.jsx";
import User from "../Telas/TelaUser/User.jsx";
import Informacoes from "../Telas/TelaInformacoes/Informacoes.jsx";
import Conteudos from '../Telas/TelaConteudos/Conteudos.jsx'
import ConteudoDetalhado from "../Telas/TelaConteudos/ConteudoDetalhado.jsx"
import InformacoesDetalhadas from "../Telas/TelaInformacoes/InformacoesDetalhadas.jsx";
import Previsao from "../Telas/TelaPrevisão/Previsao.jsx"
import { createTheme, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";

import "../index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./index.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import EditUser from "../Telas/TelaUser/EditUser.jsx";
import { AuthRoute } from "./index.jsx";
import Auth from "../Telas/TelaAuth/Auth.jsx";
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
                    <Route path="/" element={<Home />} />

                    <Route path="/auth" element={<AuthRoute />}>
                        <Route path="/auth" element={<Auth />} />
                    </Route>

                    <Route path="/user" element={<PrivateRoutes />}>
                        <Route path="/user" element={<User />} />
                        <Route path="/user/edit" element={<EditUser />} />
                    </Route>

                    <Route path="/conteudos" element={<Conteudos />} />
                    <Route path="/conteudos/:id" element={<ConteudoDetalhado />} />
                    <Route path="/informacoes" element={<Informacoes />} />
                    <Route path="/informacoes/:id" element={<InformacoesDetalhadas />} />
                    <Route path="/previsao" element={<Previsao />} />


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
