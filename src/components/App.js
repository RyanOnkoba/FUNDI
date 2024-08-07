import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
