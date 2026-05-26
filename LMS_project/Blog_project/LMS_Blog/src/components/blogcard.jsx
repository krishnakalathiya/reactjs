import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog, onDelete }) {
  return (
    <div className="blog-card">
      <div>
        <span className="category-tag">{blog.category}</span>
        <h3 style={{ margin: '0.5rem 0' }}>{blog.title}</h3>
        <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>{blog.description}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <Link to={`/blogs/${blog.id}`} className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Read More
        </Link>
        <button onClick={() => onDelete(blog.id)} className="btn btn-danger" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Delete
        </button>
      </div>
    </div>
  );
}