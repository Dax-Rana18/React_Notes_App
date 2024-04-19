import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import Notess from './cards_notes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Notess/>
    </div>
  );
}

export default App;
