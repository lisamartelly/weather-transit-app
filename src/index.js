import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';



function Weather() {

  const [weather, setWeather] = useState([]);
  const [updateTime, setUpdateTime] = useState(null);
  const url="https://api.weather.gov/gridpoints/MPX/106,70/forecast";

  const fetchWeather = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const tempWeather = json.properties.periods.slice(0,2);
    for (let i = 0; i < tempWeather.length; i ++) {
      tempWeather[i].celsius = parseInt((tempWeather[i].temperature - 32)/1.8);
    }
    setWeather(tempWeather);
    setUpdateTime(json.properties.updateTime);
  };  

  useEffect(() => {
    fetchWeather();
  }, []);


  console.log(weather);
  return(<div>
    {weather.map(function(weatherObj) {
            return (
              <div>
                <h1>{weatherObj.name}</h1>
                <h2>Temperature: {weatherObj.temperature} {weatherObj.temperatureUnit} / {weatherObj.celsius} C</h2>
                <h2>Detailed Forecast:</h2>
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
      <header className="App-header">
        <Weather/>
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
