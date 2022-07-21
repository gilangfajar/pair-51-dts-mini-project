import React from 'react';
import './App.scss';
import Home from './pages/home/Home';
import Login from '../src/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
