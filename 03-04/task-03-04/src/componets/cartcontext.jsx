import React, { createContext, useState } from 'react';

// 1. Create the Context
export const CartContext = createContext();

// 2. Create the Provider
export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}