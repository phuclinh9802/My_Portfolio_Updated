import React, { Component } from 'react';
// import Avatar from '../../../../public/img/avatar.jpeg';

export default function Biography() {    
    // no need to import, img src will automatically know the src is in public dir
    const avatar = "/img/avatar.jpeg";
    return (
        <div id="Biography">
            <div id="img">
                <img src={avatar} alt="My Image"/> 
            </div>
        </div>
    );
}