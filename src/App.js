import './App.css';
import Landing from './components/Landing/index';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './components/Landing/Navbar';
import Portfolio from './components/Portfolio';

import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname.split('/')[1]} location={location}>
          <Route exact path="/" element={<Landing />} />

          <Route path="/Portfolio/*" element={<Portfolio />} /> {/* use /Portfolio/* to navigate to any nested route available  */}
          {/* <Route path="/Portfolio/covid-project" element={<Covid />} />

          <Route path="/Portfolio/cc" element={<CellCollective />} />
          <Route path="/Portfolio/automate-excel" element={<AutomateExcel />} /> */}
        </Routes>
      </AnimatePresence>

      {/* <Landing /> */}
      {/* <Portfolio /> */}





    </div>
  )




}

export default App;
