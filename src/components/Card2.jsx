import React from 'react';
import card_2 from '../assets/card_2.jpg';

const Card2 = () => {
  return (
    <div className="card card-lotr shadow">
      <img 
        src={card_2} 
        className="card-img-top" 
        alt="Las Dos Torres" 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">
          El Señor de los Anillos: Las Dos Torres
        </h5>
        <p className="card-text text-center flex-grow-1" style={{ color: '#d1c7b7' }}>
          Segunda película de la saga
        </p>
        <a 
          href="https://www.primevideo.com/-/es_419/detail/0OSAJRJAW5BHY843QHALJZFUTX/ref=atv_dp_share_cu_r" 
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

export default Card2;