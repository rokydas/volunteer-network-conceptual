import React, { useEffect, useState } from 'react';
import MySingleEvent from '../MySingleEvent/MySingleEvent';

const MyEvents = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/registration/${user.email}`)
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    myEvents.map(event => <MySingleEvent event={event}></MySingleEvent>)
                }
            </div>
        </div>
    );
};

export default MyEvents;