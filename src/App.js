import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Name from './Home';
import City from './City';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/city" element={<City />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
