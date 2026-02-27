import React from 'react'
import Navbar from './components/Navbar'
import Bienvenida from './components/Bienvenida'
import Carousel from './components/Carousel'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import './index.css'

function App() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#130b0b' }}>
      <Navbar />
      <Bienvenida />
      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <Carousel />
          </div>
        </div>
      </main>
      <section className="container mt-5 pb-5">
        <h2 className="titulo-seccion">
          LINKS PARA VER LAS PELÍCULAS
        </h2>
        <div className="row justify-content-center g-2">
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <Card1 />
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <Card2 />
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <Card3 />
          </div>
        </div>
      </section>
      <footer className="footer-custom">
        <div className="container">
          <p className="footer-text">
            The Rodro of The Rings - Derechos reservados 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;