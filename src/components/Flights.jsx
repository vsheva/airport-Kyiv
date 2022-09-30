import React, { useEffect } from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from "./ArrivalList.jsx";
import { Route, Switch, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice.js";
import moment from "moment";
import qs from "qs";


const Flights = ({searchValue}) => {


    const dispatch= useDispatch();

    const {search} =window.location;
    const params= qs.parse(search.substring(1));
    const date = moment().format("DD-MM-YYYY");

    //вызов thunk
  useEffect(()=>{
    dispatch(getFlightData(params.date || date)) //не задан 1-й date
}, [dispatch])


    return (
    <table className="table">
      <FlightTable />
        <Switch>

            <Route exact path="/">
                <Redirect to="/departures" />
            </Route>

            <Route path="/departures">
                <DepartureList searchValue={searchValue} />
            </Route>

                    <Route path="/arrivals">
                        <ArrivalList searchValue={searchValue}/>
                    </Route>
        </Switch>
    </table>
  );
};

export default Flights;
