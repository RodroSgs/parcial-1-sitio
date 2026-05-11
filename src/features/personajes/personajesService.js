import axios from 'axios';

const API_URL = 'https://the-rodro-side-backend.onrender.com/api/catalogoPersonajes/';

// Obtener personajes
const getPersonajes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear nuevo personaje
const createPersonaje = async (personajeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.post(API_URL, personajeData, config);
  return response.data;
};

// Eliminar personaje
const deletePersonaje = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const personajesService = {
  getPersonajes,
  createPersonaje,
  deletePersonaje
};

export default personajesService;
