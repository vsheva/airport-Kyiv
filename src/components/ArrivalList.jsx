import React, { useEffect } from 'react';
import Flight from './Flight.jsx';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getFlightData } from '../store/flightSlice';
import qs from 'qs';
import NoFlights from './NoFlights.jsx';

const statusObject = {
  LN: 'Landed at ',
};

const ArrivalList = () => {
  const dispatch = useDispatch();
  const { search } = window.location;
  const { date, filter } = qs.parse(search.substring(1));
  const parsedValue = filter || '';

  useEffect(() => {
    dispatch(getFlightData(date || moment().format('DD-MM-YYYY'))); //не задан 1-й date
  }, [date, parsedValue]);

  const arrivalsData = useSelector(state => state.flights.arrivals);
  const filteredList = filter
    ? arrivalsData.filter(
        item =>
          item.codeShareData[0].codeShare.toLowerCase().includes(filter.toLowerCase()) ||
          item['airportFromID.name_en'].toLowerCase().includes(filter.toLowerCase()) ||
          item.airline.en.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : arrivalsData;

  const arrivalList = filteredList.map(item => {
    return {
      id: item.ID,
      terminal: item.term,
      time: item.timeLandCalc,
      destination: item['airportFromID.name_en'],
      status:
        item.status === 'DP' || item.status === 'LN'
          ? statusObject[item.status] + moment(item.timeLandFact).format('kk:mm')
          : item.status,
      airline: item.airline.en.name,
      flightCode: item.codeShareData[0].codeShare,
      logo: item.logo,
    };
  });

  return (
    <>
      <tbody>
        {arrivalList.length === 0 ? (
          <NoFlights />
        ) : (
          arrivalList.map(obj => {
            return <Flight key={obj.id} {...obj} />;
          })
        )}
      </tbody>
    </>
  );
};

export default ArrivalList;
