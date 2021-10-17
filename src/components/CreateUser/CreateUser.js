import React, { useState, useEffect } from 'react'
import { FloatingLabel, Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CreateUser.module.css';
import Navigationbar from '../Navbar/Navigationbar';
import axios from 'axios';

const CreateUser = () => {



    const [userAccount, setUserAccount] = useState({
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        emailAddress: "",
        emailAddressStyle: [],
        passWord: "",
        passWordStyle: []
    });

    const { email, password } = userAccount;

    const postApiAction = () => {

        const emailValidation = email.includes("@") && email.includes(".");


        if(email){
            if (!emailValidation) {
                alert("Make sure to fill email with correct format")
            }
        }
 

        if (!email && !password || email && !password || !email && password) {
            alert("Make sure to fill all fields")
        }


        if (emailValidation && password) {

            axios.post('https://reqres.in/api/register', {
                email,
                password
            })
                .then(function (response) {
                    console.log(response);
                    alert("User Successfully Added!")
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Server Error!")
                });
        }

    }


    const validateForm = () => {

        let errors = {
            emailAddressStyle: [],
            passWordStyle: []
        }


        if (!email) {
            errors.emailAddress = "Must Have Username"
            errors.emailAddressStyle.push(styles.validation)
        }

        if (!password) {
            errors.passWord = "Must Have Password"
            errors.passWordStyle.push(styles.validation)
        }

        setFormErrors(errors)

    }

    useEffect(() => {
        validateForm();
    }, [email, password])

    return (
        <div style={{ backgroundColor: 'blanchedalmond' }}>
            <Navigationbar />
            <Container>
                <Card className="mb-1 mt-3">
                    <Card.Body> 
                        <Form>
                            <h5>Add New User</h5>

                            <Form.Group className="mb-1">
                                <Form.Label>Email:</Form.Label>

                                <Form.Control
                                    className={formErrors.emailAddressStyle.join('')}
                                    type="email"
                                    placeholder="First Name"
                                    onChange={(e) => {
                                        setUserAccount({ ...userAccount, email: e.target.value })
                                    }}
                                    value={email} />

                            </Form.Group>
                            <Form.Group className="mb-1">
                                <Form.Label>Password:</Form.Label>

                                <Form.Control
                                    className={formErrors.passWordStyle.join('')}
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={(e) => {
                                        setUserAccount({ ...userAccount, password: e.target.value })
                                    }}
                                    value={password} />
                            </Form.Group>
                            <Button variant="primary" onClick={postApiAction} className="mt-1">Add User</Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Container>

        </div>
    )
}

export default CreateUser
