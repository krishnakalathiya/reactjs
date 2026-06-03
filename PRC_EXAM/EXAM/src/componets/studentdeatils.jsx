import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent, updateStudent } from '../redux/store';

export default function StudentDetails({ student }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [fields, setFields] = useState({ ...student });

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateStudent(student.id, fields));
    setEditMode(false);
  };

  if (editMode) {
    return (
      <div className="card shadow-lg p-4 border-0 text-start" style={{ width: '480px', borderRadius: '16px', backgroundColor: '#F8FAFC' }}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <span style={{ color: '#0A4B8F', fontSize: '1.25rem' }}>📝</span>
          <h6 className="fw-bold mb-0 text-dark" style={{ letterSpacing: '0.5px' }}>Modify Core Identity</h6>
        </div>
        <form onSubmit={handleSave} className="row g-2">
          <div className="col-12">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.name} onChange={e => setFields({...fields, name: e.target.value.toUpperCase()})} placeholder="NAME" required />
          </div>
          <div className="col-6">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.rollNumber} onChange={e => setFields({...fields, rollNumber: e.target.value})} placeholder="ROLL NO" required />
          </div>
          <div className="col-6">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.class} onChange={e => setFields({...fields, class: e.target.value})} placeholder="CLASS" required />
          </div>
          <div className="col-6">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.grade} onChange={e => setFields({...fields, grade: e.target.value})} placeholder="GRADE" required />
          </div>
          <div className="col-6">
            <input type="number" className="form-control form-control-sm border-secondary-subtle" value={fields.age} onChange={e => setFields({...fields, age: e.target.value})} placeholder="AGE" />
          </div>
          <div className="col-12">
            <input type="email" className="form-control form-control-sm border-secondary-subtle" value={fields.email} onChange={e => setFields({...fields, email: e.target.value})} placeholder="EMAIL" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.phone} onChange={e => setFields({...fields, phone: e.target.value})} placeholder="PHONE" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.address} onChange={e => setFields({...fields, address: e.target.value})} placeholder="ADDRESS" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control form-control-sm border-secondary-subtle" value={fields.image} onChange={e => setFields({...fields, image: e.target.value})} placeholder="IMAGE URL" />
          </div>
          <div className="col-12 d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-sm text-white flex-grow-1 fw-bold" style={{ backgroundColor: '#0A4B8F', borderRadius: '8px' }}>Save Changes</button>
            <button type="button" className="btn btn-light btn-sm border flex-grow-1 fw-bold" style={{ borderRadius: '8px' }} onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="card shadow-sm border-0 overflow-hidden" 
         style={{ width: '480px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
      
      <div className="d-flex align-items-stretch">
        
        <div className="d-flex flex-column align-items-center justify-content-between p-3 text-center text-white position-relative" 
             style={{ backgroundColor: '#0A4B8F', width: '160px' }}>
          
          <div className="position-absolute top-0 start-0 h-100" style={{ width: '5px', backgroundColor: '#4CAF50' }}></div>
          
          <div className="w-100 ps-1">
            <div className="fw-extrabold tracking-wider text-start" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>🎓 STUDENT</div>
            <div className="text-white-50 text-start" style={{ fontSize: '0.6rem', fontWeight: '600' }}>ID: {student.rollNumber}</div>
          </div>

          <div className="my-3 shadow-sm" style={{ padding: '3px', backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
            <img 
              src={student.image || 'https://via.placeholder.com/130'} 
              alt={student.name} 
              style={{ width: '100px', height: '115px', objectFit: 'cover', borderRadius: '9px', display: 'block' }}
            />
          </div>

          <div className="w-100 rounded py-1 px-2 mb-1" style={{ background: 'linear-gradient(90deg, #D9A74A 0%, #ECC970 100%)', color: '#1A1100', fontSize: '0.65rem', fontWeight: '800' }}>
            A.Y. 2026-2027
          </div>
        </div>

        <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between" style={{ backgroundColor: '#F8FAFC' }}>
          
          <div>
            <span className="badge text-white font-monospace mb-1" style={{ backgroundColor: '#4CAF50', fontSize: '0.65rem' }}>
              GRADE {student.grade}
            </span>
            <h5 className="fw-bold text-dark text-uppercase mb-0" style={{ letterSpacing: '0.3px', color: '#1E293B', fontSize: '1.2rem' }}>
              {student.name}
            </h5>
            <p className="text-secondary fw-semibold small mb-2">Class Assignment: {student.class}</p>
            <hr className="my-2 opacity-25" />
          </div>

          <div className="d-flex flex-column gap-1.5 my-2" style={{ fontSize: '0.78rem', color: '#475569' }}>
            <div className="d-flex align-items-center gap-2 text-truncate">
              <span className="text-muted" style={{ width: '18px' }}>🎂</span>
              <span><strong>Age:</strong> {student.age} Years</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-truncate">
              <span className="text-muted" style={{ width: '18px' }}>📞</span>
              <span>{student.phone || 'No Data'}</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-truncate">
              <span className="text-muted" style={{ width: '18px' }}>✉️</span>
              <span className="text-lowercase">{student.email || 'No Data'}</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-truncate">
              <span className="text-muted" style={{ width: '18px' }}>📍</span>
              <span className="text-muted">{student.address || 'Address Unspecified'}</span>
            </div>
          </div>

          {/* Integrated Control Strip */}
          <div className="d-flex gap-2 mt-2 pt-2 border-top border-light-subtle">
            <button 
              className="btn btn-sm btn-outline-secondary flex-grow-1 fw-bold d-flex align-items-center justify-content-center gap-1" 
              style={{ borderRadius: '8px', fontSize: '0.75rem', padding: '6px 12px' }} 
              onClick={() => setEditMode(true)}
            >
              ⚙️ Modify Card
            </button>
            <button 
              className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" 
              style={{ borderRadius: '8px', padding: '6px 10px' }} 
              onClick={() => { if(window.confirm(`Delete ${student.name}?`)) dispatch(deleteStudent(student.id)) }}
            >
              🗑️
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}