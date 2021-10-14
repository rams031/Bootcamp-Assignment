import React, { useState } from 'react'
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import styles from './ItemCard.module.css';

const ItemCard = (props) => {

    const { item, key, deleteItem, addToCart } = props;
    const [quantity, setQuantity] = useState(0)
    const [alert, setalert] = useState(false)

    const backgroundColor = [];

    if (item.ItemCount == 0) {
        backgroundColor.push(styles.colorRed)
    } else if (item.ItemCount <= 10) {
        backgroundColor.push(styles.colorYellow)
    } else if (item.ItemCount >= 10) {
        backgroundColor.push(styles.colorGreen)
    }

    const AddItemtoCart = (name, quantity, count, price, picture) => {
        console.log(quantity >= count)

        //const test = () =
        //if (quantity <= count) {
        //    setalert(false)
        //} //else {
//
        //    setInterval(() => {
        //        setalert(true)
        //    }, 500)
        //    setQuantity(0)
        //    setalert(false)
        //}
        //quantity <= count ?
        //addToCart(item.ItemName, quantity, item.ItemPrice, item.ItemPicture)
        //: setalert(true);
        //
        //setQuantity(0)
    }

    return (
        <div>
            <Col className="mb-2 ">
                <Card >
                    <Card.Img variant="top" src={item.ItemPicture} />
                    <Card.Body>
                        <Card.Title>{item.ItemName}</Card.Title>
                        <Card.Text>
                            Price: P{item.ItemPrice}
                        </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Details</Accordion.Header>
                            <Accordion.Body>
                                <h6 className={backgroundColor}> Quantity: {item.ItemCount}</h6>
                                {item.ItemDescription}
                                <Col className="mb-2 mt-2">
                                    <Form >

                                        {
                                            item.ItemCount > 0 ?
                                                <div>
                                                    <Row className="mb-2">
                                                        <Form.Control type="number" placeholder="Quantity" onChange={(e) => { setQuantity(e.target.value) }} value={quantity} />
                                                    </Row >
                                                    <Row className="mb-2">
                                                        <Button onClick={() => { AddItemtoCart(item.ItemName, quantity, item.ItemCount, item.ItemPrice, item.ItemPicture) }}>Add to Cart</Button>
                                                    </Row>
                                                </div>

                                                : ""
                                        }
                                        <Row className="mb-2 ">
                                            <Button variant='danger' onClick={() => { deleteItem(key) }}>Delete</Button>
                                        </Row>
                                        {
                                            alert ?
                                                <div>
                                                    <Row className="mb-2">
                                                        <Alert variant='danger'>
                                                            Quantity Exceeded!
                                                        </Alert>
                                                    </Row>
                                                </div> : null
                                        }
                                    </Form>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </Col>
        </div>
    )
}

export default ItemCard
