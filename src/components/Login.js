import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'

const Login = (props) => {
    const { notification, loginAction, setEmail, setUsername, useremail, username, message } = props;

    const [formErrors, setFormErrors] = useState({
        email: "",
        emailStyle: [],
        userName: "",
        userNameStyle: []
    });

    const validateForm = () => {
        let errors = {
            emailStyle: [],
            userNameStyle: []
        }

        const emailError = formErrors.emailStyle;

        if (!useremail) {
            errors.email = "Must Have Email"
            errors.emailStyle.push(styles.validation)
            //setFormErrors({ emailStyle: emailError })
        }

        if (!username) {
            errors.userName = "Must Have Username"
            errors.userNameStyle.push(styles.validation)
        }

        setFormErrors(errors)


    }

    useEffect(() => {
        validateForm();
    }, [useremail, username]);



    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.form}>
                    <Form>
                        {
                            notification ?
                                <Alert variant="danger">
                                    <strong>{message}</strong>
                                </Alert> : ""
                        }
                        <h1 className="title">Login</h1>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className={formErrors.emailStyle.join('')} type="email" placeholder="Enter email" onChange={setEmail} value={useremail} />
                            {!useremail ? <small className={styles.redtext}> {formErrors.email} </small> : null}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className={formErrors.userNameStyle.join('')} type="text" placeholder="Username" onChange={setUsername} value={username} />
                            {!username ? <small className={styles.redtext}> {formErrors.userName} </small> : null}
                        </Form.Group>
                        <a variant="primary" type="submit" onClick={loginAction} disabled>
                            <Button variant="primary" >Login</Button>
                        </a>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login