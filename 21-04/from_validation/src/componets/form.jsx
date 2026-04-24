import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    country: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must accept the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData([...submittedData, formData]);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        country: '',
        agreeTerms: false,
      });
      setErrors({});
    }
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px', fontFamily: 'Arial' }}>
      {/* Form Section */}
      <div style={{ flex: '1', maxWidth: '400px' }}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label><br/>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%' }} />
            {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label><br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%' }} />
            {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Phone:</label><br/>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%' }} />
            {errors.phone && <p style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label><br/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%' }} />
            {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Country:</label><br/>
            <select name="country" value={formData.country} onChange={handleChange} style={{ width: '100%' }}>
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
            </select>
            {errors.country && <p style={{ color: 'red', fontSize: '12px' }}>{errors.country}</p>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>
              <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
              I agree to the terms
            </label>
            {errors.agreeTerms && <p style={{ color: 'red', fontSize: '12px' }}>{errors.agreeTerms}</p>}
          </div>

          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>

      {/* Table Section */}
      <div style={{ flex: '2' }}>
        <h2>Registered Users</h2>
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.length > 0 ? (
              submittedData.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.country.toUpperCase()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleForm;