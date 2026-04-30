import React, { useState } from 'react';

function App() {
  // State hook to track the number
  const [count, setCount] = useState(0);

  // Logic functions
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>Counter Application</h1>
      
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        {count}
      </div>

      <button 
        onClick={handleDecrement} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        - Decrement
      </button>

      <button 
        onClick={handleIncrement} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginLeft: '10px' }}
      >
        + Increment
      </button>
    </div>
  );
}

export default App;