import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import "./index.css";

export default function Biography() {
    // no need to import, img src will automatically know the src is in public dir
    const avatar = "/img/avatar.jpeg";
    const social = [
        { name: 'Facebook', url: "https://www.facebook.com/phillip.nguyen.2901/" },
        { name: 'Instagram', url: "https://www.instagram.com/philnguyen2901/" },
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/philswe/" },
        { name: 'GitHub', url: "https://www.github.com/phuclinh9802" }
    ]
    return (
        <div id="Biography">
            <div></div>
            <div className="content" id="img">
                <img src={avatar} alt="My Image" />
            </div>
            <div className="content">
                <div className="bio">
                    <div id="content-header">
                        <h1 id="header">
                            I am Phillip, a developer and graduate student from Vietnam
                        </h1>
                        <div id="description">
                            From a mathematics/computing background, I always have passion with problem solving and collabrating
                            with people, especially when it comes to web and software development. My goal is to improve every
                            single day, to trust the process, and to land my dream job as a software developer.
                        </div>
                    </div>

                    <div id="social">
                        <ul>
                            {social.map((s) =>
                                <li key={s.name}>
                                    <SocialIcon style={{ width: "40px", height: "40px" }} url={s.url} />
                                </li>
                                // <li>
                                //     <SocialIcon style={{width: "40px", height: "40px",}} url={social[1].url}/>
                                // </li>
                                // <li>
                                //     <SocialIcon style={{width: "40px", height: "40px",}} url={social[2].url}/>
                                // </li>
                            )
                            }
                        </ul>


                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}