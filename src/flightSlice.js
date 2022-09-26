import { createSlice } from '@reduxjs/toolkit';

/*const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const getFlightData = () => {
  return fetch(`${baseUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })

};*/


export const getFlightData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
          'https://api.iev.aero/api/flights/11-01-2022',
      );

      const data = await response.json();
      return data;
    };

      const flightData = await fetchData();
      dispatch(setFlights(flightData),
      );
  };
};









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
      const{arrival}=action.payload.body
      const{departure}=action.payload.body
      state.arrivals = arrival;
      state.departures = departure;
    },
  },
});

export const { setFlights } = flightSlice.actions;

export default flightSlice.reducer;




