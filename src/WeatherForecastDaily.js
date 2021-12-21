import React from 'react';
import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon'


export default function WeatherForecastDaily(props) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = (new Date(props.data.dt * 1000)).getDay();
    day = days[day];
    let forecastHigh = Math.round(props.data.temp.max);
    let forecastLow = Math.round(props.data.temp.min);
    let iconCode = props.data.weather[0].icon;

    return (
        <div>
            <div className="col">
                <div className="dailyForecast">
                    <div className="forecastDay">{day}</div>
                    <WeatherIcon iconCode={iconCode} size={35}/>
                    <div className="forecastTemperatures">
                        <span className="forecastHigh">{forecastHigh}°C</span>
                        <span className="forecastLow">{forecastLow}°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}