import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Biography from './components/Landing/Biography';
import Services from './components/Landing/Services';
import Portfolio from './components/Landing/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
      <Route path="/" element={<Biography />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
