import React from 'react'
import Navigationbar from '../Navbar/Navigationbar';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './Cart.module.css';

const Cart = (props) => {
    const { cartlist } = props;
    console.log(cartlist)
    return (
        <div className="cart" style={{ backgroundColor: 'blanchedalmond'} }>
            <Navigationbar />
            <Container  >
                <h1>Cart</h1> 
                { cartlist.length > 0 ? <h3> Total Orders: {cartlist.length}</h3> : ""}
                {
                    cartlist.length > 0 ?
                        cartlist.map((item, index) => {
                            return (
                                <Card className="mb-1">
                                    <Card.Body>
                                        <Card.Title><h1>{index + 1}. {item.CartItemName}</h1></Card.Title>
                                        <Card.Text>
                                            <h5 className="mb-1">
                                            Ordered: {item.CartOrder}x </h5> <br />  
                                            <h4 style={{color: 'green'}}> Total Price: {item.CartOrder * item.CartPrice} </h4>
                                             
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                        : <h1 style={{textAlign: 'center'}} >No Orders</h1>
                }
            </Container>

        </div>
    )
}

export default Cart
