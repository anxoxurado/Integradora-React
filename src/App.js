import React from 'react';
import './App.css';
import Preloader from './components/Preloader';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Preloader />
      <MainContent />
    </div>
  );
}

export default App;
