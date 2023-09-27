// cartContext.js
'use client'
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Function to get cart data from localStorage
const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

// Function to save cart data to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the item to the cart
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // Add other cases for cart actions (e.g., REMOVE_FROM_CART)
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: getCartFromLocalStorage(), // Initialize cart state from localStorage
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Save cart data to localStorage whenever the cart state changes
  useEffect(() => {
    saveCartToLocalStorage(state.cartItems);
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
