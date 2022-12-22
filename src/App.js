import React from 'react';
// import { Route, Routes } from 'react-router';
import { selectTheme } from './AppSlice.js'
import { useSelector } from 'react-redux'

import './App.css';

import Header from './features/Header/Header'
import Home from './features/Home/Home';
import About from './features/About/About.js';
import Portfolio from './features/Portfolio/Portfolio.js';
import Footer from './features/Footer/Footer.js';

function App() {

  const theme = useSelector(selectTheme)

  const appStyle = { 
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  }

  return (
    <div className="App" style={appStyle}>
      <Header/>
      <Home />
      <About />
      <Portfolio />
      <Footer />
      {/* <Routes>
        <Route to='/' element={<Home />}>Home</Route>
        <Route to='/about'>About</Route>
        <Route to='/portfolio'>Portfolio</Route>
      </Routes> */}
    </div>
  );
}

export default App;
