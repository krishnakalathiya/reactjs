import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

function Home({ blogs, onDelete }) {
  // Take only the 2 most recent blogs to display as featured
  const featuredBlogs = blogs.slice(-2);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', margin: '3rem 0' }}>
        <h1>Welcome to the Documentation Blog</h1>
        <p style={{ color: '#666', fontSize: '1.2rem', margin: '1rem 0' }}>
          Your central repository for Technical Documentation, Educational Notes, and Knowledge Bases.
        </p>
        <Link to="/blogs" className="btn" style={{ fontSize: '1.1rem' }}>Explore Articles</Link>
      </div>

      <hr />

      <h2 style={{ margin: '2rem 0 1rem 0' }}>✨ Featured Blogs</h2>
      {featuredBlogs.length === 0 ? (
        <p>No featured blogs available yet. Start by creating one!</p>
      ) : (
        <div className="blog-grid">
          {featuredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;