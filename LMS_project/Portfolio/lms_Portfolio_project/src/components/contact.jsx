import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We will contact ${email}`);
  };

  return (
    <section style={{ padding: '50px 20px', background: '#eee' }}>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
      </form>
    </section>
  );
};

export default Contact;