import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { projects } from './data/projects';
import './style.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <Hero />
      <Carousel projects={projects} onSelectProject={setSelectedProject} />
      <Projects projects={projects} selectedProject={selectedProject} onSelectProject={setSelectedProject} />
      <Contact />
    </div>
  );
}

export default App;
