import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';

export default function AddBlog({ onAddBlog }) {
  const navigate = useNavigate();

  const handleFormSubmit = (newBlogData) => {
    onAddBlog(newBlogData);
    navigate('/blogs');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Create New Documentation Entry</h2>
      <BlogForm onSubmit={handleFormSubmit} />
    </div>
  );
}