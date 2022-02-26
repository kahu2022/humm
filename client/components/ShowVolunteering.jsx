import React, { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import PageHeader from './PageHeader'
import Volunteering from './Volunteering'


import { fetchVolunteering } from "../apis/api"

function ShowVolunteering (props) {
  const [volunteering, setVolunteering] = useState(null)

useEffect (() => {
  getVolunteering()
}, [])

const getVolunteering = () => {
  fetchVolunteering()
  .then((arr) => {
    setVolunteering(arr)
  })
}

return (
  <>
  <PageHeader title = 'Volunteer' description = 'Fill out the form to lend a helping hand!'/>
  <Container>
    <Row className="g-3"> 
      {volunteering ? volunteering.map((volunteer) => {
        console.log(volunteer)
        return (
          <Col md={6} lg={4}>
            <Volunteering 
            key={volunteer.id}
            title={volunteer.title}
            description={volunteer.description}
            when={volunteer.when}
            where={volunteer.where}
            />
           </Col>
        )
      })
    : null }
    </Row>
    
    </Container>
  </>
  )
}

export default ShowVolunteering