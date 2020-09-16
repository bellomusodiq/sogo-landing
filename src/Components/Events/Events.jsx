import React from 'react';
import './Events.css';
import EventItem from './EventItem';



const Events = () => {

    return (
        <div className="Events">
            <h1>Events</h1>
            <p>
                There is alot happening aroung you!, 
                enjoy it all from the comfort of your 
                smart mobile phones in virtual reality
            </p>
            <div className="EventItems">
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
            </div>
        </div>
    )
}

export default Events;
