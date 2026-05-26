import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';

export default function BlogListing({ blogs, onDeleteBlog }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <h2>All Documentation Logs</h2>
        <input 
          type="text" 
          className="form-control" 
          style={{ maxWidth: '300px' }} 
          placeholder="Search by title or tag..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredBlogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <p style={{ color: 'var(--text-light)' }}>No documentation posts matched your search criteria.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} onDelete={onDeleteBlog} />
          ))}
        </div>
      )}
    </div>
  );
}