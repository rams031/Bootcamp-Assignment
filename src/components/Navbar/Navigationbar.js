import React from 'react'
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navigationbar = () => {
    const userName = useSelector(state => state.account.username);
    return (
        
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <Navbar.Brand href="#home">Rick Hardware Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/homepage"> Homepage</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/cart"> Cart</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/log"> Inventory Log</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/createuser">Add User</NavLink></Nav.Link>
                        <Nav.Link className="justify-content-end"><NavLink to="/">Log Out</NavLink></Nav.Link>
                        { userName ? <h3> (Admin) {userName} </h3> : null }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
