import React from 'react';
import FormattedDate from './FormattedDate';
import CurrentTemperature from './CurrentTemperature';
import WeatherIcon from './WeatherIcon';
import './CurrentWeather.css';
import './WeatherApp.css';

export default function CurrentWeather(props) {

    return (
            <div>
                <h1 className="city">{props.data.city}</h1>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li className="currentTime">
                                <FormattedDate date={props.data.date} />
                            </li>
                            <li className="text-capitalize">{props.data.description}</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}km/h</li>
                        </ul>
                    </div>
                    <div className="col-3 icon">
                        <WeatherIcon iconCode={props.data.icon} />
                    </div>
                    <CurrentTemperature celsiusTemperature={props.data.temperature} />
                </div>
            </div>
    )
}