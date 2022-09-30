import React from 'react';
import Flight from './Flight.jsx';
import {useSelector} from "react-redux";
import moment from "moment";

const statusObject = {
  LN: 'Landed',
};

const ArrivalList = ({searchValue}) => {


  const arrivalsData = useSelector(state => state.flights.arrivals);

  const arrivalList = arrivalsData.filter(item=>{

    if ( item.codeShareData[0].codeShare.toLowerCase().includes(searchValue.toLowerCase())){
      return true;
    }
    return false
  }).map(item => {

    return {
      id: item.ID,
      terminal: item.term,
      time: item.actual,
      destination: item['airportFromID.name_en'],
      status: item.status ==="DP" || item.status ==="LN" ? statusObject[item.status] : item.status ,
      airline: item.airline.en.name,
      flightCode: item.codeShareData[0].codeShare,
      logo: item.logo,
    };
  });


  return (
    <tbody>
      {arrivalList.map(obj => {
        return <Flight key={obj.id} {...obj} />;
      })}
    </tbody>
  );
};

export default ArrivalList;


/**
 import React from 'react';
import Flight from './Flight.jsx';
import {useSelector} from "react-redux";
import moment from "moment";

const statusObject = {
  LN: 'Landed',
};

const ArrivalList = ({searchValue}) => {


  const arrivalsData = useSelector(state => state.flights.arrivals);

  const arrivalList = arrivalsData.map(item => {

    return {
      id: item.ID,
      terminal: item.term,
      time: item.actual,
      destination: item['airportFromID.name_en'],
      status: item.status ==="DP" || item.status ==="LN" ? statusObject[item.status] : item.status ,
      airline: item.airline.en.name,
      flightCode: item.codeShareData[0].codeShare,
      logo: item.logo,
    };
  });


  return (
      <tbody>
      {arrivalList.map(obj => {
        return <Flight key={obj.id} {...obj} />;
      })}
      </tbody>
  );
};

export default ArrivalList;
 */
















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