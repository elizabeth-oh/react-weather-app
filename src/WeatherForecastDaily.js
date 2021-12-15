import React from 'react';
import WeatherIcon from './WeatherIcon'


export default function WeatherForecastDaily(props) {
    let forecastHigh = Math.round(props.data[0].temp.max);
    let forecastLow = Math.round(props.data[0].temp.min);
    let iconCode = props.data[0].weather[0].icon;

    return (
        <div>
            <div className="col">
                <div className="forecastDay">Thu</div>
                <WeatherIcon iconCode={iconCode} size={35}/>
                <div className="forecastTemperatures">
                    <span className="forecastHigh">{forecastHigh}°C</span>
                    <span className="forecastLow">{forecastLow}°C</span>
                </div>
            </div>
        </div>
    )
}