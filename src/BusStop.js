import { useState, useEffect } from 'react';

function BusStop(props) {
    const [actualDepartures, setActualDepartures] = useState([]);
    const [scheduledDepartures, setScheduledDepartures] = useState([]);
    const url=`https://svc.metrotransit.org/nextripv2/${props.stopId}`;
  
    const fetchDepartures = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const tempActualDepartures = [];
      const tempScheduledDepartures = [];
  
  
      for (let i = 0; i < json.departures.length; i++) {
        if (json.departures[i].actual) {
          tempActualDepartures.push(json.departures[i])
        } else {
          tempScheduledDepartures.push(json.departures[i])
        }
      }
    //   console.log("ACTUAL Departures: ");
    //   console.log(tempActualDepartures);
    //   console.log("SCHEDULED TRANSIT: ");
    //   console.log(tempScheduledDepartures);
  
      setActualDepartures(tempActualDepartures);
      setScheduledDepartures(tempScheduledDepartures);
    };
  
    useEffect(() => {
      fetchDepartures();
    }, []);
  
    return(<div>
      <h2>{props.stopName} </h2>
      <h2>Real Time Departures:</h2>
      {actualDepartures.map(function(actualDepartureObj) {
              return (
                <p>{actualDepartureObj.route_id} {actualDepartureObj.direction_text}: {actualDepartureObj.departure_text}</p>
                )
              })}
        <div>
        <h2>Sheduled Departures:</h2>
        {scheduledDepartures.map(function(scheduledDepartureObj) {
              return (
                <p>{scheduledDepartureObj.route_id} {scheduledDepartureObj.direction_text}: {scheduledDepartureObj.departure_text}</p>
                )
              })}
        </div>
    </div>)
  }

export default BusStop;