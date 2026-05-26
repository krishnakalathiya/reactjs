import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import BlogListing from './pages/bloglisting';
import BlogDetails from './pages/blogdetails';
import AddBlog from './pages/addblog';

// Seed mock data for development
const initialSeedData = [
  {
    id: 'seed-1',
    title: 'Getting Started with React Component Architectures',
    category: 'Technical',
    description: 'An overview of modular design patterns in modern UI composition paradigms.',
    content: 'Component-driven architectures isolate presentation structures neatly...\n\nBy leveraging localized elements, modern teams scale production quickly without incurring major UI coupling dependencies.'
  },
  {
    id: 'seed-2',
    title: 'Mastering Single Page App Routing Structures',
    category: 'Educational',
    description: 'Learn how to utilize structural router hooks efficiently.',
    content: 'Client-side routing eliminates explicit server lifecycle request roundtrips entirely...\n\nUsing conditional views ensures sub-components resolve smoothly for better performance.'
  }
];

export default function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedData = localStorage.getItem('doc_blog_posts');
    return savedData ? JSON.parse(savedData) : initialSeedData;
  });

  useEffect(() => {
    localStorage.setItem('doc_blog_posts', JSON.stringify(blogs));
  }, [blogs]);

  // Create Operation
  const handleAddBlog = (newBlog) => {
    const freshPost = {
      ...newBlog,
      id: `blog-${Date.now()}`
    };
    setBlogs(prev => [freshPost, ...prev]);
  };

  // Update Operation
  const handleUpdateBlog = (id, updatedFields) => {
    setBlogs(prev => prev.map(blog => blog.id === id ? { ...blog, ...updatedFields } : blog));
  };

  // Delete Operation
  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you certain you want to discard this item?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home blogs={blogs} onDeleteBlog={handleDeleteBlog} />} />
            <Route path="/blogs" element={<BlogListing blogs={blogs} onDeleteBlog={handleDeleteBlog} />} />
            <Route path="/blogs/:id" element={<BlogDetails blogs={blogs} onUpdateBlog={handleUpdateBlog} />} />
            <Route path="/add-blog" element={<AddBlog onAddBlog={handleAddBlog} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}