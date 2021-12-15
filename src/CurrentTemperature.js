import React, {useState} from 'react';
import './App.css';

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function displayFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToFahrenheit() {
        return (Math.round((props.celsiusTemperature * 9/5)+32))
    }

    if (unit === "celsius") {
        return (
            <div className="col-3">
            <h2 className="currentTemperature">{props.celsiusTemperature}</h2>   
            <span className="units">
                °C | <a href="/" className="unitsLink" onClick={displayFahrenheit}> °F</a>
            </span>
        </div>
        );
    } else {
        return (
            <div className="col-3">
            <h2 className="currentTemperature">{convertToFahrenheit()}</h2>   
            <span className="units">
                <a href="/" className="unitsLink" onClick={displayCelsius}>°C</a> | °F
            </span>
        </div>
        );
    }
}