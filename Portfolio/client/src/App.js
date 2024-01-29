import React from 'react';
import Header from './components/Header/Header'; // Importing the Header component
import Home from './components/Home/Home'; // Importing the Home component
import About from './components/About Me/About Me'; // Importing the About component
import Projects from './components/Projects/Projects'; // Importing the Projects component
import Skills from './components/Skills/Skills'; // Importing the Skills component
import Contact from './components/Contact/Contact'; // Importing the Contact component

const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home /> {/* Including the Home component */}
      </div>
      <div id="about">
        <About /> {/* Including the About component */}
      </div>
      <div id="skills">
        <Skills /> {/* Including the Skills component */}
      </div>
      <div id="projects">
        <Projects /> {/* Including the Projects component */}
      </div>
      <div id="contact">
        <Contact /> {/* Including the Contact component */}
      </div>
    </div>
  );
}

export default App;
