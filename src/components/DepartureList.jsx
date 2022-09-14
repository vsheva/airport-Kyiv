import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DepartureList = () => {
  const dispatch = useDispatch();
  const { departures } = useSelector(state => state.flights.departures);

  const fetchFlightData = async () => {
    const response = await fetch('https://api.iev.aero/api/flights/11-01-2022');
    const data = response.json();
    return data;
  };

  console.log(fetchFlightData());
  //console.log(dispatch(setFlights(data)))
};

export default DepartureList;
