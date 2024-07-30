import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Technologies/>
      <Contact />
    </div>
  );
};

export default App;
