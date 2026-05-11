import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import favoritosService from './favoritosService';

const initialState = {
  favoritos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

// Obtener favoritos
export const getFavoritos = createAsyncThunk('favoritos/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await favoritosService.getFavoritos(token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Crear favorito
export const createFavorito = createAsyncThunk('favoritos/create', async (favoritoData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await favoritosService.createFavorito(favoritoData, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Eliminar favorito
export const deleteFavorito = createAsyncThunk('favoritos/delete', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await favoritosService.deleteFavorito(id, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const favoritosSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    resetFavoritos: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavoritos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favoritos = action.payload;
      })
      .addCase(getFavoritos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createFavorito.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFavorito.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favoritos.push(action.payload);
      })
      .addCase(createFavorito.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFavorito.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFavorito.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.favoritos = state.favoritos.filter((favorito) => favorito._id !== action.payload.id);
      })
      .addCase(deleteFavorito.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { resetFavoritos } = favoritosSlice.actions;
export default favoritosSlice.reducer;
