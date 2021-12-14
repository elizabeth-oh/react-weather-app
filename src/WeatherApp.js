import React from 'react';
import './WeatherApp.css';

export default function WeatherApp() {
   return (
       <div className="wrapper">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="searchForm form-control search-input" placeholder="Look for a city..." />
                    </div>
                    <div className="col-3">
                        <input type="submit" className="searchButton btn btn-primary w-100" value="Search"></input>
                    </div>
                </div>
            </form>
            <hr />
            <h1 className="city">Paris</h1>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li className="currentTime">Tuesday 18:26</li>
                        <li>Overcast Clouds</li>
                        <li>Humidity: 92%</li>
                        <li>Wind: 1km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" />
                </div>
                <div className="col-3">
                    <h2 className="currentTemperature">8</h2>
                    <span className="units">
                        <a href="https://shecodes.io" className="celsiusLink">°C </a> |
                        <a href="https://shecodes.io" className="fahrenheitLink"> °F</a>
                    </span>
                </div>
            </div>
        </div>
   )
}