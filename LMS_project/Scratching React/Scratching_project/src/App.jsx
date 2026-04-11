import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <h1>My Vite + React Project</h1>
        <p>A simple demonstration of HTML structure in React.</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Interactive Counter</h2>
          <p>The current count is: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
            Reset
          </button>
        </section>

        <section className="info">
          <h3>Why use Vite?</h3>
          <ul>
            <li>Instant Hot Module Replacement (HMR)</li>
            <li>Lightning fast cold server start</li>
            <li>Optimized build process</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 React Dev Environment</p>
      </footer>
    </div>
  );
}

export default App;