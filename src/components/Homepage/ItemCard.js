import React, { useState } from 'react'
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import styles from './ItemCard.module.css';

const ItemCard = (props) => {

    const { item, key, deleteItem, AddItemtoCart } = props;
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
                                                        <Button onClick={() => {

                                                            const test = item.ItemCount >= quantity;
                                                            console.log(test)
                                                            console.log(quantity)
                                                            console.log(item.ItemCount)

                                                            //AddItemtoCart(quantity, item.ItemCount, item.ItemName, item.ItemPrice, item.ItemPicture)

                                                            if (test) {
                                                                AddItemtoCart(quantity, item.ItemCount, item.ItemName, item.ItemPrice, item.ItemPicture)
                                                                setQuantity(0)
                                                                setalert(false)
                                                            } else {
                                                                setalert(true)
                                                                setQuantity(0)
                                                                setInterval(() => {
                                                                    setalert(false)
                                                                }, 2000)
                                                            }

                                                        }}>Add to Cart</Button>
                                                    </Row>
                                                </div>

                                                : ""
                                        }
                                        <Row className="mb-2 ">
                                            <Button variant='danger' onClick={() => { deleteItem(key, item.ItemName) }}>Remove</Button>
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
