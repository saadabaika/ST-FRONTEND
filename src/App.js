// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LotSearch from './components/LotSearch';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Lot Lookup</h1>
          <Navbar />
          <div className="button-container">
            <button className="nav-button">
              <Link to="/lotsearch">EDA</Link>
            </button>
            <button className="nav-button">
              <Link to="/lotsearch">BIDF</Link>
            </button>
            <button className="nav-button">
              <Link to="/">###</Link>
            </button>
          </div>
          <Routes>
            <Route path="/lotsearch" element={<LotSearch />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
