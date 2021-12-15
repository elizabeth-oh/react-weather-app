import React, {useState} from 'react';
import axios from 'axios';
import './WeatherApp.css';

export default function WeatherApp(props) {
   const [weatherData, setWeatherData] = useState({ ready:false });
   const [city, setCity] = useState(props.defaultCity); 
   
   function handleResponse(response) {
       setWeatherData(
           {
            ready: true,
            city: response.data.name,
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            icon: response.data.weather[0].icon 
           }
       )
    }
   
   if (weatherData.ready) {
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
                    <h1 className="city">{weatherData.city}</h1>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li className="currentTime">{(weatherData.date).toString()}</li>
                                <li>{weatherData.description}</li>
                                <li>Humidity: {weatherData.humidity}%</li>
                                <li>Wind: {weatherData.wind}km/h</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt={weatherData.description} />
                        </div>
                        <div className="col-3">
                            <h2 className="currentTemperature">{weatherData.temperature}</h2>
                            <span className="units">
                                <a href="https://shecodes.io" className="celsiusLink">°C </a> |
                                <a href="https://shecodes.io" className="fahrenheitLink"> °F</a>
                            </span>
                        </div>
                    </div>
                </div>
        );}
    else {
        const apiKey = "3a1d5d01d798e7cb31a083ab1fcb39e0";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

        axios.get(apiUrl).then(handleResponse)

        return "Loading...";
    }
}