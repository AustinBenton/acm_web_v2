import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"

const NavBar = () =>{
    return(
        <div>
            <ul className = "wrapper">
                <li className = "linkformat">
                    <Link to = "/">Home</Link>
                </li>
                <li className = "linkformat">
                    <Link  to = "/LoginPage">Login</Link>
                </li>
                <li className = "linkformat">
                    <Link to = "/EventsPage">Events</Link>
                </li>
                <li className = "linkformat">
                    <Link to = "/OfficersPage">Officers</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;