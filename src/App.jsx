import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Search from './components/Search.jsx';
import ButtonDirection from './components/ButtonDirection.jsx';
import ChooseDate from './components/ChooseDate.jsx';
import Flights from './components/Flights.jsx';
import {Provider, useDispatch} from 'react-redux';
import { store } from './store.js';
import moment from "moment";


import {getFlightData} from "./flightSlice.js";



const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="page">
          <Search />
          <ButtonDirection />
          <ChooseDate />
          <Flights/>
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
