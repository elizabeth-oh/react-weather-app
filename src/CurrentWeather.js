import React from 'react';
import FormattedDate from './FormattedDate';
import CurrentTemperature from './CurrentTemperature';
import './CurrentWeather.css';

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
                    <div className="col-3">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt={props.data.description} />
                    </div>
                    <CurrentTemperature celsiusTemperature={props.data.temperature} />
                </div>
            </div>
    )
}