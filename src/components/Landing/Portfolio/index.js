import React, { Component } from 'react';
import data from '../../../data/data';

import './index.css';

export default function Portfolio() {
    return (
        <div id="Portfolio">
            <div class="wrapper">
                <div class="inside-wrap" id="title-port">
                    <h3>PORTFOLIO</h3>
                    <p>These are the work I have contributed</p>
                </div>
                <div class="inside-wrap" id="grid-group">
                    {data.map((d) => 
                        <div class="item">
                           <a href={d.link} class="project_link">
                            <img src={d.img} alt={d.title}/>
                           </a>
                           
                            <div class="item-desc">
                                <h4>{d.title}</h4>
                                <p>{d.description}</p>
                            </div>
                            
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}