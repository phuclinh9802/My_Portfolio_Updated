import React, { Component } from 'react';

import data from '../../../data/data';

import Software from '../../../data/software';

import './index.css';

export default function CellCollective() {
    return (
        <div className="cc">
            <div className="cc-wrapper">
                <div className="title-cc" id="title-cc">
                    <h3>
                        <a href={data[1].link}>
                            Cell Collective
                        </a>
                    </h3>
                </div>
                <div className="title-cc" id="desc-cc">
                    <p>
                        Cell Collective is a computational modeling and simulation platform that is used to drive forward biomedical research as well as student learning of biological and biochemical concepts via hands-on modeling and simulations.
                    </p>
                </div>

                <div className="software">
                    <h3>A. Programming languages, framework, and software used in the project:</h3>
                    <ul className="sw-cc">
                        {
                            Software.map((s) => {
                                if (s.id >= 9) {
                                    return (<li key={s.id}>
                                        <img className="programming" src={s.img} />
                                    </li>)
                                }


                            }
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
}