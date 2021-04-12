import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddEvent = () => {

    const [event, setEvent] = useState({});
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your event is successfully added')
                history.replace('/');
            })
    }

    const handleOnBlur = (e) => {
        const newEvent = event;
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Add a new event</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleOnBlur} name="name" className="form-control" placeholder="Event Name" required /> <br />
                        <input className="form-control" type="text" onBlur={handleOnBlur} name="description" placeholder="Event Description" required /><br />
                        <input className="form-control" type="text" onBlur={handleOnBlur} name="img" placeholder="Image URL" required /><br />
                        <button className="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;