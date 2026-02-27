import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo"
          />
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

          <div className="ms-auto">
            <form className="d-flex" role="search">
              <input 
                className="form-control form-control-custom me-2" 
                type="search" 
                placeholder="Buscar" 
                aria-label="Buscar"
              />
              <button className="btn btn-outline-warning fw-bold" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;