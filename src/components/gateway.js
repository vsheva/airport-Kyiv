/*
export const getFlightData = (day) => {
  return fetch(`https://api.iev.aero/api/flights/${day}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
};
*/


/**
const baseUrl='https://api.iev.aero/api/flights'

export const fetchCalendarData=async(date)=>{
    const response= await fetch(`${baseUrl}/${date}`)
    const data = await response.json();
    return data;
}*/

/*
const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';

export const getFlightData = (userName) => {
    return fetch(`${baseUrl}/${userName}`).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
    });
};*/
