import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/store';

export default function Login() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [err, setErr] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (dispatch(loginUser(creds))) {
      navigate('/');
    } else {
      setErr('Invalid authentication key. Hint: Use admin / admin');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px' }}>
        <div className="text-center mb-4">
          <div className="bg-primary text-white d-inline-block rounded-circle p-3 mb-2">🎓</div>
          <h3 className="fw-bold text-dark">STUDENT</h3>
          <p className="text-muted small">Portal Terminal Access</p>
        </div>
        {err && <div className="alert alert-danger py-2 small text-center">{err}</div>}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold">Username</label>
            <input type="text" className="form-control" onChange={e => setCreds({...creds, username: e.target.value})} required />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold">Password</label>
            <input type="password" className="form-control" onChange={e => setCreds({...creds, password: e.target.value})} required />
          </div>
          <button type="submit" className="btn text-white w-100 fw-bold" style={{ backgroundColor: '#0A4B8F' }}>AUTHENTICATE</button>
        </form>
      </div>
    </div>
  );
}