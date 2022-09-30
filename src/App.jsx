import React, {useEffect, useState} from 'react';
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
  const [searchValue, setSearchValue] = useState('');
  console.log("searchValue", searchValue)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="page">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <ButtonDirection />
          <ChooseDate />
          <Flights  searchValue={searchValue}/>
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
