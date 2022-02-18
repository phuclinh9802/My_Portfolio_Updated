import './App.css';
import Landing from './components/Landing/index';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Covid from './components/Projects/Covid';
import CellCollective from './components/Projects/CellCollective';
import AutomateExcel from './components/Projects/AutomateExcel';
import Navbar from './components/Landing/Navbar';
import Portfolio from './components/Landing/Portfolio';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Portfolio/covid" element={<Covid />} />

          <Route path="/Portfolio/cc" element={<CellCollective />} />
          <Route path="/Portfolio/automate-excel" element={<AutomateExcel />} />
        </Routes>
        {/* <Landing /> */}
        {/* <Portfolio /> */}


      </Router>



    </div>
  )




}

export default App;
