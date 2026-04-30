import React, { useState } from 'react';

const Counter = () => {
  // Initialize state at 0
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        Decrement
      </button>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;