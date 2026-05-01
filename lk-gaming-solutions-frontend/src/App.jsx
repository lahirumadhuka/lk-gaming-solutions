import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import PlayStation from './pages/PlayStation';
import PC from './pages/PC';
import Xbox from './pages/Xbox';
import HotDeals from './pages/HotDeals';
import ScrollToTop from "./utils/ScrollToTop";
import BrowseGames from "./pages/BrowseGames";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

const App = () => {
  ScrollToTop();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-vh-100">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/play-station" element={<PlayStation />} />
            <Route path="/xbox" element={<Xbox />} />
            <Route path="/pc" element={<PC />} />
            <Route path="/hot-deals" element={<HotDeals />} />
            <Route path="/browse-games" element={<BrowseGames />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
