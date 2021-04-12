import React from 'react';
import { useHistory } from 'react-router';

const MySingleEvent = (props) => {

    const event = props.event;
    const { _id, userName, eventName, date, img } = event;
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteRegistration/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('Your registration is successfully deleted');
            history.replace('/');
        });
    }

    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between shadow p-5">
                <div className="mb-5 ms-5 me-5">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
                <div>
                    <h3>{userName}</h3>
                    <h4>Event: {eventName}</h4>
                    <h5>Date: {date}</h5>
                    <button onClick={handleDelete} className="btn btn-danger">Cancel Event</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleEvent;