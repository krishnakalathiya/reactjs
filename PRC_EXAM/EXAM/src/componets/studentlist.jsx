import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../redux/store';
import StudentDetails from './studentdeatils'; 

export default function StudentList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.students);
  
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sortCriterion, setSortCriterion] = useState('name');

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border text-primary"></div></div>;
  if (error) return <div className="alert alert-danger m-4">{error}</div>;

  const classes = [...new Set(list.map(s => s.class))].filter(Boolean);

  const parsedStudents = list
    .filter(s => {
      const matchText = s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNumber.includes(search);
      const matchClass = classFilter === '' || s.class === classFilter;
      return matchText && matchClass;
    })
    .sort((a, b) => {
      if (sortCriterion === 'name') return a.name.localeCompare(b.name);
      if (sortCriterion === 'rollNumber') return parseInt(a.rollNumber) - parseInt(b.rollNumber);
      return 0;
    });

  return (
    <div className="container-fluid px-4 py-2">
      {/* Search and Filters Strip */}
      <div className="card p-3 mb-4 border-0 shadow-sm bg-white" style={{ borderRadius: '12px' }}>
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="🔍 Search name or roll number..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="col-md-4">
            <select className="form-select" value={classFilter} onChange={e => setClassFilter(e.target.value)}>
              <option value="">All Classes</option>
              {classes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select" value={sortCriterion} onChange={e => setSortCriterion(e.target.value)}>
              <option value="name">Sort: Alphabetical Name</option>
              <option value="rollNumber">Sort: Roll Number</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- CLEAN ALIGNED TABLE CONTAINER --- */}
      <div className="table-responsive shadow-sm border border-light-subtle rounded-3" style={{ backgroundColor: '#FFFFFF' }}>
        <table className="table align-middle mb-0" style={{ tableLayout: 'fixed', width: '100%' }}>
          <thead className="table-light" style={{ fontSize: '0.8rem' }}>
            <tr>
              <th className="p-3 text-secondary fw-bold text-uppercase" style={{ width: '30%', letterSpacing: '0.5px' }}>Student Info</th>
              <th className="p-3 text-secondary fw-bold text-uppercase" style={{ width: '12%', letterSpacing: '0.5px' }}>Class</th>
              <th className="p-3 text-secondary fw-bold text-uppercase" style={{ width: '12%', letterSpacing: '0.5px' }}>Grade</th>
              <th className="p-3 text-secondary fw-bold text-uppercase" style={{ width: '10%', letterSpacing: '0.5px' }}>Age</th>
              <th className="p-3 text-secondary fw-bold text-uppercase" style={{ width: '21%', letterSpacing: '0.5px' }}>Contact</th>
              <th className="p-3 text-secondary fw-bold text-uppercase text-end" style={{ width: '15%', letterSpacing: '0.5px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parsedStudents.length > 0 ? (
              parsedStudents.map(student => (
                <StudentDetails key={student.id} student={student} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-5 text-muted fw-medium">
                  No matching student records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}