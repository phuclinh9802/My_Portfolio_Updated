import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Redirect, Routes, Router, Route } from 'react-router-dom';
import data from '../../../data/data';
import CellCollective from '../../Projects/CellCollective';
import AutomateExcel from '../../Projects/AutomateExcel';
import Covid from '../../Projects/Covid';

import './index.css';

export default function Portfolio() {
    return (
        // <Router>
        <div id="Portfolio">
            <div class="wrapper">
                <div class="inside-wrap" id="title-port">
                    <h3>PORTFOLIO</h3>
                    <p>These are the work I have contributed</p>
                </div>
                <div class="inside-wrap" id="grid-group">
                    {data.map((d) =>
                        <div class="item">
                            <Link to={`/Portfolio/${d.router}`}>
                                <a href="" class="project_link">
                                    <img src={d.img} alt={d.title} />
                                </a>
                            </Link>

                            <div class="item-desc">
                                <h4>{d.title}</h4>
                                <p>{d.description}</p>
                                <a href={d.link} class="a_hidden">Learn more</a>
                            </div>

                        </div>
                    )
                    }
                </div>
            </div>
            {/* <Routes>
                <Route exact path="covid-project" element={<Covid />} />
                <Route exact path="cc-project" element={<CellCollective />} />
                <Route path="automate-project" element={<AutomateExcel />} />
            </Routes> */}
        </div>
        // </Router>

    );
}