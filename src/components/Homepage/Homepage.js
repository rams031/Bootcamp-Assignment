import React, { useState } from 'react';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';
import styles from './Homepage.module.css';
import AddItemCard from './AddItemCard';
import Navigationbar from '../Navbar/Navigationbar';


const Homepage = (props) => {

  const { item, addNewItem, deleteItem, addToCart } = props
  const id = item.length;

  return (
    <div className="homepage">
      <div className="inventory">
        <Navigationbar />
        <Container>
          <Row>
            <Col xs={5} md={7} className="itemList">
              <Row xs={1} md={3} className="g-4">
                {
                  item.length > 0 ?
                    item.map((item, index) => {
                      return (
                        <ItemCard item={item} key={index} deleteItem={deleteItem} addToCart={addToCart} />
                      )
                    }) : null
                }
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <AddItemCard addNewItem={addNewItem} id={id} />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Homepage
