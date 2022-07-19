import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Whoami from './pages/Whoami';
import Menubar from './pages/Menubar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
      <Route path="/home"element={<Home />}></Route>
      <Route path="/whoami" element={<Whoami />}></Route>
      </Route>
    </Routes>
  );
};

export default App;