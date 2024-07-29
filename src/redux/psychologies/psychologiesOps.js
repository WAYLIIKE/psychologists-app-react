import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPsychol = createAsyncThunk(
  'psychologies/fetchPsychol',
  async (_, thunkAPI) => {
    try {
      const response = axios.get(
        'https://psychologies-5d98d-default-rtdb.europe-west1.firebasedatabase.app/.json'
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
