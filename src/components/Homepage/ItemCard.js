import React from 'react'
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import styles from './ItemCard.module.css';

const ItemCard = (props) => {

    const { item } = props;
    const backgroundColor = [];
    console.log(item.ItemCount)

    if (item.ItemCount == 0) {
        backgroundColor.push(styles.colorRed)
    } else if (item.ItemCount <= 10) {
        backgroundColor.push(styles.colorYellow)
    } else if (item.ItemCount >= 10) {
        backgroundColor.push(styles.colorGreen)
    }

    console.log(backgroundColor)

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
                                        <Row className="mb-2">
                                            <Form.Control type="number" placeholder="Quantity" min={0} max={item.ItemCount} />
                                        </Row >
                                        <Row className="mb-2">
                                            <Button>Add to Cart</Button>
                                        </Row>
                                        <Row className="mb-2"> 
                                            <Alert variant='danger'>
                                                This is a alert—check it out!
                                            </Alert>
                                        </Row>
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
