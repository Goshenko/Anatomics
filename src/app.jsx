import React from 'react';
import MainMenu from './components/MainMenu';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <>
      <MainMenu 
      />
    </>
  );
}

export default App;