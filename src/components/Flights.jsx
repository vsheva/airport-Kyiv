import React, { useEffect } from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from "./ArrivalList.jsx";
import { Route, Switch, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice.js";
import moment from "moment";


const Flights = () => {
    const dispatch= useDispatch();

    const date = moment().format("DD-MM-YYYY");

    //вызов thunk
  useEffect(()=>{
    dispatch(getFlightData(date)) //не задан 1-й date
}, [dispatch])


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
