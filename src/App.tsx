import React from 'react';
import Home from './components/Home/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
       
      </div>
    </Router>
  );
}
export default App;
