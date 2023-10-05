'use client'
import React from 'react';
import { useCart } from '../cartContext/page';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import the correct router module
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
function Cart() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useCart();
  const { data: session } = useSession();
  
  // Move the useEffect hook inside the functional component body
  useEffect(() => {
    setIsClient(true);
  }, [session]);

  if (!session) {
    // Redirect to the login page if the user is not authenticated
    // You can use the router to specify the redirect path
    return (
      <div className={styles.loginAlertPage}>
         <Container className={styles.loginMessage}>
          <div className={styles.loginMessageText}>Please log in to access this page.</div>
          <Link href="/api/auth/signin" className={styles.loginLink}>
            SignIn
          </Link>
        </Container>
      </div>
    );
  }

  const removeFromCart = (productId) => {
    // Dispatch the REMOVE_FROM_CART action with the product ID
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  
    // Get the current cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Find and remove the item from the cart data
    const updatedCartData = cartData.filter((item) => item.productId !== productId);
  
    // Update local storage with the updated cart data
    localStorage.setItem('cart', JSON.stringify(updatedCartData));
    window.location.reload();
  };
  const handleCheckout = () => {
    router.push('/cartCheckout'); // Navigate to the checkout page
  };
 
  return (
    <>{isClient ? 
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
                  className={styles.Image}
                />
              </div>
              <br />
              <p>Your Cart is Empty.</p>
              <p>Add items to your cart.</p>
              <Button className={styles.shopNow}> <span>Shop</span> <span className={styles.Now}> Now</span></Button>
            </>
          ) : (
            <div>
              {state.cartItems.map((item) => (
                <div key={item.productId} className={styles.items}>
                  <Row>
                    <Col  sm className={styles.itemImage} >
                      {/* Display product images here */}
                      Image
                    </Col>
                    <Col className={styles.itemInfo}>
                  
                      <Row className={styles.detailText}>{item.name}</Row>
                      <Row className={styles.detailText1}>Price: ₹ {item.price}</Row>
                   
                   
                    
                    
                    <Row className={styles.detailText1}> Quantity:{item.quantity}</Row>
                    
                    <Row sm={4} >
                    <Button onClick={() => removeFromCart(item.productId)} variant='light'  >
                      <DeleteIcon sx={{ color: 'orange',fontSize:"32px"}}/>
                      </Button>

                    </Row>
                     
                    
                    
                    </Col>
                    
                  </Row>
                </div>
              ))}
              <div>
                <Button className={styles.checkoutButton} variant='danger' onClick={handleCheckout}>Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div> : 'PreRendered'}</>
    
  );
}

export default Cart;
