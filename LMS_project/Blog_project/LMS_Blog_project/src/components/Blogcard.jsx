import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog, onDelete }) {
  return (
    <div className="blog-card">
      <span className="category-badge">{blog.category}</span>
      <h3 style={{ marginTop: '0.5rem' }}>{blog.title}</h3>
      <p>{blog.description}</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <Link to={`/blog/${blog.id}`} className="btn">Read More</Link>
        <button onClick={() => onDelete(blog.id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default BlogCard;