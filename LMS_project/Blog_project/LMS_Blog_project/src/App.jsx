import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import Home from './pages/home';
// import BlogListing from './pages/bloglisting';
// import BlogDetails from './pages/blogdetails';
// import AddBlog from './pages/addblog';


const initialBlogs = [
  {
    id: 1,
    title: "Understanding React Component Architecture",
    category: "Technical Documentation",
    description: "Learn how breaking down your interfaces into modern component hierarchies improves development.",
    content: "Components are the core block units of any React application. By designing standalone, isolated UI widgets, developers gain high levels of codebase maintainability and readability."
  },
  {
    id: 2,
    title: "My Journey into Single Page Applications",
    category: "Personal Blogging",
    description: "A reflective insight diary item explaining my personal growth path with modern frontend tools.",
    content: "Transitioning away from classic old multi-page application servers towards modern declarative single-page applications felt amazing! Smooth navigation routers provide instant, lag-free view swaps."
  }
];

function App(){
  
return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <div style={{ flex: 1 }}>
          {/* <Routes>
            {/* <Route path="/" element={<Home blogs={blogs} onDelete={handleDeleteBlog} />} />
            <Route path="/blogs" element={<BlogListing blogs={blogs} onDelete={handleDeleteBlog} />} />
            <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
            <Route path="/add" element={<AddBlog onAddBlog={handleAddBlog} />} />
          </Routes> */}
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;