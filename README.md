# Minneapolis At-Home Transit and Weather Dashboard

## Summary

![Dashboard Screenshot](/demo/transit-weather-ss.png "Dashboard Screenshot")

This React app is a simple, at-home dashboard created to provide constant access to information that is immediately relevant to me and my family. Using an API from our regional transit service, it fetches and displays schedule and real-time ETA information at the 3 bus stops near my house. 

Using a National Weather Service API, it also fetches and displays the most up-to-date forecast available for our "grid" (see more below).

Lastly, and perhaps the most useful feature in my house, since my husband speaks Celsius and I speak Fahrenheit, it does the temperature conversion for us :)

## About the Developer

Lisa Murray is an emerging software engineer based in Minneapolis, MN. She previously worked in public health.

## Tech Stack

This React app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As a learning opportunity, SCSS was used, but it's honestly not really necessary for something as simple and commponentized as this.

## Features

![Dashboard Updating in Action](/demo/transit-weather-gif.gif "Dashboard Updating in Action")

To avoid having to sit and stare at the app for 32 seconds wondering how recently it refreshed, there is a countdown circle corresponding with the fetch interval for the transit API. 

The weather data is refreshed less often from the NWS so it is not updated as often and does not have a corresponding countdown timer.

### Weather

https://www.weather.gov/documentation/services-web-api
to find grid info: https://api.weather.gov/points/44.9584,-93.2962
example response (minneapolis): https://api.weather.gov/gridpoints/MPX/106,70/forecast


### Transit (Minneapolis)

https://www.metrotransit.org/stops-stations
https://svc.metrotransit.org/nextrip
https://svc.metrotransit.org/swagger/index.html

### Create React App




