import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand , NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import logo from '../../assets/niles-icon1.png';

/**Header and navbar component */

function Header() {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                full
                light
            >
                <NavbarBrand href="/">
                    <img className="nav-icon" src={logo} alt="Niles-HRM-Icon" />
                    
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { return true}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link to="/">HOME</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">ABOUT</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/our-services">OUR SERVICES</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact-us">CONTACT US</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/clients">OUR CLIENT</Link>
                        </NavItem>
                   
                    </Nav>
                </Collapse>
            </Navbar>

        </>

    )
}

export default Header
