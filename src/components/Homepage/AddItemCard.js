import React, { useState, useEffect } from 'react'
import { FloatingLabel, Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AddItemCard.module.css';

const AddItemCard = (props) => {

    const { addNewItem, 
        id, 
        productNotification, 
        productValidationMessage, 
        itemdetails,
        setItemname, 
        setItemprice, 
        setItemquantity, 
        setItemdescription, 
        setItemimage } = props;

    const [formErrors, setFormErrors] = useState({
        itemName: "",
        itemNameStyle: [],
        itemPrice: "",
        itemPriceStyle: [],
        itemQuantity: "",
        itemQuantityStyle: [],
        itemDescription: "",
        itemDescriptionStyle: [],
        itemimage: "",
        itemimageStyle: [],
    });

    const { itemname, itemprice, itemquantity, itemdescription, itemimage } = itemdetails;

    const validateForm = () => {
        let errors = {
            itemNameStyle: [],
            itemPriceStyle: [],
            itemQuantityStyle: [],
            itemDescriptionStyle: [],
            itemimageStyle: []
        }


        if (!itemname) {
            errors.itemname = "Must Have Item Name"
            errors.itemNameStyle.push(styles.validation)
        }

        if (!itemprice) {
            errors.itemprice = "Must Have Item Price"
            errors.itemPriceStyle.push(styles.validation)
        }

        if (!itemquantity) {
            errors.itemprice = "Must Have Item Price"
            errors.itemQuantityStyle.push(styles.validation)
        }


        if (!itemdescription) {
            errors.itemDescription = "Must Have Description"
            errors.itemDescriptionStyle.push(styles.validation)
        }

        if (!itemimage) {
            errors.itemimage = "Must Have Image Url"
            errors.itemimageStyle.push(styles.validation)
        }

        setFormErrors(errors)
    }

    useEffect(() => {
        validateForm();
    }, [itemname, itemprice, itemquantity, itemdescription, itemimage, itemimage]);

    return (
        <div>
            <Card className="mb-1">
                <Card.Body>
                    <Form>
                        {
                            productNotification ?
                                <Alert variant="danger">
                                    <strong>{productValidationMessage}</strong>
                                </Alert> : ""
                        }
                        <h5>Add New Item</h5>
                        <Form.Group className="mb-1">
                            <Form.Label>Item Title:</Form.Label>
                            <Form.Control className={formErrors.itemNameStyle.join('')} type="text" placeholder="Item Name" onChange={setItemname} value={itemname} />
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control className={formErrors.itemPriceStyle.join('')} type="number" placeholder="Price" onChange={setItemprice} value={itemprice} />
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control className={formErrors.itemQuantityStyle.join('')} type="number" placeholder="Item Count" onChange={setItemquantity} value={itemquantity} />
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Details:</Form.Label>
                            <FloatingLabel label="Description" className="mb-3">
                                <Form.Control className={formErrors.itemDescriptionStyle.join('')} as="textarea" placeholder="Leave a comment here" onChange={setItemdescription} value={itemdescription} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control className={formErrors.itemimageStyle.join('')} type="text" placeholder="Image Url Link" onChange={setItemimage} value={itemimage} />
                        </Form.Group>
                        <Form.Group className="mt-3 text-center">
                            <Button variant="primary" onClick={() => {
                                addNewItem(itemname, itemprice, itemquantity, itemdescription, itemimage)
                            }}>Add Item</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddItemCard
