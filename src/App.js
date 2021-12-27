import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
