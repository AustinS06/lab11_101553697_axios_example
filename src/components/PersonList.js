import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(err => {
        console.error('Error fetching data with Axios:', err);
      });

  }

  render() {
    return (
      <div>
        {/* Green header */}
        <div
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          <h1 style={{ margin: 0, fontWeight: 'bold' }}>User List</h1>
        </div>

        <Container fluid>
          {this.state.persons.map((person, index) => (
            <Card
              key={person.login.uuid}
              className="mb-4"
              style={{
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '8px'
              }}
            >
              {/* Card header with name + uuid */}
              <Card.Header
                style={{
                  backgroundColor: '#138496',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  fontWeight: '500'
                }}
              >
                {person.name.title} {person.name.first} {person.name.last} -{' '}
                {person.login.uuid}
              </Card.Header>

              <Card.Body>
                <Row>
                  {/* Left column – photo + Details button */}
                  <Col xs={12} md={3} className="text-center mb-3 mb-md-0">
                    <img
                      src={person.picture.large}
                      alt={`${person.name.first} ${person.name.last}`}
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid white'
                      }}
                    />
                    <div className="mt-3">
                      <Button variant="primary" size="sm">
                        Details
                      </Button>
                    </div>
                  </Col>

                  {/* Right column – all the details */}
                  <Col xs={12} md={9}>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">User Name:</Col>
                      <Col sm={8}>{person.login.username}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Gender:</Col>
                      <Col sm={8}>{person.gender.toUpperCase()}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Time Zone Description:</Col>
                      <Col sm={8}>{person.location.timezone.description}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Address:</Col>
                      <Col sm={8}>
                        {person.location.street.number} {person.location.street.name},{' '}
                        {person.location.city}, {person.location.state},{' '}
                        {person.location.country} - {person.location.postcode}
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Email:</Col>
                      <Col sm={8}>{person.email}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Birth Date and Age:</Col>
                      <Col sm={8}>
                        {person.dob.date} ({person.dob.age})
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Register Date:</Col>
                      <Col sm={8}>{person.registered.date}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Phone#:</Col>
                      <Col sm={8}>{person.phone}</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col sm={4} className="fw-bold">Cell#:</Col>
                      <Col sm={8}>{person.cell}</Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default PersonList;