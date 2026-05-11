import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import Navbar from '../components/Navbar';
import '../auth.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. La magia oscura interfiere.");
      return;
    }
    const userData = { nombre: name, email, password };
    dispatch(register(userData));
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="auth-wrapper flex-grow-1">
        <div className="auth-container">
          <h2 className="auth-title">Registrarse</h2>
          <form onSubmit={handleRegister}>
            <div className="auth-form-group">
              <label className="auth-label">Nombre</label>
              <input 
                type="text" 
                className="auth-input" 
                placeholder="Rodrigo Sánchez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="auth-form-group">
              <label className="auth-label">Correo</label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="correo@comarca.com"
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
            <div className="auth-form-group">
              <label className="auth-label">Confirmar Contraseña</label>
              <input 
                type="password" 
                className="auth-input" 
                placeholder="contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-auth mt-3" disabled={isLoading}>
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
          <div className="auth-footer">
            <Link to="/login" className="auth-link">
              ¿Ya tienes cuenta? Login
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

export default Register;
