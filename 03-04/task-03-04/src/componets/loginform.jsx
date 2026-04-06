import React, { useState, useContext } from 'react';
import { AuthContext } from './authcontext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      login(username);
    } else {
      alert("Wrong password! Try admin and 123");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      /><br />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;