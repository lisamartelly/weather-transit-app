import { useState, useEffect } from 'react';

function Weather() {

    const [weather, setWeather] = useState([]);
    const [updateTime, setUpdateTime] = useState(null);
    const [queryTime, setQueryTime] = useState(null);
    const url="https://api.weather.gov/gridpoints/MPX/106,70/forecast";
  
    const fetchWeather = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const tempWeather = json.properties.periods.slice(0,2);
      const tempUpdateTime = new Date(json.properties.updateTime).toLocaleTimeString();
      const tempQueryTime = new Date(json.properties.generatedAt).toLocaleTimeString();
  
  
      // create celsius temperature from fahrenheit
      for (let i = 0; i < tempWeather.length; i ++) {
        tempWeather[i].celsius = parseInt((tempWeather[i].temperature - 32)/1.8);
      }
      setWeather(tempWeather);
      setUpdateTime(tempUpdateTime);
      setQueryTime(tempQueryTime);
    };  
  
    useEffect(() => {
      setInterval(() => fetchWeather(), 300000);
      fetchWeather();
    }, []);
  
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
          <p>last queried: {queryTime}</p>
          <p>last updated: {updateTime}</p>
        </div>
    </div>)
}

export default Weather;