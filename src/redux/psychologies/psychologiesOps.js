import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPsychol = createAsyncThunk(
  'psychol/fetchPsychol',
  async ({ startAt = null, limit = 3 }, thunkAPI) => {
    try {
      let url = `https://psychologies-5d98d-default-rtdb.europe-west1.firebasedatabase.app/.json?orderBy="$key"&limitToFirst=${limit}`;

      if (startAt) {
        url += `&startAt="${startAt}"`;
      }

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
