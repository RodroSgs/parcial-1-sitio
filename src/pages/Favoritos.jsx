import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoritos, deleteFavorito, resetFavoritos } from '../features/favoritos/favoritosSlice';
import Navbar from '../components/Navbar';
import '../favoritos.css';

const Favoritos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { favoritos, isLoading, isError, message } = useSelector((state) => state.favoritos);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
      return;
    }

    dispatch(getFavoritos());

    return () => {
      dispatch(resetFavoritos());
    };
  }, [user, navigate, isError, message, dispatch]);

  const removeFavorito = (idToRemove) => {
    dispatch(deleteFavorito(idToRemove));
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="container fav-wrapper flex-grow-1">
        <h2 className="titulo-seccion mb-5">Favoritos</h2>
        
        {favoritos.length === 0 ? (
          <div className="fav-empty-state">
            <Link to="/personajes" className="btn-explorar text-decoration-none">
              Buscar Personajes
            </Link>
          </div>
        ) : (
          <div className="fav-grid">
            {favoritos.map((fav, index) => (
              <div 
                key={fav._id} 
                className="fav-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="fav-card-img-container">
                  <img 
                    src={fav.imagen} 
                    alt={fav.nombrePersonaje} 
                    className="fav-img" 
                  />
                </div>
                <div className="fav-info">
                  <h3 className="fav-name">{fav.nombrePersonaje}</h3>
                  <p className="fav-race">{fav.raza || 'Desconocida'}</p>
                  <button 
                    className="btn-remove-fav mt-3"
                    onClick={() => removeFavorito(fav._id)}
                    title="Expulsar de la compañía"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="footer-custom mt-auto">
        <div className="container">
          <p className="footer-text">The Rodro of The Rings - Derechos reservados 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Favoritos;
