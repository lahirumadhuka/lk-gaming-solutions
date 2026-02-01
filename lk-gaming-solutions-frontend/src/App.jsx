import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Header from './components/header/Header';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
      </header>

      <main></main>

      <footer></footer>
    </>
  )
}

export default App
