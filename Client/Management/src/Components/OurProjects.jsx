import React, { useEffect, useState } from 'react';
import './OurProjects.css';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://management-4.onrender.com/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="our-projects">
      <h2>Our Projects</h2>
      <p>
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <h1 className="no-projects-message" style={{color:"red"}}>No projects found. Add projects from admin.</h1>
      ) : (
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.name} />
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <button className="read-more">READ MORE</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OurProjects;
