# Minneapolis At-Home Transit and Weather Dashboard

## Summary

![Dashboard Screenshot](/demo/transit-weather-ss.png "Dashboard Screenshot")

This React app is a simple, at-home dashboard created to provide constant access to information that is immediately relevant to the developer and her family. 

Using an API from a regional transit service, it fetches and displays schedule and real-time ETA information at the 3 bus stops near the developer's house. 

Using a National Weather Service (NWS) API, it also fetches and displays the most up-to-date forecast available for their weather "grid" (see more below).

## About the Developer

Lisa Murray is an emerging software engineer based in Minneapolis, MN. She previously worked in public health. She fully designed and developed this dashboard herself. The project received review from her husband, a key stakeholder in this project and fellow software engineer. It will soon be run 24/7 on a Raspberry Pi that is mounted to a monitor, and hung by their front door.

## Tech Stack

This React app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As a learning opportunity, SCSS was used, but it honestly was not really necessary for something as simple and already-commponentized as this.

## Features

![Dashboard Updating in Action](/demo/transit-weather-gif.gif "Dashboard Updating in Action")

To avoid having to sit and stare at the app for up to 32 seconds wondering how recently it refreshed, there is a countdown circle corresponding with the fetch interval for the transit API. 

The weather data is refreshed less often from the NWS so, accordingly, it is not updated as often on the app, and does not have a corresponding countdown timer. It does display the time that the NWS most recently updated the forecast.

Lastly, and perhaps the most delightful feature (at least in the developer's house): since she speaks Fahrenheit but her husband speaks Celsius, the app does the temperature conversion for them :)

### Weather API

This app uses data from the [National Weather Service](https://www.weather.gov/documentation/services-web-api)
To use it you will need to first [identify which grid you're in with your lat/long coordinates](https://api.weather.gov/points/44.9584,-93.2962). Here is an
example API call for the grid my home is in in Minneapolis: https://api.weather.gov/gridpoints/MPX/106,70/forecast


### Transit (Minneapolis)

This app uses the Nextrip API from Metro Transit (the Twin Cities transit agency). It uses stop numbers which can be found [here](https://www.metrotransit.org/stops-stations), and displays up to 6 upcoming departures for each stop (both real-time and scheduled). More documentation and other APIs are available from [Metro Transit](https://svc.metrotransit.org/nextrip). 





