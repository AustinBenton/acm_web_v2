import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import "./NavBar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <a href = "/"><NavLink><img className = "logoformat" src = "./logo.png"/></NavLink></a>
                        </NavItem>
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/EventsPage">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/OfficersPage">Officers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/AdminPage">Admin Portal</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink href="/LoginPage">Sign In</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavBar;