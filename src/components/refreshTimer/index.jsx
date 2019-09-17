import React, { Component } from "react";
import './refreshTimer.css';

export default class RefreshTimer extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.start = this.start.bind(this);

        this.state = {
            refreshAt: 60,
            lastRefresh: null,
            currentTime: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location !== prevProps.location) {
            this.start();
        }
    }

    start() {
        this.setState(
            {
                lastRefresh: Date.now(),
                currentTime: this.state.refreshAt
            },
            () => {this.timer = setInterval( this.update, 100);}
        );
    }

    update() {
        if(this.state.currentTime <= 0) {
            clearInterval(this.timer);
            this.props.setLocation(this.props.location, this.start);
        } else {
            var totalSecs = Math.floor((Date.now() - this.state.lastRefresh) / 1000);
            this.setState({ currentTime: this.state.refreshAt - totalSecs });
        }
    }

    render() {
        return (
            <div className="refreshtimer">
                { (this.state.currentTime <= 0) ?
                        <p>Refreshing...</p> :
                        <p>Refreshing in { this.state.currentTime }s</p>
                }
            </div>
        );
    }
}
