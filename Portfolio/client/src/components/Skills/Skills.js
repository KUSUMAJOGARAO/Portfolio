import React from "react";
import "./Skills.css"; // Import your CSS file for styling
import PythonImage from "./Python.png";
import ReactImage from "./React.png";
import HtmlImage from "./Html.png";
import CssImage from "./Css.png";
import MachineLearningImage from "./Machine Learning.png";

function Skills() {
  const skillsWithImages = {
    Python: PythonImage,
    React: ReactImage,
    HTML: HtmlImage,
    CSS: CssImage,
    "Machine Learning": MachineLearningImage,
    // Add more skills and their corresponding image URLs as needed
  };

  const skills = Object.keys(skillsWithImages);

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img
              src={skillsWithImages[skill]}
              alt={skill}
              className="skill-image"
            />
            <span className="skill-name">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
