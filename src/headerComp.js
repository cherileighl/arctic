import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Top(props) {
    return (

        <bs.Navbar variant="dark">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img alt="Logo" src="../logo.jpg" style={{marginRight: "5px"}}/>
                      Arctic
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, Cherileigh" alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )};

export default Top;