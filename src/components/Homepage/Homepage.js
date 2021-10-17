import React, { useState } from 'react';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';
import styles from './Homepage.module.css';
import AddItemCard from './AddItemCard';
import Navigationbar from '../Navbar/Navigationbar';


const Homepage = (props) => {

  const { 
    item, 
    addNewItem, 
    deleteItem, 
    AddItemtoCart, 
    productNotification, 
    productValidationMessage, 
    itemdetails, 
    setItemname, 
    setItemprice, 
    setItemquantity, 
    setItemdescription, 
    setItemimage,
    searchProductHandler } = props

  return (
    <div className="homepage" style={{ backgroundColor: 'blanchedalmond' }}>
      <Navigationbar />
      <Container  >
        <Row>
          <Col xs={5} md={7} className="itemList">
            <h1>Homepage</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Search" onChange={searchProductHandler} />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={6} md={4}>
          </Col>
        </Row>
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
            <AddItemCard addNewItem={addNewItem}
              productNotification={productNotification}
              productValidationMessage={productValidationMessage}
              itemdetails={itemdetails}
              setItemname={setItemname}
              setItemprice={setItemprice}
              setItemquantity={setItemquantity}
              setItemdescription={setItemdescription}
              setItemimage={setItemimage}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
