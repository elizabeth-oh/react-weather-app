import React, {useState} from 'react';
import axios from 'axios';
import './WeatherApp.css';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

export default function WeatherApp(props) {
   const [weatherData, setWeatherData] = useState({ ready:false });
   const [city, setCity] = useState(props.defaultCity); 
   
   function handleResponse(response) {
       setWeatherData(
           {
            ready: true,
            coordinates: response.data.coord,
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

    function search() {
        const apiKey = "3a1d5d01d798e7cb31a083ab1fcb39e0";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setCity(event.target.value);
    }
   
   if (weatherData.ready) {
        return (
            <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input 
                                    type="search" 
                                    className="searchForm form-control search-input" 
                                    placeholder="Look for a city..." 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-3">
                                <input 
                                    type="submit" 
                                    className="searchButton btn btn-primary w-100" 
                                    value="Search"
                                />
                            </div>
                        </div>
                    </form>
                    <hr />
                <CurrentWeather data={weatherData} />
                <div className="row">
                <WeatherForecast coordinates={weatherData.coordinates} />
                </div>
                <hr />      
            </div>
        );}
    else {
        search()
        return "Loading...";
    }
}