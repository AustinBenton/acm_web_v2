import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"

const NavBar = () =>{
    return(
        <div class = "navbar">
            <ul class = "navbarUL">
                <li class = "navbarLI">
                    <Link class = "pagelink" to = "/">Home</Link>
                </li>
                <li class = "navbarLI">
                    <Link class = "pagelink" to = "/LoginPage">Login</Link>
                </li>
                <li class = "navbarLI">
                    <Link class = "pagelink" to = "/EventsPage">Events</Link>
                </li>
                <li class = "navbarLI">
                    <Link class = "pagelink" to = "/OfficersPage">Officers</Link>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;