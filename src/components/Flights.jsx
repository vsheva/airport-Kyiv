import React, { useEffect } from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from "./ArrivalList.jsx";
import { Route, Switch } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice.js";


const Flights = () => {

    const dispatch= useDispatch();

  useEffect(()=>{

    dispatch(getFlightData())
}, [dispatch])



    return (
    <table className="table">
      <FlightTable />
        <Switch>
            <Route exact path="/arrivals">
                <ArrivalList />
            </Route>
            <Route path="/departures">
                <DepartureList />
            </Route>
        </Switch>
    </table>
  );
};

export default Flights;
