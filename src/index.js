import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import About from "./components/About"
import Navbar from "./components/Navbar"
import Hero from './components/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>
);