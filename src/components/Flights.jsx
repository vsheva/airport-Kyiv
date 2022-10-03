import React, { useEffect } from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from './ArrivalList.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';

const Flights = () => {
  return (
    <table className="table">
      <FlightTable />
      <Switch>
        <Route exact path="/">
          <Redirect to="/departures" />
        </Route>

        <Route path="/departures">
          <DepartureList />
        </Route>

        <Route path="/arrivals">
          <ArrivalList />
        </Route>
      </Switch>
    </table>
  );
};

export default Flights;

/*import { useDispatch, useSelector } from 'react-redux';
import { getFlightData } from '../flightSlice.js';
import moment from 'moment';
import qs from 'qs';*/

/*
  const dispatch= useDispatch();

    const {search} =window.location;
    console.log("search in flight", search )
    const params= qs.parse(search.substring(1));


    //вызов thunk
    useEffect(() => {
        console.log("здесь")
        dispatch(getFlightData(params.date || moment().format("DD-MM-YYYY"))) //не задан 1-й date
    }, [dispatch, params]);
*/
