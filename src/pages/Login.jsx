import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import Navbar from '../components/Navbar';
import '../auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message); // Mostrar error real de la API
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="auth-wrapper flex-grow-1">
        <div className="auth-container">
          <h2 className="auth-title">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="auth-form-group">
              <label className="auth-label">Correo</label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="correo@mordor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Contraseña</label>
              <input 
                type="password" 
                className="auth-input" 
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-auth mt-3" disabled={isLoading}>
              {isLoading ? 'Comprobando...' : 'Iniciar Sesión'}
            </button>
          </form>
          <div className="auth-footer">
            <Link to="/register" className="auth-link">
              ¿No tienes una cuenta? Registrate
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

export default Login;
