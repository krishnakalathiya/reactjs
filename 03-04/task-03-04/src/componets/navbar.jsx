import React, { useContext } from 'react';
import { CartContext } from './cartcontext';

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#222', color: 'white' }}>
      <strong>My Store</strong>
      <div>
        🛒 Cart Items: <span style={{ background: 'red', padding: '2px 8px', borderRadius: '50%' }}>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;