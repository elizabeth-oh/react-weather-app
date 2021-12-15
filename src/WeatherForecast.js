import React, { useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css'
import WeatherForecastDaily from './WeatherForecastDaily'

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    function handleResponse(response) {
        setReady(true)
        setForecastData(response.data.daily)
    }

    if (ready) {
    return (
        <WeatherForecastDaily data={forecastData} />
    )
    } else {
        const apiKey = "3a1d5d01d798e7cb31a083ab1fcb39e0"
        let lat = props.coordinates.lat
        let lon = props.coordinates.lon
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse)

        return null
    }
}