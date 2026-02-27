import React from 'react';
import card_3 from '../assets/card_3.jpg';

const Card3 = () => {
  return (
    <div className="card card-lotr shadow">
      <img 
        src={card_3} 
        className="card-img-top" 
        alt="El Retorno del Rey" 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">
          El Señor de los Anillos: El Retorno del Rey
        </h5>
        <p className="card-text text-center flex-grow-1" style={{ color: '#d1c7b7' }}>
          Tercer película de la saga
        </p>
        <a 
          href="https://www.primevideo.com/-/es_419/detail/0FPODQ891XA22TWGCUKUCE7DVN/ref=atv_dp_share_cu_r" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-card"
        >
          Ver Película
        </a>
      </div>
    </div>
  );
};

export default Card3;