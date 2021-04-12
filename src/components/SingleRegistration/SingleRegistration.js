import React from 'react';
import { useHistory } from 'react-router';

const SingleRegistration = (props) => {

    const reg = props.reg;
    const { _id, userName, eventName, email, date } = reg;
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
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{eventName}</td>
            <td>{date}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default SingleRegistration;