import React from 'react';
import './Header.css'; // Importing CSS file

const Header = () => {
  return (
    <header>
      <span className="brand">Kusuma</span> {/* Added "Kusuma" to the left side */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
