import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotDeals from "./pages/HotDeals";
import ScrollToTop from "./utils/ScrollToTop";
import BrowseGames from "./pages/BrowseGames";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Games from "./pages/Games";
import { DataProvider } from "./utils/DataContext";

const App = () => {
  ScrollToTop();

  return (
    <>
      <DataProvider>
        <header>
          <Header />
        </header>

        <main className="min-vh-100">
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route
                path="/play-station"
                element={<Games pathname={"PlayStation"} />}
              />
              <Route path="/xbox" element={<Games pathname={"Xbox"} />} />
              <Route path="/pc" element={<Games pathname={"PC"} />} />
              <Route path="/hot-deals" element={<HotDeals />} />
              <Route path="/browse-games" element={<BrowseGames />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </DataProvider>
    </>
  );
};

export default App;
