import React, {useState} from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

const Login = (props) => {
    const { notification, loginAction, setEmail, setPassword } = props;
    return (
        <div>
            <div className="cards">
                <div className="form">
                    <Form>
                        {
                            notification ?
                            <Alert variant="danger">
                                <strong>Wrong Credential!</strong>
                            </Alert> : ""
                        }
                        <h1 className="title">Rick Steak House</h1>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={setPassword}/>
                        </Form.Group>
                        <a variant="primary" type="submit" onClick={loginAction}>
                            <Button variant="primary" >Login</Button>
                        </a>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login