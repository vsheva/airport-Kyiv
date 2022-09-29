import { createSlice } from '@reduxjs/toolkit';

//thunk
export const getFlightData = (date) => {

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`https://api.iev.aero/api/flights/${date}`,);
      const data = await response.json();
      return data;
    };

      const flightData = await fetchData();
      dispatch(setFlights(flightData),
      );
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




/*const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const getFlightData = () => {
  return fetch(`${baseUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })

};*/