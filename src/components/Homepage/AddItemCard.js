import React, {useState} from 'react'
import { FloatingLabel, Container, Card, Accordion, Navbar, NavDropdown, Nav, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AddItemCard.module.css';

const AddItemCard = (props) => {

    const { addNewItem } = props;

    const [itemdetails, setItemdetails] = useState({
        itemname: '',
        itemprice: '',
        itemquantity: '',
        itemdescription: '',
        itemimage: ''
    })  

    const { itemname, itemprice, itemquantity, itemdescription, itemimage } = itemdetails;

    return (
        <div>
            <Form>
                <h5>Add New Item</h5>
                <Form.Group className="mb-1">
                    <Form.Label>Item Title:</Form.Label>
                    <Form.Control type="text" placeholder="Item Name" onChange={(e) => {setItemdetails({...itemdetails, itemname: e.target.value})}}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price" onChange={(e) => {setItemdetails({...itemdetails, itemprice: e.target.value})}}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="number" placeholder="Item Count" onChange={(e) => {setItemdetails({...itemdetails, itemquantity: e.target.value})}}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Details:</Form.Label>
                    <FloatingLabel label="Description" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e) => {setItemdetails({...itemdetails, itemdescription: e.target.value})}}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="text" placeholder="Image Url Link" onChange={(e) => {setItemdetails({...itemdetails, itemimage: e.target.value})}}/>
                </Form.Group>
                <Form.Group className="mt-3 text-center">
                    <Button variant="primary" onClick={() => {addNewItem(itemname,itemprice,itemquantity,itemdescription,itemimage)}}>Add Item</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddItemCard
