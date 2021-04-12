import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {

    const event = props.event;
    const { _id, name, img, description, background } = event;

    // const eventStyle = {
    //     backgroundColor: background
    // }

    return (
        <div className="col-md-3 mb-3" >
            <Link to={`/registerEvent/${_id}`}>
                <div className="m-3 shadow rounded p-3 h-100">
                    <img className="img-fluid" src={img} alt="" />
                    <h4>{name}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Event;