import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFlights } from '../flightSlice';

const ArrivalList = () => {
  const dispatch = useDispatch();
  const { arrivals } = useSelector(state => state.flights.arrivals);

  const fetchFlightData = async () => {
    const response = await fetch('https://api.iev.aero/api/flights/11-01-2022');
    const data = response.json();
    return data;
  };

  console.log(fetchFlightData());
  //console.log(dispatch(setFlights(data)))
};

export default ArrivalList;
