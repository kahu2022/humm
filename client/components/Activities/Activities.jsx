import React, { useEffect, useState } from "react"
import  Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import ActivitySuggestion from './ActivitySuggestion'

import PageHeader from '../PageHeader'
import Activity from './Activity'
import Loading from '../Loading'

import { fetchActivities } from '../../apis/api'

import { withAuthenticationRequired } from '@auth0/auth0-react'

function Activities() {
  const [activities, setActivities] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const [showAddActivities, setShowAddActivities] = useState(false)

  const toggleForm = () => {
    setShowAddActivities(!showAddActivities)
  }

  const renderForm = () => {
    return <ActivitySuggestion />
  }

  const categories = ["All", "Health", "Fun", "Culture", "Cuisine"]

  const [category, setCategory] = useState("All")

  const filteredData = activitiesCategory()

  function activitiesCategory() {
    if (!category || category === "All") {
      return activities
    } else {
      return activities.filter((item) => item.category === category)
    }
  }

  useEffect(() => {
    fetchActivities().then((activities) => setActivities(activities))
    return null
  }, [])

  return (
    <>
      <PageHeader
        title="Community Events/Activities"
        description="Sign up for our free community events and activities"
      />
      <Container>
        <Row className="mb-3">
          <Col sm={6} lg={4} className="mb-3" >
            <Form.Group
              controlId="activityCategory"
              key={"e"}
              onChange={(e) => setCategory(e.target.value)}
            >
              <Form.Select
                name="activityCategory"
                aria-label="activityCategory"
              >
                <option>Filter by activity category</option>
                {categories.map((category, index) => {
                  return (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={6} lg={{span:3, offset: 5}} className="d-grid gap-2 mb-3"  >
            <Button
              variant="primary"
              
              onClick={toggleForm}
            >
              {showAddActivities ? "Hide" : "Suggest an activity"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Container>
          <Alert
            variant="success"
            show={showAlert}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
          </Alert>

          {showAddActivities && renderForm()}
        </Container>
        </Row>

        
        <Row className="g-3">
          {filteredData?.map((act) => {
            return (
              <Col md={6} lg={4} key={act.id}>
                <Activity key={act.id} activity={act} />
              </Col>
            )
          })}
        </Row>
      </Container>
      <Container>
        <Alert
          variant="success"
          show={showAlert}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>
      
        {showAddActivities && renderForm()}
      </Container>
    </>
  )
}

export default withAuthenticationRequired(Activities, {
  onRedirecting: () => <Loading />,
})
