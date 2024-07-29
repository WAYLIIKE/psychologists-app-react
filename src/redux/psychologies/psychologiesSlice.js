import { createSlice } from '@reduxjs/toolkit';
import { fetchPsychol } from './psychologiesOps';

const psycholSlice = createSlice({
  name: 'psychol',
  initialState: { psychologies: [], loading: true },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPsychol.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPsychol.fulfilled, (state, action) => {
        state.loading = false;
        console.log('Psychologies fetched:', action.payload.data);
        // state.psychol = action.payload;
      })
      .addCase(fetchPsychol.rejected, (state) => {
        state.loading = false;
      }),
});

export const psycholReducer = psycholSlice.reducer;
