import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/repository/:id" element={<RepositoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;