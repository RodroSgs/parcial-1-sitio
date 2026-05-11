import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createPersonaje, reset } from '../features/personajes/personajesSlice';
import Navbar from '../components/Navbar';
import '../auth.css';

const CrearPersonaje = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    raza: '',
    genero: '',
    hogar: '',
    nacimiento: '',
    imagen: ''
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isError, isSuccess, message } = useSelector((state) => state.personajes);

  useEffect(() => {
    if(isError) {
      alert(message);
    }
    dispatch(reset());
  }, [isError, message, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPersonaje(formData))
      .unwrap()
      .then(() => {
        navigate('/catalogo');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="auth-wrapper flex-grow-1">
        <div className="auth-container" style={{maxWidth: '700px'}}>
          <h2 className="auth-title">Crear Personaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className="auth-label">Nombre del Personaje</label>
              <input 
                type="text" 
                name="nombre"
                className="auth-input" 
                placeholder="Ej: Rodrigo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="row">
              <div className="col-md-6 auth-form-group">
                <label className="auth-label">Raza</label>
                <input 
                  type="text" 
                  name="raza"
                  className="auth-input" 
                  placeholder="Ej: Humano"
                  value={formData.raza}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 auth-form-group">
                <label className="auth-label">Género</label>
                <input 
                  type="text" 
                  name="genero"
                  className="auth-input" 
                  placeholder="Ej: Femenino"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 auth-form-group">
                <label className="auth-label">Hogar</label>
                <input 
                  type="text" 
                  name="hogar"
                  className="auth-input" 
                  placeholder="Ej: Mordor"
                  value={formData.hogar}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 auth-form-group">
                <label className="auth-label">Nacimiento</label>
                <input 
                  type="text" 
                  name="nacimiento"
                  className="auth-input" 
                  placeholder="Ej: Antes de Cristo"
                  value={formData.nacimiento}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label className="auth-label">URL de la Imagen</label>
              <input 
                type="url" 
                name="imagen"
                className="auth-input" 
                placeholder="https://..."
                value={formData.imagen}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-auth mt-3">
              Guardar
            </button>
          </form>
          <div className="auth-footer">
            <Link to="/catalogo" className="auth-link">
              Volver al Catálogo
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer-custom mt-auto">
        <div className="container">
          <p className="footer-text">The Rodro of The Rings - Derechos reservados 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default CrearPersonaje;
