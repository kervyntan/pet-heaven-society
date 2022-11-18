import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/shared/Navbar';
import Adoption from './components/Adoption';
import Release from './components/Release';
import Register from './components/Register';
import './assets/main.css';

function App() {
  

  return (
    <Router>
      <div className="container">
    <Navbar />
    <Routes>
      <Route element={<Adoption />} path="/adoption" />
      <Route element={<Release />} path="/release" />
      <Route element={<Register />} path="/register" />
    </Routes>
    </div>
    </Router>
  )
}

export default App
