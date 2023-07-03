import React from 'react';
import './App.css';
import wtmw from './assets/wtmw.jpeg';
import NavBar from './assets/components/NavBar';
import About from './assets/components/About';
import Projects from './assets/components/Projects';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900'>
      <NavBar />
      <About />
      <Projects />
    </main>
  );
}

export default App;
