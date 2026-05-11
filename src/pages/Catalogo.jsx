import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPersonajes, deletePersonaje, reset } from '../features/personajes/personajesSlice';
import Navbar from '../components/Navbar';
import '../catalogo.css';

const Catalogo = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { personajes, isLoading, isError, message } = useSelector((state) => state.personajes);
  
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const isAdmin = user && user.esAdmin;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getPersonajes());

    return () => {
      dispatch(reset());
    }
  }, [isError, message, dispatch]);

  const razasUnicas = ['Todos', ...new Set(personajes.map(p => p.raza))];

  const personajesFiltrados = filtroActivo === 'Todos' 
    ? personajes 
    : personajes.filter(p => p.raza === filtroActivo);

  const handleDelete = (id, nombre) => {
    if(window.confirm(`¿Seguro que deseas eliminar a ${nombre}?`)) {
      dispatch(deletePersonaje(id));
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="container catalogo-wrapper flex-grow-1">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h2 className="titulo-seccion mb-0">Catálogo</h2>
          {isAdmin && (
            <Link to="/crear-personaje" className="btn-explorar text-decoration-none">
              Crear personaje
            </Link>
          )}
        </div>
        
        {/* Barra de Filtros */}
        <div className="filters-container">
          {razasUnicas.map(raza => (
            <button 
              key={raza}
              className={`btn-filter ${filtroActivo === raza ? 'active' : ''}`}
              onClick={() => setFiltroActivo(raza)}
            >
              {raza}
            </button>
          ))}
        </div>
        
        {/* Cuadrícula de Personajes */}
        <div className="cat-grid">
          {personajesFiltrados.map((personaje, index) => (
            <div 
              key={personaje.nombre} 
              className="cat-card" 
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="cat-card-img-container">
                <img 
                  src={personaje.imagen} 
                  alt={personaje.nombre} 
                  className="cat-img" 
                />
              </div>
              <div className="cat-info">
                <h3 className="cat-name">{personaje.nombre}</h3>
                <div className="cat-details">
                  <p><strong>Raza:</strong> <span>{personaje.raza || 'Desconocida'}</span></p>
                  <p><strong>Hogar:</strong> <span>{personaje.hogar || personaje.realm || 'Desconocido'}</span></p>
                  <p><strong>Género:</strong> <span>{personaje.genero || 'Desconocido'}</span></p>
                  <p><strong>Nacimiento:</strong> <span>{personaje.nacimiento || 'Desconocida'}</span></p>
                </div>
                {isAdmin && (
                  <button 
                    className="btn-remove-fav mt-3"
                    onClick={() => handleDelete(personaje._id, personaje.nombre)}
                    style={{alignSelf: 'center', width: '100%'}}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer-custom mt-auto">
        <div className="container">
          <p className="footer-text">The Rodro of The Rings - Derechos reservados 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalogo;
