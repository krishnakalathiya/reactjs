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
    <div>
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

      <div className="row justify-content-center">
        {parsedStudents.map(student => (
          <div key={student.id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <StudentDetails student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}