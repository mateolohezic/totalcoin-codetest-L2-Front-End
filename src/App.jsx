import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Paquetes from './Pages/Paquetes/Paquetes';
import Mascotas from './Pages/Mascotas/Mascotas';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paquetes" element={<Paquetes/>} />
        <Route path="/mascotas" element={<Mascotas/>} />
      </Routes>
    </>
  )
}

export default App