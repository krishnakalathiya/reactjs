import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegistrationForm from './componets/form';

function App() {
  return (
    <div className="app-container d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-8 col-md-6 col-lg-4 custom-card p-4 p-md-5">
            <h2 className="text-center mb-4 fw-bold">Register</h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;