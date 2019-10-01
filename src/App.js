import React from 'react';
import images from './cat.webp';
import Nav from './components/Navbar';
import Side from './components/Sidebar';
import './App.css'

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <img src={images} alt=''></img>
      <Side />
    </div>
  );
    
  
}

export default App;
