import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css"; // Import your CSS file

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following:</p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email: kusumapoosarapu@gmail.com.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>Phone: +1 123-456-7890</span>
          </div>
        </div>
        <div className="social-links">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a
                href="https://github.com/KUSUMAJOGARAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/poosarapu-kusuma-429280215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
