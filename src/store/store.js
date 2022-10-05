import { configureStore } from '@reduxjs/toolkit';
import flightSlice from './flightSlice';

export const store = configureStore({
  reducer: {
    flights: flightSlice,
  },
});
