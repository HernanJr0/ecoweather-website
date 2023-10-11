import Home from "../Telas/TelaHome/Home.jsx";
import User from "../Telas/TelaUser/User.jsx";
import Dicas from "../Telas/TelaDicas/Dicas.jsx";
import Auth from "../Telas/TelaAuth/Auth.jsx"
import Galeria from "../Telas/TelaGaleria/Galeria.jsx"
import ListaDez from "../Telas/TelaDicas/ListaDez/ListaDez.jsx"
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
                        <Route path="/home/dicas" element={<Dicas />} />
                        <Route path="/home/dicas/as-dez-dicas" element={<ListaDez />} />
                        <Route path="/home/galeria" element={<Galeria />} />
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