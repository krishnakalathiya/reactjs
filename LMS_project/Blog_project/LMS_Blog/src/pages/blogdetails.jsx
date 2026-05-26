import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

export default function BlogDetails({ blogs, onUpdateBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Post Not Found</h2>
        <button onClick={() => navigate('/blogs')} className="btn" style={{ marginTop: '1rem' }}>Return to Directory</button>
      </div>
    );
  }

  const handleUpdateSubmit = (updatedFields) => {
    onUpdateBlog(id, updatedFields);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <h2>Modify Entry Content</h2>
          <button onClick={() => setIsEditing(false)} className="btn btn-danger">Cancel Editing</button>
        </div>
        <BlogForm onSubmit={handleUpdateSubmit} initialData={blog} />
      </div>
    );
  }

  return (
    <article style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <span className="category-tag">{blog.category}</span>
      <h1 style={{ fontSize: '2.25rem', margin: '0.5rem 0 1rem' }}>{blog.title}</h1>
      <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        Summary: {blog.description}
      </p>
      <div style={{ whiteSpace: 'pre-wrap', minHeight: '200px', lineHeight: '1.8' }}>
        {blog.content}
      </div>
      <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
        <button onClick={() => setIsEditing(true)} className="btn" style={{ marginRight: '1rem' }}>
          Edit Article
        </button>
        <button onClick={() => navigate('/blogs')} className="btn" style={{ background: 'var(--text-light)' }}>
          Back to List
        </button>
      </div>
    </article>
  );
}