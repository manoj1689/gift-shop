'use client'
import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './page.module.css';
import { useCart } from '../cartContext/page';


const CheckoutPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { state, dispatch } = useCart();
  const [formDetail, setFormDetail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  
  });
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetail({ ...formDetail, [name]: value });
  };
  const totalAmount = state.cartItems.reduce((total, item) => {
    const itemAmount = item.price * item.quantity;
    return total + itemAmount;
  }, 0); // Initialize the total with 0
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log(formDetail);
  };

  return (
    <>
    {isClient ? 
    
    <Container >
    <h2>Checkout</h2>
    <Row className={styles.checkoutPage}> 
    <Col sm className={styles.checkoutDetails}>
  
    
  {state.cartItems.map((item) => (
            <Col className={styles.items} key={item.productId}>
              <Row className={styles.ProductDetail }>
               <Col>
               <Row>
               <Col sm>
                  <Row>{item.name}</Row>
                  <Row>Price: ₹ {item.price}</Row>
                </Col>
               
                <Col sm>
                <Row>Quantity</Row>
                <Row>{item.quantity}</Row>
                </Col>
               <Col>
               <Row className={styles.Amount}>Amount: ₹ {item.price * item.quantity}</Row>
               </Col>
               

               </Row>
               
               </Col>
                
              </Row>
            </Col>
          ))}
           <Row className={styles.totalAmount}>
              Total Amount: ₹ {totalAmount}
            </Row>
         
  </Col>
    <Col sm className={styles.checkoutContainer}>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="firstName">
            <Form.Label className={styles.formLabel}>First Name</Form.Label>
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
            <Form.Label className={styles.formLabel}>Last Name</Form.Label>
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
        <Form.Label className={styles.formLabel}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formDetail.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label className={styles.formLabel}>Address</Form.Label>
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
            <Form.Label className={styles.formLabel}>City</Form.Label>
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
            <Form.Label className={styles.formLabel}>State</Form.Label>
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
            <Form.Label className={styles.formLabel}>ZIP Code</Form.Label>
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
     
      <div className={styles.checkoutButtonContainer}>
      <Button type="submit">Place Order</Button>
      </div>
      
    </Form>
      
    </Col>
   

    </Row>
   
   
   
            
    
  </Container>: 'PreRendered'}
   
    
    </>
    
  );
};

export default CheckoutPage;
