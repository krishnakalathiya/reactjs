import React, { useState } from 'react';

const Slider = () => {
  // Array of slide objects containing image URLs and titles
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      title: "Modern Workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "Data Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      title: "Collaborative Team"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section style={sliderStyles.container}>
      {/* Background Image Layer */}
      <div style={{
        ...sliderStyles.imageWrapper,
        backgroundImage: `url(${slides[currentIndex].url})`
      }}>
        {/* Overlay for text readability */}
        <div style={sliderStyles.overlay}>
          <h2 style={sliderStyles.title}>{slides[currentIndex].title}</h2>
          
          <div style={sliderStyles.buttonGroup}>
            <button onClick={prevSlide} style={sliderStyles.btn}>Prev</button>
            <button onClick={nextSlide} style={sliderStyles.btn}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple inline styles for demonstration
const sliderStyles = {
  container: {
    height: '500px',
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px'
  },
  btn: {
    padding: '10px 25px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    background: '#fff',
    fontWeight: 'bold',
    color: 'black'
  },
};

export default Slider;