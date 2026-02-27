import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">BIENVENIDO A THE ONE API</h1>
          <p className="hero-subtitle">
            Preparado para aprender sobre los peronajes de la magnifica saga de J.R.R. Tolkien :)
          </p>
          <div className="hero-buttons centered">
            <button className="btn-explorar" onClick={() => navigate('/personajes')}>
              Explorar Personajes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienvenida;