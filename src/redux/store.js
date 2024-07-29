import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { psycholReducer } from './psychologies/psychologiesSlice';

export const store = configureStore({
  reducer: { auth: authReducer, psychologies: psycholReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
