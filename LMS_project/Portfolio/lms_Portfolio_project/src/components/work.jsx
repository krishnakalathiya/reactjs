import React from 'react';

const Work = () => {
  const projects = [
    { id: 1, title: 'E-commerce App', tech: 'React & Redux' },
    { id: 2, title: 'AI Dashboard', tech: 'Python & React' },
    { id: 3, title: 'Social Media', tech: 'Firebase' }
  ];

  return (
    <section style={{ padding: '50px 20px' }}>
      <h3>Our Work</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {projects.map(project => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h4>{project.title}</h4>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;