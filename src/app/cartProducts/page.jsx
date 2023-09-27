'use client'
import React from 'react';
import { useCart } from '../cartContext/page'; // Import your cart context
import { Row, Col } from 'react-bootstrap';

function Cart() {
  const { state, dispatch } = useCart(); // Get cart state from context

  // Function to remove an item from the cart and reload the page
  const removeFromCart = (productId) => {
    // Dispatch the REMOVE_FROM_CART action with the product ID
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });

    // Get the current cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Find and remove the item from the cart data
    const updatedCartData = cartData.filter((item) => item.productId !== productId);

    // Update local storage with the updated cart data
    localStorage.setItem('cart', JSON.stringify(updatedCartData));

    // Reload the page to reflect the updated cart state
    window.location.reload();
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.cartItems.map((item) => (
            <div key={item.productId}>
              <Row>
                <Col>
                Images
                  {/* Display product images here */}
                </Col>
                <Col>
                  <Row>{item.name}</Row>
                  <Row>Quantity: {item.quantity}</Row>
                  <Row>Price: ₹{item.price}</Row>
                </Col>
                <Col>
                  <button onClick={() => removeFromCart(item.productId)}>
                    Remove
                  </button>
                </Col>
              </Row>
            </div>
          ))}
          {/* Add a total price calculation here */}
        </div>
      )}
    </div>
  );
}

export default Cart;
