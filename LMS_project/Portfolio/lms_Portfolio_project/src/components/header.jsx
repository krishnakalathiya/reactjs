import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: '#333', color: '#fff' }}>
      <h1>BrandLogo</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;