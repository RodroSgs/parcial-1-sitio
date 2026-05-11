import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm position-relative">
      <div className="container position-relative">
        <Link to="/" className="navbar-brand brand-text">
          The Rodro Site
        </Link>

        <button 
          className="navbar-toggler border-warning" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-center-absolute mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/personajes" className="nav-link nav-link-custom">Personajes</Link>
            </li>
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link nav-link-custom">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/catalogo" className="nav-link nav-link-custom">Catálogo</Link>
            </li>
          </ul>

          <div className="d-flex ms-auto">
            {user ? (
              <button className="btn btn-outline-warning" onClick={onLogout}>Cerrar Sesión</button>
            ) : (
              <Link to="/login" className="btn btn-outline-warning text-decoration-none">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;