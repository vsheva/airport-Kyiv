import React, { useEffect } from 'react';
import Flight from './Flight.jsx';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getFlightData } from '../store/flightSlice';
import qs from 'qs';

import { useHistory, useLocation } from 'react-router-dom';
import NoFlights from './NoFlights.jsx';

const statusObject = {
  DP: 'Departed at ',
};

const DepartureList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { date, filter } = qs.parse(location.search.substring(1));
  const parsedValue = filter || '';
  const navigate = useHistory();

  useEffect(() => {
    dispatch(getFlightData(date || moment().format('DD-MM-YYYY')));
  }, [date, parsedValue, location.search, navigate.location.search]);

  const departuresData = useSelector(state => state.flights.departures);

  const filteredList = filter
    ? departuresData.filter(
        item =>
          item.codeShareData[0].codeShare.toLowerCase().includes(filter.toLowerCase()) ||
          item['airportToID.name_en'].toLowerCase().includes(filter.toLowerCase()) ||
          item.airline.en.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : departuresData;

  const departureList = filteredList.map(item => {
    return {
      id: item.ID,
      terminal: item.term,
      time: item.timeDepShedule,
      destination: item['airportToID.name_en'],
      status:
        item.status === 'DP' || item.status === 'LN'
          ? statusObject[item.status] + moment(item.timeTakeofFact).format('kk:mm')
          : item.status,
      airline: item.airline.en.name,
      flightCode: item.codeShareData[0].codeShare,
      logo: item.logo,
    };
  });

  return (
    <>
      <tbody>
        {departureList.length === 0 ? (
          <NoFlights />
        ) : (
          departureList.map(obj => {
            return <Flight key={obj.id} {...obj} />;
          })
        )}
      </tbody>
    </>
  );
};

export default DepartureList;
