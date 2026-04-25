import React from 'react';
// 1. Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Import your Form component
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">My React App</span>
        </div>
      </nav>

      <main>
        {/* 3. Render the Form component */}
        <RegistrationForm />
      </main>

      <footer className="text-center mt-5 pb-4 text-muted">
        <small>Beginner React Form Project &copy; 2026</small>
      </footer>
    </div>
  );
}

export default App;