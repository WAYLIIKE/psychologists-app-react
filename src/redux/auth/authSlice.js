import { createSlice } from '@reduxjs/toolkit';
import { logOut, signIn, signUp } from './authOps';

const authSlice = createSlice({
  name: 'auth',
  initialState: { loading: true, user: null, isLoggedIn: false },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        console.log(action.payload);
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        console.log(action.payload);
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = null;
      }),
});

export const authReducer = authSlice.reducer;

export const { loginUser, setLoading } = authSlice.actions;
