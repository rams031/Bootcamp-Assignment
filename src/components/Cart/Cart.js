import React from 'react'
import Navigationbar from '../Navbar/Navigationbar';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Cart = () => {
    return (
        <div>
            <Navigationbar />
            <Container>
                <h1>Cart</h1>
                <Card className="mb-1">
                    <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title>test</Card.Title>
                        <Card.Text>
                            Price:
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

export default Cart
