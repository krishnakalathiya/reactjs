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

  // --- EDIT MODE: INLINE GRID FORM ---
  if (editMode) {
    return (
      <tr style={{ backgroundColor: '#F8FAFC', verticalAlign: 'middle' }}>
        <td colSpan="6" className="p-3">
          <form onSubmit={handleSave} className="row g-2 align-items-center m-0">
            <div className="col-md-3">
              <input type="text" className="form-control form-control-sm mb-1" value={fields.name} onChange={e => setFields({...fields, name: e.target.value.toUpperCase()})} placeholder="Name" required />
              <input type="text" className="form-control form-control-sm" value={fields.rollNumber} onChange={e => setFields({...fields, rollNumber: e.target.value})} placeholder="Roll No" required />
            </div>
            <div className="col-md-1.5">
              <input type="text" className="form-control form-control-sm" value={fields.class} onChange={e => setFields({...fields, class: e.target.value})} placeholder="Class" required />
            </div>
            <div className="col-md-1.5">
              <input type="text" className="form-control form-control-sm" value={fields.grade} onChange={e => setFields({...fields, grade: e.target.value})} placeholder="Grade" required />
            </div>
            <div className="col-md-1">
              <input type="number" className="form-control form-control-sm" value={fields.age} onChange={e => setFields({...fields, age: e.target.value})} placeholder="Age" />
            </div>
            <div className="col-md-3">
              <input type="email" className="form-control form-control-sm mb-1" value={fields.email || ''} onChange={e => setFields({...fields, email: e.target.value})} placeholder="Email" />
              <input type="text" className="form-control form-control-sm" value={fields.phone || ''} onChange={e => setFields({...fields, phone: e.target.value})} placeholder="Phone" />
            </div>
            <div className="col-md-2 d-flex gap-1 justify-content-end">
              <button type="submit" className="btn btn-sm text-white fw-bold px-2.5" style={{ backgroundColor: '#0A4B8F', borderRadius: '6px' }}>Save</button>
              <button type="button" className="btn btn-sm btn-light border fw-bold px-2.5" style={{ borderRadius: '6px' }} onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>
        </td>
      </tr>
    );
  }

  // --- VIEW MODE: INDEPENDENT SEPARATE CELL BLOCKS ---
  return (
    <tr style={{ verticalAlign: 'middle', backgroundColor: '#FFFFFF' }}>
      
      {/* COLUMN 1: STUDENT INFO (Matches 30% header weight) */}
      <td className="p-3 border-bottom" style={{ width: '30%' }}>
        <div className="d-flex align-items-center">
          <img 
            src={student.image || 'https://via.placeholder.com/130'} 
            alt={student.name} 
            style={{ width: '42px', height: '42px', objectFit: 'cover', borderRadius: '50%', border: '1px solid #E2E8F0', marginRight: '14px', flexShrink: 0 }}
          />
          <div className="text-truncate">
            <h6 className="fw-bold text-dark text-uppercase mb-0 text-truncate" style={{ fontSize: '0.9rem', letterSpacing: '0.3px' }}>
              {student.name}
            </h6>
            <small className="text-muted fw-semibold">ID: {student.rollNumber}</small>
          </div>
        </div>
      </td>

      {/* COLUMN 2: CLASS ASSIGNMENT (Matches 12% header weight) */}
      <td className="p-3 border-bottom text-secondary fw-semibold small" style={{ width: '12%' }}>
         <span className="badge bg-light text-secondary border px-2 py-1" style={{ borderRadius: '6px', fontWeight: '600' }}>
           Class {student.class}
         </span>
      </td>

      {/* COLUMN 3: GRADE LEVEL BADGE (Matches 12% header weight) */}
      <td className="p-3 border-bottom" style={{ width: '12%' }}>
        <span className="badge text-white font-monospace px-2 py-1.5" style={{ backgroundColor: '#4CAF50', fontSize: '0.7rem', borderRadius: '6px' }}>
          GRADE {student.grade}
        </span>
      </td>

      {/* COLUMN 4: AGE VALUE (Matches 10% header weight) */}
      <td className="p-3 border-bottom text-dark fw-semibold small" style={{ width: '10%' }}>
        {student.age ? `${student.age} Yrs` : '—'}
      </td>

      {/* COLUMN 5: STRIP CONTACT BLOCKS (Matches 21% header weight) */}
      <td className="p-3 border-bottom" style={{ width: '21%' }}>
        <div className="d-flex flex-column gap-1" style={{ fontSize: '0.82rem', color: '#475569' }}>
          <div className="text-truncate">
            <span className="text-muted me-1.5">📞</span>{student.phone || <em className="text-muted opacity-50">None</em>}
          </div>
          <div className="text-truncate text-lowercase text-secondary">
            <span className="text-muted me-1.5">✉️</span>{student.email || <em className="text-muted opacity-50">None</em>}
          </div>
        </div>
      </td>

      {/* COLUMN 6: CONTROL ACTIONS BUTTONS (Matches 15% header weight) */}
      <td className="p-3 border-bottom text-end" style={{ width: '15%' }}>
        <div className="d-inline-flex gap-1.5">
          <button 
            className="btn btn-sm btn-outline-secondary fw-semibold d-flex align-items-center gap-1" 
            style={{ borderRadius: '6px', fontSize: '0.75rem', padding: '6px 12px', backgroundColor: '#FFF' }} 
            onClick={() => { setFields({ ...student }); setEditMode(true); }}
          >
            ⚙️ Edit
          </button>
          <button 
            className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" 
            style={{ borderRadius: '6px', padding: '6px 10px', backgroundColor: '#FFF' }} 
            onClick={() => { if(window.confirm(`Delete ${student.name}?`)) dispatch(deleteStudent(student.id)) }}
          >
            🗑️
          </button>
        </div>
      </td>

    </tr>
  );
}