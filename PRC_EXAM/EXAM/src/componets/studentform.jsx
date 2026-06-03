import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../redux/store';

export default function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '', rollNumber: '', phone: '', email: '', age: '', class: '', grade: '', image: '', address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPayload = {
      ...form,
      id: Date.now().toString(),
      name: form.name.toUpperCase(),
      image: form.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300'
    };
    dispatch(addStudent(cleanPayload));
    navigate('/');
  };

  return (
    <div className="card shadow border-0 mx-auto" style={{ maxWidth: '650px', borderRadius: '16px', overflow: 'hidden' }}>
      <div className="p-4 text-white d-flex align-items-center justify-content-between" style={{ backgroundColor: '#0A4B8F' }}>
        <div>
          <h4 className="fw-bold mb-1">System Profile Matriculation</h4>
          <p className="small mb-0 opacity-75">Fill in the administrative details below to generate a card.</p>
        </div>
        <div className="bg-white bg-opacity-25 rounded-circle p-2 d-none d-sm-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </div>
      </div>

      <div className="p-4 bg-light bg-opacity-50">
        <form onSubmit={handleSubmit} className="row g-3">
          
          <div className="col-md-6">
            <label className="form-label small fw-bold text-secondary">Full Name</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              onChange={e => setForm({...form, name: e.target.value})} 
              required 
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label small fw-bold text-secondary">Roll Number</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              onChange={e => setForm({...form, rollNumber: e.target.value})} 
              required 
            />
          </div>

          <div className="col-md-4">
            <label className="form-label small fw-bold text-secondary">Class Assignment</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              placeholder="e.g. CS-A" 
              onChange={e => setForm({...form, class: e.target.value})} 
              required 
            />
          </div>

          <div className="col-md-4">
            <label className="form-label small fw-bold text-secondary">Grade Metric</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              placeholder="e.g. A+" 
              onChange={e => setForm({...form, grade: e.target.value})} 
              required 
            />
          </div>

          <div className="col-md-4">
            <label className="form-label small fw-bold text-secondary">Age</label>
            <input 
              type="number" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              onChange={e => setForm({...form, age: e.target.value})} 
              required 
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-bold text-secondary">Email Interface</label>
            <input 
              type="email" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              onChange={e => setForm({...form, email: e.target.value})} 
              required 
            />
          </div>

          <div className="col-md-6">
            <label className="form-label small fw-bold text-secondary">Phone Number</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              onChange={e => setForm({...form, phone: e.target.value})} 
              required 
            />
          </div>

          <div className="col-12">
            <label className="form-label small fw-bold text-secondary">Physical Address</label>
            <input 
              type="text" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              placeholder="Street Name, City" 
              onChange={e => setForm({...form, address: e.target.value})} 
              required 
            />
          </div>

          <div className="col-12">
            <label className="form-label small fw-bold text-secondary">Profile Image URL</label>
            <input 
              type="url" 
              className="form-control border-secondary-subtle p-2" 
              style={{ borderRadius: '8px' }}
              placeholder="https://domain.com/photo.jpg" 
              onChange={e => setForm({...form, image: e.target.value})} 
            />
          </div>

          {/* Action Button Segment */}
          <div className="col-12 text-center mt-4 pt-2">
            <button 
              type="submit" 
              className="btn btn-lg text-white w-100 py-2 fw-bold shadow-sm" 
              style={{ backgroundColor: '#0A4B8F', borderRadius: '10px', transition: 'all 0.2s' }}
            >
              PRODUCE OFFICIAL CARD
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}