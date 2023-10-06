// import { Outlet } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { createTheme, ThemeProvider } from "@mui/material";
import { AuthGoogleProvider } from "./contexts/authGoogle";
import { Router } from "./routes/routes"

const App = () => {
    // const darkTheme = createTheme({
    //     palette: {
    //         mode: "dark",
    //     },
    // });

    return (
        <div id="App">
            <AuthGoogleProvider>
            <Router />
            
                {/* <div id="App">
                <ThemeProvider theme={darkTheme}>
                    <Header />
                    <Outlet />
                    <Footer />
                    <Analytics />
                </ThemeProvider>
            </div> */}

            </AuthGoogleProvider>
        </div>
    );
};
export default App;
