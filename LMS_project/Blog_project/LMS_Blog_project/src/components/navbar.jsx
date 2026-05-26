import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">📚 DocuBlog</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">All Blogs</Link>
        <Link to="/add">Add Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;