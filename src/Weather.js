import { useState, useEffect } from 'react';
import "./Weather.scss";

function Weather() {

    const [weather, setWeather] = useState([]);
    const [updateTime, setUpdateTime] = useState(null);
    const [queryTime, setQueryTime] = useState(null);
    const url="https://api.weather.gov/gridpoints/MPX/106,70/forecast";
  
    const fetchWeather = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const tempWeather = json.properties.periods.slice(0,2);
      const tempUpdateTime = new Date(json.properties.updateTime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit'});
      const tempQueryTime = new Date(json.properties.generatedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit'});
  
  
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
      
      <div className='weatherSection'>
      <div className='weatherQueryInfo'>
      <h1>🌤️⛈️🌨️</h1>
            {/* <p id="queryTime" className='timeInfo'>last query: {queryTime}</p> */}
            <p id="updateTime" className='timeInfo'>data from: {updateTime}</p>
      </div>
      
      {weather.map(function(weatherObj) {
              return (
                <div className='weatherForecast'>
                  <div className='weatherHeader'>
                    <h2>{weatherObj.name}:</h2>
                    <h2>{weatherObj.temperature} F / {weatherObj.celsius} C</h2>
                  </div>
                  <p className='weatherDescription'>{weatherObj.detailedForecast}</p>
                </div>
                )
              })}
          </div>        
    </div>)
}

export default Weather;