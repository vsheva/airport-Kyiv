import React from 'react';
import Flight from './Flight.jsx';
import {useSelector} from "react-redux";

const statusObject = {
  LN: 'Landed ',
};

const ArrivalList = () => {
  const arrivalsData = useSelector(state => state.flights.arrivals);

  const arrivalList = arrivalsData.map(item => {

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


  return (
    <tbody>
      {arrivalList.map(obj => {
        /*const key = Math.floor(Math.random() * 10000);*/
        return <Flight key={obj.id} {...obj} />;
      })}
    </tbody>
  );
};

export default ArrivalList;


// let [arrivals, setArrivals] = React.useState([]);

/* React.useEffect(() => {

   getFlightData().then(data => {
     const { arrival } = data.body;
     const arrivalList = arrival.map(item => {

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

*/