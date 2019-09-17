import React, { Component } from "react";
import './locationInput.css';

export default class LocationInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeLocationInput = this.onChangeLocationInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            locationInput: ''
        };
    }

    onChangeLocationInput(e) {
        this.setState({ locationInput: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.setLocation(this.state.locationInput);
    }

    render() {
        return (
            <div className="locationinput">
                <form onSubmit={ this.onSubmit }>
                    <label>Enter your location: </label>
                    <span className="nowrap">
                        <input type="text" onChange={ this.onChangeLocationInput } />
                        <input type="submit" value=">" />
                    </span>
                </form>
            </div>
        );
    }
}
