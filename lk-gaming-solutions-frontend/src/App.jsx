import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-vh-100"></main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
