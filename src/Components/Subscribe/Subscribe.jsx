import React from 'react';
import './Subscribe.css';
import Vr from '../../assets/images/subscribe_vr.png';


const Subscribe = () => {

    const subscribeSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="Subscribe">
            <div className="SubscribeLeft">
                <img src={Vr} alt="subscribe vr"/>
            </div>
            <div className="SubscribeRight">
                <h1>Be the first to know when the app is live!</h1>
                <form onSubmit={subscribeSubmit} >
                    <input required type="email" placeholder="Your email here" />
                    <button type="submit" className="SubscribeButton" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe;