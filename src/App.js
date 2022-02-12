import './App.css';
import Landing from './components/Landing/index';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Covid from './components/Projects/Covid';
import CellCollective from './components/Projects/CellCollective';
import AutomateExcel from './components/Projects/AutomateExcel';


function App() {
  return (
    <div className="App">
      <Landing />
      <Routes>
        <Route path="covid-project" element={Covid} exact />
        <Route path="cc-project" element={<CellCollective />} />
        <Route path="automate-project" element={<AutomateExcel />} />

      </Routes>


    </div>
  )




}

export default App;
