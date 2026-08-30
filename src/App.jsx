import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import PageTransition from './components/PageTransition';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [transitioning, setTransitioning]     = useState(false);
  const [pendingProject, setPendingProject]    = useState(null);

  /* Step 1 — start shader curtain in, then swap page */
  const handleSelectProject = (project) => {
    setPendingProject(project);
    setTransitioning(true);
    // halfway through curtain sweep — swap content
    setTimeout(() => {
      setSelectedProject(project);
    }, 450);
    // full animation done — hide curtain
    setTimeout(() => {
      setTransitioning(false);
      setPendingProject(null);
    }, 900);
  };

  /* Step 1 — same curtain sweep back */
  const handleBack = () => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedProject(null);
    }, 450);
    setTimeout(() => {
      setTransitioning(false);
    }, 900);
  };

  return (
    <>
      {/* Shader curtain — always rendered, visible only when transitioning */}
      <PageTransition active={transitioning} />

      {selectedProject ? (
        <ProjectDetailPage project={selectedProject} onBack={handleBack} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={handleSelectProject} />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
