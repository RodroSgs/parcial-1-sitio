import axios from 'axios';

const API_URL = 'https://the-rodro-side-backend.onrender.com/api/usuarios/';

// Registrar usuario
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login usuario
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
