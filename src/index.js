import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

function Transit() {
  const [actualTransit, setActualTransit] = useState([]);
  const [scheduledTransit, setScheduledTransit] = useState([]);
  const url="https://svc.metrotransit.org/nextripv2/1328";

  const fetchTransit = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const tempActualTransit = [];
    const tempScheduledTransit = [];


    for (let i = 0; i < json.departures.length; i++) {
      if (json.departures[i].actual) {
        tempActualTransit.push(json.departures[i])
      } else {
        tempScheduledTransit.push(json.departures[i])
      }
    }
    console.log("ACTUAL TRANSIT: ");
    console.log(tempActualTransit);
    console.log("SCHEDULED TRANSIT: ");
    console.log(tempScheduledTransit);

    setActualTransit(tempActualTransit);
    setScheduledTransit(tempScheduledTransit);
  };

  useEffect(() => {
    fetchTransit();
  }, []);

  return(<div>
    <h1>TRANSIT</h1>
    <h2>Real Time Departures:</h2>
    {actualTransit.map(function(actualTransitObj) {
            return (
              <p>{actualTransitObj.route_id} {actualTransitObj.direction_text}: {actualTransitObj.departure_text}</p>
              )
            })}
      <div>
      <h2>Sheduled Departures:</h2>
      {scheduledTransit.map(function(scheduledTransitObj) {
            return (
              <p>{scheduledTransitObj.route_id} {scheduledTransitObj.direction_text}: {scheduledTransitObj.departure_text}</p>
              )
            })}
      </div>
  </div>)
}

function Weather() {

  const [weather, setWeather] = useState([]);
  const [updateTime, setUpdateTime] = useState(null);
  const url="https://api.weather.gov/gridpoints/MPX/106,70/forecast";

  const fetchWeather = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const tempWeather = json.properties.periods.slice(0,2);

    // create celsius temperature from fahrenheit
    for (let i = 0; i < tempWeather.length; i ++) {
      tempWeather[i].celsius = parseInt((tempWeather[i].temperature - 32)/1.8);
    }
    setWeather(tempWeather);
    setUpdateTime(json.properties.updateTime);
  };  

  useEffect(() => {
    fetchWeather();
  }, []);

  console.log("WEATHER");
  console.log(weather);
  return(<div>
    <h1>WEATHER:</h1>
    {weather.map(function(weatherObj) {
            return (
              <div>
                <h2>{weatherObj.name}</h2>
                <h3>Temperature: {weatherObj.temperature} {weatherObj.temperatureUnit} / {weatherObj.celsius} C</h3>
                <p>{weatherObj.detailedForecast}</p>
              </div>
              )
            })}
      <div>
        last updated: {updateTime}
      </div>
  </div>)
}
  

function App() {
  return (
    <div className="App">
      <header className="tab">
        <Weather/>
      </header>
      <header className="tab">
        <Transit/>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
