import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/store';

export default function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow mb-4" style={{ backgroundColor: '#0A4B8F' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="me-2">🎓</span> STUDENT
        </Link>
        <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
          {isAuthenticated ? (
            <>
              <Link className="nav-link px-3 text-white" to="/">Dashboard</Link>
              <Link className="nav-link px-3 text-white" to="/add">Add Student</Link>
              <button 
                className="btn btn-sm btn-outline-light ms-2" 
                onClick={() => { dispatch(logoutUser()); navigate('/login'); }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link className="btn btn-sm btn-light" to="/login">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}