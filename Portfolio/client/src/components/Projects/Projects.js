// Projects.js
import React from "react";
import "./Projects.css"; // Corrected import name

import project1Image from "./Project1.jpeg";
import project2Image from "./Project2.jpeg"; // Corrected import name

const projects = [
  {
    title: "JOB PORTAL",
    description: "Explore endless career options on our student-focused job platform. We offer an easy-to-use website that makes job hunting a breeze for students, linking them to internships, part-time gigs, and full-time jobs that match their skills and dreams. Take control of your future with us.",
    link: "https://github.com/KUSUMAJOGARAO/Job-Portal",
    image: project1Image, // Corrected reference name
  },
  {
    title: "ONLINE FRAUD DETECTION",
    description: "An online fraud detection system utilizing machine learning libraries provides real-time transaction monitoring, displaying old and new balances while utilizing trained and tested data for fraud prevention.",
    link: "https://github.com/KUSUMAJOGARAO/Online-Fraud-Detection",
    image: project2Image, // Corrected reference name
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-box-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
