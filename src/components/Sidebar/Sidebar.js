import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className="m-5 p-5">
            <Link to='/allRegistration'><h3>All Registration</h3></Link>
            <Link to="/addEvent"><h3>Add Event</h3></Link>
        </div>

    );
};

export default Sidebar;