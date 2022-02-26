import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

import { addNewFood } from '../apis/api'

function AddFood (props) {

  const [food, addFood] = useState({
    name: '',
    donorRoom:'',
    item: '',
    quantity: '',
    donateDate: '',
    useByDate: '',
    status: ''
})

const [showAlert, setShowAlert] = useState(false)
const [alertInfo, setAlertInfo] = useState({})

const handleChange = (e) => {

  addFood({
      ...food,
      [e.target.name]: e.target.value 
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  addNewFood(food) 
  .then((newFood)=> {
    setAlertInfo({
      name: newFood[0].name
    })
setShowAlert(true)
})

}
return (
  <>
    <Container>
 
    <header className="mt-4 header">
      <h1> Food</h1>
    </header>
    <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Kia ora {alertInfo.name}, thanks for adding your food.</Alert.Heading>
        <p>
          You're also more than welcome to claim food up for grabs.
        </p>
        <hr />
    </Alert> 
    <section>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3"  controlId="name" onChange={handleChange}>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>

    <Form.Group className="mb-3" controlId="donorRoom" onChange={handleChange}>
        <Form.Label>Room Number</Form.Label>
        <Form.Control  name="donorRoom" type="text" placeholder="Enter your room number" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="item" onChange={handleChange}>
        <Form.Label>Food</Form.Label>
        <Form.Control  name="item" type="text" placeholder="Enter the food you'd like to donate" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="quantity" onChange={handleChange}>
        <Form.Label>Amount</Form.Label>
        <Form.Control  name="quantity" type="text" placeholder="Enter the amout of food you have to donate" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="donateDate" onChange={handleChange}>
        <Form.Label>Date donated </Form.Label>
        <Form.Control  name="donateDate" type="text" placeholder="Enter the food you'd like to donate" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="useByDate" onChange={handleChange}>
        <Form.Label>Use by date</Form.Label>
        <Form.Control  name="useByDate" type="text" placeholder="Enter the useby date for the food" />
    </Form.Group>   

    <Form.Group className="mb-3" controlId="status" onChange={handleChange}>
        <Form.Label>Status</Form.Label>
        <Form.Control  name="status" type="text" placeholder="Enter available" />
    </Form.Group>   

    <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </section>
    </Container>
  </> 
)
}

export default AddFood