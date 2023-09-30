'use client'
import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log(formData);
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="zip">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="cardNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="expiration">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="text"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                placeholder="MM/YYYY"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
