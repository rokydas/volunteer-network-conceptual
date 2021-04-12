import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const RegisterEvent = () => {

    const { id } = useParams();
    const history = useHistory();
    const [event, setEvent] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    const [registrationData, setRegistrationData] = useState({
        userName: user.name,
        email: user.email,
    })

    const handleDateChange = (e) => {
        const newRegistrationData = { ...registrationData };
        newRegistrationData.date = e.target.value;
        setRegistrationData(newRegistrationData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registrationData.date) {
            // console.log('ready for submit')
            fetch('http://localhost:5000/addRegistration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registrationData)
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your registration is successfully done')
                    history.replace('/');
                })
        }
        else {
            alert('Please select date')
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/event/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
                const newRegistrationData = { ...registrationData }
                newRegistrationData.eventName = data.name
                newRegistrationData.eventDescription = data.description
                newRegistrationData.img = data.img
                setRegistrationData(newRegistrationData)
            })
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form className="form-control m-5" onSubmit={handleSubmit}>
                    <h3>Register as a volunteer</h3>
                    <input type="text" name="userName" placeholder="userName" value={user.name} /> <br /><br />
                    <input type="text" name="eventName" placeholder="eventName" value={event.name} /> <br /><br />
                    <textarea cols="100" rows="5" type="text" name="description" value={event.description} placeholder="Description" /> <br /><br />
                    <input type="date" onChange={handleDateChange} name="date" /> <br /><br />
                    <button className="btn btn-primary">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterEvent;