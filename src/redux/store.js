import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { psychologiesReducer } from './psychologies/psychologiesSlice';

export const store = configureStore({
  reducer: { auth: authReducer, psychologies: psychologiesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
