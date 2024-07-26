import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
    oMessage : 'Please wait...',
    loaderData: null
  },
  reducers: {
    startLoading: (state,action) => {
      state.isLoading = true;
      state.oMessage = action.payload || 'Please wait...';
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setLoaderData: (state, action) => {
      state.loaderData = action.payload;
    }
  },
});

export const { startLoading, stopLoading, setLoaderData } = loaderSlice.actions;
export const loaderReducer =loaderSlice.reducer;
