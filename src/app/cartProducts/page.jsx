'use client'
import React from 'react';
import { useCart } from '../cartContext/page';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import the correct router module

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useCart();

  const removeFromCart = (productId) => {
    // Dispatch the REMOVE_FROM_CART action with the product ID
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleCheckout = () => {
    router.push('/cartProducts/cartCheckout'); // Navigate to the checkout page
  };

  return (
    <div className={styles.cartPage}>
      <Container className={styles.cartContainer}>
        <div className={styles.itemDetails}>
          <h2>Shopping Cart</h2>
          {state.cartItems.length === 0 ? (
            <>
              <div className={styles.cartImage}>
                <Image
                  src="/emptyCart.webp"
                  alt="Empty Cart Image"
                  width={300}
                  height={250}
                  className="Image"
                />
              </div>
              <br />
              <p>Your Cart is Empty.</p>
              <p>Add items to your cart.</p>
              <Button className={styles.shopNow}>Shop Now</Button>
            </>
          ) : (
            <div>
              {state.cartItems.map((item) => (
                <div key={item.productId}>
                  <Row>
                    <Col>
                      {/* Display product images here */}
                      <Image src={item.imageSrc} alt="Product Image" width={100} height={100} />
                    </Col>
                    <Col>
                      <Row>{item.name}</Row>
                      <Row>Quantity: {item.quantity}</Row>
                      <Row>Price: ₹{item.price}</Row>
                    </Col>
                    <Col>
                      <Button onClick={() => removeFromCart(item.productId)}>
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
              <Row>
                <Button onClick={handleCheckout}>Checkout</Button>
              </Row>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Cart;
