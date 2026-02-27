import React from 'react';

const Bienvenida = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">BIENVENIDO A THE ONE API</h1>
          <p className="hero-subtitle">
            Preparado para aprender sobre los peronajes de la magnifica saga de J.R.R. Tolkien :D
          </p>
          <div className="hero-buttons centered">
            <button className="btn-explorar">Explorar Personajes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienvenida;