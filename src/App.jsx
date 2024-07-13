import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      </Router>  
    </>
  )
}

export default App
