import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import personajesReducer from '../features/personajes/personajesSlice';
import favoritosReducer from '../features/favoritos/favoritosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    personajes: personajesReducer,
    favoritos: favoritosReducer,
  },
});
