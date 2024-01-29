import React from "react";
import "./About Me.css"; // Import the CSS file
import about from './Kusuma.jpeg'; // Correcting the image import

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-photo">
        <img src={about} alt="about" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            <span className="highlight">My name is Kusuma</span> and I'm currently pursuing my B.Tech in the 4th year with a specialization in Artificial Intelligence & Data Science.
          </p>
          <p>
            I have a deep interest in environmental sustainability and conservation efforts. I'm passionate about finding innovative solutions to address environmental challenges and contribute to building a more sustainable future.
          </p>
          <p>
            Academically, I am also involved in research projects related to environmental science and sustainability. I'm committed to leveraging my skills and knowledge in both technology and environmental science to make a positive impact on the world.
          </p>
          <div className="additional-details">
            <p>
              <span className="highlight">Leisure Time:</span> Playing with friends.
            </p>
            <p>
              <span className="highlight">Hobbies:</span> I love Cooking, Hairstyling, Coding.
            </p>
            <p>
              <span className="highlight">Favorite Programming Languages:</span> Python, React, Machine learning.
            </p>
            <p>
              <span className="highlight">Achievements:</span> I have participated in hackathons and won Certificate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
