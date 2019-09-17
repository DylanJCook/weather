import React, { Component } from "react";
import './weather.css';

import LocationInputComp from '../locationInput'
import WeatherDataComp from '../weatherData'
import RefreshTimerComp from '../refreshTimer'

export default class Weather extends Component {
    constructor(props) {
        super(props);

        this.setLocation = this.setLocation.bind(this);
        this.getRequestString = this.getRequestString.bind(this);

        this.state = {
            location: '',
            locationData: null
        };
    }
    
    componentDidMount() {
        this.setLocation('Cambridge');
    }

    getRequestString(location) {
        var appid = '46e629b13bd5cebf1ec99f8548201672';
        var units = 'metric'
        return 'https://api.openweathermap.org/data/2.5/weather?&units=' + units + '&appid=' + appid + '&q=' + location;
    }

    setLocation (location, cb) {
        var self = this;
        fetch(this.getRequestString(location))
        .then((resp) => resp.json())
        .then(function(resp) {
            if(resp.cod === "404") return;
            if(resp.cod === "400") return;
            self.setState({
                locationData: resp,
                location: resp.name
            }, cb);
        });
    }

    render() {
        return (
            <div className="contentarea">
                <LocationInputComp setLocation={ this.setLocation }/>
                <WeatherDataComp locationData={ this.state.locationData } />
                <RefreshTimerComp setLocation={ this.setLocation } location={ this.state.location } />
            </div>
        );
    }
}
