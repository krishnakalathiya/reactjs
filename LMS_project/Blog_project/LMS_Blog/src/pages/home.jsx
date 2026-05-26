import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

export default function Home({ blogs, onDeleteBlog }) {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div>
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: 'white', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Documentation Blog Project</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          A centralized platform designed to build, organize, and manage robust technical notes and blogs seamlessly.
        </p>
        <Link to="/blogs" className="btn">Explore Articles</Link>
      </section>

      <section>
        <h2>Featured Articles</h2>
        {featuredBlogs.length === 0 ? (
          <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>No features listed. Create documentation entries to get started.</p>
        ) : (
          <div className="blog-grid">
            {featuredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} onDelete={onDeleteBlog} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}