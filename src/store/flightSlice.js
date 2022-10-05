import { createSlice } from '@reduxjs/toolkit';

export const getFlightData = date => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(`https://api.iev.aero/api/flights/${date}`);
      const data = await response.json();
      return data;
    };

    const flightData = await fetchData();
    dispatch(setFlights(flightData));
  };
};

const initialState = {
  departures: [],
  arrivals: [],
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlights: (state, action) => {
      state.arrivals = action.payload.body.arrival;
      state.departures = action.payload.body.departure;
    },
  },
});

export const { setFlights } = flightSlice.actions;

export default flightSlice.reducer;
