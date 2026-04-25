import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
  // Beginner-friendly state object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  // Updates the state whenever an input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input 
          type="text" name="name" className="form-control" 
          value={formData.name} onChange={handleChange} required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input 
          type="email" name="email" className="form-control" 
          value={formData.email} onChange={handleChange} required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input 
          type="password" name="password" className="form-control" 
          value={formData.password} onChange={handleChange} required 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input 
          type="tel" name="phone" className="form-control" 
          value={formData.phone} onChange={handleChange} required 
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;