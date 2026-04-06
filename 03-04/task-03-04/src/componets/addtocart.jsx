import React, { useContext } from 'react';
import { CartContext } from './cartcontext';

function Product() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', textAlign: 'center' }}>
      <h3>Awesome T-Shirt</h3>
      <p>$20.00</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;