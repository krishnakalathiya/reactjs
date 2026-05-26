import React, { useState } from 'react';

export default function BlogForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [category, setCategory] = useState(initialData.category || 'Technical');
  const [description, setDescription] = useState(initialData.description || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !content) {
      alert('Please fill out all required fields.');
      return;
    }
    onSubmit({ title, category, description, content });
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
      <div className="form-group">
        <label>Blog Title *</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Understanding React Hooks" />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Technical">Technical</option>
          <option value="Personal">Personal</option>
          <option value="Educational">Educational</option>
        </select>
      </div>
      <div className="form-group">
        <label>Short Description *</label>
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A brief summary for card previews" />
      </div>
      <div className="form-group">
        <label>Full Content *</label>
        <textarea className="form-control" rows="8" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write documentation contents here..."></textarea>
      </div>
      <button type="submit" className="btn">Save Documentation</button>
    </form>
  );
}