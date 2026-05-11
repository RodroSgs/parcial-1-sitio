import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Personajes from './pages/Personajes';
import Favoritos from './pages/Favoritos';
import Catalogo from './pages/Catalogo';
import CrearPersonaje from './pages/CrearPersonaje';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/crear-personaje" element={<CrearPersonaje />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;