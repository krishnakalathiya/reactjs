import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none' }}>
          DocBlog
        </Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/add-blog">Add Blog</NavLink>
      </div>
    </nav>
  );
}