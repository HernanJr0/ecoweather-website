import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div id="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;
