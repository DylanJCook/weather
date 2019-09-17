import React, { Component } from "react";
import './weatherData.css';


export default class WeatherData extends Component {
    render() {
        var data = this.props.locationData;
        if (data === null) {
            return (
                <div className="weatherdata">Loading weather data...</div>
            );
        }
        return (
            <div className="weatherdata">
                <h2>{data.name}</h2>
                <div>{data.main.temp} °C</div>
                <div>{data.main.pressure} hpa</div>
                <div>{data.main.humidity} %</div>
            </div>
        );
    }
}
