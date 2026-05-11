import axios from 'axios';

const API_URL = 'https://the-rodro-side-backend.onrender.com/api/favoritos/';

// Obtener favoritos del usuario
const getFavoritos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Crear nuevo favorito
const createFavorito = async (favoritoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.post(API_URL, favoritoData, config);
  return response.data;
};

// Eliminar favorito
const deleteFavorito = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const favoritosService = {
  getFavoritos,
  createFavorito,
  deleteFavorito
};

export default favoritosService;
