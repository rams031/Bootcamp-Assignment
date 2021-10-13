import React, { useState } from 'react';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';
import styles from './Homepage.module.css';
import AddItemCard from './AddItemCard';


const Homepage = (props) => {

  const { item, addNewItem } = props

  const itemCol = [];

  return (
    <div className="homepage">
      <div className="inventory">
        <Navbar bg="light" expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand href="#home">Rick Hardware Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Cart</Nav.Link>
                <Nav.Link href="#link">Logs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col xs={5} md={7} className="itemList">
              <Row xs={1} md={3} className="g-4">
                {
                  item.length > 0 ?
                    item.map((item, index) => {
                      return (
                        <ItemCard item={item} key={index} />
                      )
                    }) : null
                }
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <AddItemCard addNewItem={addNewItem} />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Homepage
