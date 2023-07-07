import React from 'react';
import './App.css';
import wtmw from './assets/wtmw.jpeg';
import NavBar from './assets/components/NavBar';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900'>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
