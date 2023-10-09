// import { Outlet } from "react-router-dom";
// import { Analytics } from "@vercel/analytics/react";

import "./App.css";

import { AuthGoogleProvider } from "./contexts/authGoogle";
import { Router } from "./routes/routes"

const App = () => {
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