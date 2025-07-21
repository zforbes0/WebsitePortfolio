import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Projects />
    </div>
  );
}

export default App;