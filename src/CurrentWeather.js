import React, {useState} from 'react';
import './CurrentWeather.css';

export default function CurrentWeather(props) {
    return (
            <div>
                <h1 className="city">{props.data.city}</h1>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li className="currentTime">{(props.data.date).toString()}</li>
                            <li className="text-capitalize">{props.data.description}</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}km/h</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt={props.data.description} />
                    </div>
                    <div className="col-3">
                        <h2 className="currentTemperature">{props.data.temperature}</h2>
                        <span className="units">
                            <a href="https://shecodes.io" className="celsiusLink">°C </a> |
                            <a href="https://shecodes.io" className="fahrenheitLink"> °F</a>
                        </span>
                    </div>
                </div>
            </div>
    )
}