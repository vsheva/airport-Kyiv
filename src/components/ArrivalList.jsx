import React from 'react';
import Flight from './Flight.jsx';
import { getFlightData } from './gateway';

const statusObject = {
  LN: 'Landed at:',
};

const ArrivalList = () => {
  let [arrivals, setArrivals] = React.useState([]);

  React.useEffect(() => {
    getFlightData().then(data => {
      const { arrival } = data.body;

      const arrivalList = arrival.map(item => {
        console.log('item', item);
        return {
          id: item.ID,
          terminal: item.term,
          time: item.actual,
          destination: item['airportFromID.name_en'],
          status: statusObject[item.status],
          airline: item.airline.en.name,
          flightCode: item.codeShareData[0].codeShare,
          logo: item.logo,
        };
      });

      setArrivals(arrivalList);
    });
  }, []);

  return (
    <tbody>
      {arrivals.map(obj => {
        const key = Math.floor(Math.random() * 10000);
        return <Flight key={key} {...obj} />;
      })}
    </tbody>
  );
};

export default ArrivalList;
