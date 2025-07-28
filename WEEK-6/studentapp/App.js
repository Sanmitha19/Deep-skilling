// App.js
import React from 'react';

// ✅ Import all 3 components
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <h1>Welcome to the first React session</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}



