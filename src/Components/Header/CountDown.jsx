import React, { Fragment } from 'react';
import './CountDown.css';


const CountDown = props => {

    return (
        <Fragment>
            <h4 className="CountDownHeading">Available in</h4>
            <div className="CountDown">
                <div className="Days CountDownCard">
                    <div className="CountDownNumber">59</div>
                    <div className="CountDownLabel">Days</div>
                </div>
                <div className="Days CountDownCard">
                    <div className="CountDownNumber">23</div>
                    <div className="CountDownLabel">Hours</div>
                </div>
                <div className="Days CountDownCard">
                    <div className="CountDownNumber">59</div>
                    <div className="CountDownLabel">Minutes</div>
                </div>
                <div className="Days CountDownCard">
                    <div className="CountDownNumber">24</div>
                    <div className="CountDownLabel">Seconds</div>
                </div>
            </div>
        </Fragment>
    )
}

export default CountDown;
