import React from 'react';
import card_1 from '../assets/card_1.jpg';

const Card1 = () => {
  return (
    <div className="card card-lotr shadow">
      <img 
        src={card_1} 
        className="card-img-top" 
        alt="La Comunidad del Anillo" 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">
          El Señor de los Anillos: La Comunidad del Anillo
        </h5>
        
        <p className="card-text text-center flex-grow-1" style={{ color: '#d1c7b7' }}>
          Primer película de la saga
        </p>
        <a 
          href="https://www.primevideo.com/-/es_419/detail/0N0CRBLY1S5GDA4EVTQ34LF5GN/ref=atv_dp_share_cu_r" 
          target="_blank"
          className="btn-card"
        >
          Ver Película
        </a>
      </div>
    </div>
  );
};

export default Card1;