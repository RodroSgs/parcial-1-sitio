import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import personajesService from './personajesService';

const initialState = {
  personajes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Obtener personajes
export const getPersonajes = createAsyncThunk('personajes/getAll', async (_, thunkAPI) => {
  try {
    return await personajesService.getPersonajes();
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Crear personaje
export const createPersonaje = createAsyncThunk('personajes/create', async (personajeData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await personajesService.createPersonaje(personajeData, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Eliminar personaje
export const deletePersonaje = createAsyncThunk('personajes/delete', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await personajesService.deletePersonaje(id, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const personajesSlice = createSlice({
  name: 'personaje',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersonajes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPersonajes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.personajes = action.payload;
      })
      .addCase(getPersonajes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createPersonaje.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPersonaje.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.personajes.push(action.payload);
      })
      .addCase(createPersonaje.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePersonaje.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePersonaje.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.personajes = state.personajes.filter((personaje) => personaje._id !== action.payload.id);
      })
      .addCase(deletePersonaje.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = personajesSlice.actions;
export default personajesSlice.reducer;
