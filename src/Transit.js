import BusStop from './BusStop.js'
import ProgressCircle from './ProgressCircle.js';
import { useEffect, useState } from 'react';


function Transit() {

    const busStops = ["1328", "1098", "53342"];
    const [busStopsData, setBusStopsData] = useState({});

    const fetchSingleStopDepartures = async (busStopId) => {
      const url=`https://svc.metrotransit.org/nextripv2/${busStopId}`;

      const response = await fetch(url);
      const json = await response.json();
      const realTimeDepartures = [];
      const scheduledDepartures = [];
  
      for (let i = 0; i < json.departures.length; i++) {
        if (json.departures[i].actual) {
          realTimeDepartures.push(json.departures[i])
        } else {
          scheduledDepartures.push(json.departures[i])
        }
      };
  
      const singleStopData = {
        "realTimeDepartures": realTimeDepartures, 
        "scheduledDepartures": scheduledDepartures
      };

      return singleStopData;
    };

    const fetchAllDepartures = async () => {
      const tempBusStopsData = {};

      for (const busStopId of busStops) {
        tempBusStopsData[busStopId] = await fetchSingleStopDepartures(busStopId);
      };

      setBusStopsData(tempBusStopsData);
    };

    //interval for progress circle and repeated departure fetching
    const [timeLeft, setTimeLeft] = useState(32)

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000);

      if (timeLeft === 0) {
        fetchAllDepartures();
        setTimeLeft(32);
      }
      return () => {
        clearInterval(interval)
      }

      }, [timeLeft]) //eslint-disable-line react-hooks/exhaustive-deps

      // fetch departures on load
    useEffect(() => {
      fetchAllDepartures();
    }, []); //eslint-disable-line react-hooks/exhaustive-deps


    return(<div>
      <h1>TRANSIT</h1>
      <BusStop stopName="Hennepin & 24th - Northbound" stopId="1328" busStopData = {busStopsData["1328"]} />
      <BusStop stopName="Hennepin & 24th - Southbound" stopId="1098" busStopData = {busStopsData["1098"]} />
      <BusStop stopName="TESTING RANDO NORTH LINE" stopId="53342" busStopData = {busStopsData["53342"]} />
      <ProgressCircle timeLeft={timeLeft} />
    </div>)
  }

export default Transit;
