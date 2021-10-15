import React, { useState } from 'react';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';
import styles from './Homepage.module.css';
import AddItemCard from './AddItemCard';
import Navigationbar from '../Navbar/Navigationbar';


const Homepage = (props) => {

  const { item, addNewItem, deleteItem, AddItemtoCart } = props

  return (
    <div className="homepage" style={{ backgroundColor: 'blanchedalmond'}}>
        <Navigationbar />
        <Container  >
          <h1>Homepage</h1>
          <Row>
            <Col xs={5} md={7} className="itemList">
              <Row xs={1} md={3} className="g-4">
                {
                  item.length > 0 ?
                    item.map((item, index) => {
                      return (
                        <ItemCard item={item} key={index} deleteItem={deleteItem} AddItemtoCart={AddItemtoCart} />
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
  )
}

export default Homepage
