import React from 'react';
import LotSearch from './components/LotSearch';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lot Lookup</h1>
        <Navbar />
        <LotSearch />
      </header>
    </div>
  );
}

export default App;
