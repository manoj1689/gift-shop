'use client'
import React,{useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './page.module.css';
import { useCart } from '../cartContext/page';


const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const [formDetail, setFormDetail] = useState({
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
    setFormDetail({ ...formDetail, [name]: value });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log(formDetail);
  };

  return (
    <Container className={styles.checkoutContainer}>
      
      <h2>Checkout</h2>
      {state.cartItems.map((item) => (
                <div key={item.productId}>
                  <Row className={styles.ProductDetail }>
                    <Col sm>
                      {/* Display product images here */}
                      Image
                    </Col>
                    <Col sm>
                      <Row>{item.name}</Row>
                      <Row>Price: {item.price}</Row>
                    </Col>
                   
                    <Col sm>
                    <Row>Quantity</Row>
                    <Row>{item.quantity}</Row>
                    </Col>
                   <Col>
                   <Row>Total Amount: ₹ {item.price * item.quantity}</Row>
                   </Col>
                  </Row>
                </div>
              ))}
              
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formDetail.firstName}
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
                value={formDetail.lastName}
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
            value={formDetail.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formDetail.address}
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
                value={formDetail.city}
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
                value={formDetail.state}
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
                value={formDetail.zip}
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
            value={formDetail.cardNumber}
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
                value={formDetail.expiration}
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
                value={formDetail.cvv}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className={styles.checkoutButtonContainer}>
        <Button type="submit">Place Order</Button>
        </div>
        
      </Form>
    </Container>
  );
};

export default CheckoutPage;
