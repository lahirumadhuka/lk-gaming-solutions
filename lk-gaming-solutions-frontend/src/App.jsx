import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-vh-100">
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
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
