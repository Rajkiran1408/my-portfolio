import { useState,useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from "./components/Projects"
import Contact from './components/Contact';

function App() {
  const projectRef=useRef(null);

  const scrollToProjects=()=>{
    projectRef.current?.scrollIntoView({behavior:"smooth"})
  }

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="overflow-x-hidden text-neutral-300 anitialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[var(--color-bg)]">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
        // className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        //  className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#64e_190%)]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
        <About />
        <Technologies />
        <div ref={projectRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App
