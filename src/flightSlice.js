import { createSlice } from '@reduxjs/toolkit';

const initialState = {
/*  status: '',*/
  departures: [],
  arrivals: [],
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlights: (state, action) => {
      state.arrivals = action.payload.body;
      state.departures = action.payload.body;
    },
  },
});

export const { setFlights } = flightSlice.actions;

export default flightSlice.reducer;
