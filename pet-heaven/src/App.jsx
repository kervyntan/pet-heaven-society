import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/shared/Navbar';
import Adoption from './components/Adoption';
import Release from './components/Release';
import Register from './components/Register';
import Login from './components/Login';
import './assets/main.css';

function App() {
  

  return (
    <Router>
      <Navbar />
      <div className="container">
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Adoption />} path="/adoption" />
      <Route element={<Release />} path="/release" />
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
    </Routes>
    </div>
    </Router>
  )
}

export default App
