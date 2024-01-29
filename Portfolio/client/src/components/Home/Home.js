import React from 'react';
import './Home.css'; // Importing the CSS file

const Home = () => {
  const greeting = "Hi, I'm Kusuma Poosarapu";

  return (
    <div className="home-container">
      <h1 className="greeting">{greeting}</h1>
      <p className="frontend">Frontend Developer and Designer</p>
    </div>
  );
}

export default Home;
