import React from 'react'
import Navigationbar from '../Navbar/Navigationbar';
import { Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import styles from './Log.module.css'

const Log = (props) => {

    const { loglist } = props;

    return (
        <div className="log" style={{ backgroundColor: 'blanchedalmond'}}>
            <Navigationbar />
            <Container >
                <h1>Inventory Log</h1>
                {loglist.length > 0 ? <h3> Total Log: {loglist.length}</h3> : ""}
                {
                    loglist.length > 0 ?
                        loglist.map((item, index) => {
                            return (

                                <Card className="mb-1">
                                    <Card.Body>
                                        <Card.Title><h1>{item.ActionName}!</h1></Card.Title>
                                        <Card.Text>
                                            
                                            <h4> Item: {item.ItemName} </h4> <br />

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                        : <h1 style={{ textAlign: 'center' }} >No Inventory Log</h1>
                }
            </Container>

        </div>
    )
}

export default Log
