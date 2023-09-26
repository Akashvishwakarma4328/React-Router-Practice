import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const App = () => {
  return (

    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/about" element={<About/>} />
      <Route path = "/Contact" element={<Contact/>} />

    </Routes>

    </BrowserRouter>
    // <div>App</div>
  )
}

export default App