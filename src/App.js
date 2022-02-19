import './App.css';
import Landing from './components/Landing/index';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Covid from './components/Projects/Covid';
import CellCollective from './components/Projects/CellCollective';
import AutomateExcel from './components/Projects/AutomateExcel';
import Navbar from './components/Landing/Navbar';
import Portfolio from './components/Landing/Portfolio';

import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Portfolio/covid" element={<Covid />} />

          <Route path="/Portfolio/cc" element={<CellCollective />} />
          <Route path="/Portfolio/automate-excel" element={<AutomateExcel />} />
        </Routes>
      </AnimatePresence>

      {/* <Landing /> */}
      {/* <Portfolio /> */}





    </div>
  )




}

export default App;
