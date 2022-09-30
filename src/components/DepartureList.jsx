import React from 'react';
import Flight from './Flight.jsx';
import {useSelector} from "react-redux";
import moment from "moment";

const statusObject = {
  DP: 'Departed',
};

const DepartureList = ({searchValue}) => {

    console.log("searchValue", searchValue)

    const departuresData = useSelector(state => state.flights.departures);

    console.log("departuresData", departuresData)


    const flightList= departuresData.filter(item=>{

       if ( item.codeShareData[0].codeShare.toLowerCase().includes(searchValue.toLowerCase())){
         return true;
        }
        return false
    }).map(item => {

        return {
            id: item.ID,
            terminal: item.term,
            time: item.actual,
            destination: item['airportToID.name_en'],
            //status: statusObject[item.status] ?  item.status : item.status ,
            status: item.status ==="DP" || item.status ==="LN" ? statusObject[item.status] : item.status ,
            airline: item.airline.en.name,
            flightCode: item.codeShareData[0].codeShare,
            logo: item.logo,
        };
    });

    const departureList = flightList



  return (
    <tbody>
      {departureList.map(obj => {
        return <Flight key={obj.id} {...obj} />;
      })}
    </tbody>
  );
};

export default DepartureList;


/** let [departure, setDeparture] = React.useState([]);

  React.useEffect(() => {
    getFlightData().then(data => {
      const { departure } = data.body;

      const departureList = departure.map(item => {
        return {
          id: item.ID,
          terminal: item.term,
          time: item.actual,
          destination: item['airportToID.name_en'],
          status: statusObject[item.status],
          airline: item.airline.en.name,
          flightCode: item.codeShareData[0].codeShare,
          logo: item.logo,
        };
      });

      setDeparture(departureList);
    });
  }, []);*/


/*const flightsList = [
    {
        id: 2000043783676,
        term: "A",
        actual: "2022-01-10T04:10:00Z",
        status: "DP",
        logo: "https://api.iev.aero/media/airline/files/5ab0f0c65ffa6045899216.jpg",
        name: "LOT",
        codeShare: "LO756",
    },

    {
        id: 2000043783736,
        term: "A",
        actual: "2022-01-10T04:40:00Z",
        status: "DP",
        logo: "https://api.iev.aero/media/airline/files/5ab0f23020f9e949838987.png",
        name: "Wizz Air",
        codeShare: "W66275",
    },

    {
        id: 2000043783892,
        term: "A",
        actual: "2022-01-10T06:05:00Z",
        status: "DP",
        logo: "https://api.iev.aero/media/airline/files/5ab0f23020f9e949838987.png",
        name: "Wizz Air",
        codeShare:"W66275",
    },
]*/

/**
const DepartureList = () => {

    const [airFlights, setAirFlights] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await fetchFlightData();
            setAirFlights(dataFromServer);
        }

        console.log(getData())

    }, [])


    return <table className="table">
        <thead>
        <tr>
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th className="td-hiden">Flight</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><span className="terminal terminal_A">A</span></td>
            <td>7:40 AM</td>
            <td>Hurghada</td>
            <td>CX to 2:50 PM</td>
            <td className="airline">Bees Airline<img className="item-logo"
                                                     src="https://api.iev.aero/media/airline/files/606aefa0c8a4a734421442.png"
                                                     alt="logo"/></td>
            <td className="td-hiden">7B2101</td>
        </tr>
        <tr>
            <td><span className="terminal terminal_A">A</span></td>
            <td>6:20 AM</td>
            <td>Warsaw</td>
            <td>DP to 6:28 AM</td>
            <td className="airline">LOT
                <img className="item-logo" src="https://api.iev.aero/media/airline/files/5ab0f0c65ffa6045899216.jpg"
                     alt="logo"/></td>
            <td className="td-hiden">LO756</td>
        </tr>
        </tbody>
    </table>
}

export default DepartureList;*/
