import React from "react";

import Skills from "./Skills";

import "./../assets/css/skills-set.css";

// import githubIcon from "./../assets/icons/github.svg";
import cIcon from "./../assets/icons/c.svg";
import cppIcon from "./../assets/icons/cpp.svg";
import pythonIcon from "./../assets/icons/python.svg";
import javascriptIcon from "./../assets/icons/javascript.svg";
import htmlIcon from "./../assets/icons/html.svg";
import cssIcon from "./../assets/icons/css.svg";
import mysqlIcon from "./../assets/icons/mysql.svg";
import blockchainIcon from "./../assets/icons/blockchain.png";
import electronjsIcon from "./../assets/icons/electronjs.png";
import reactjsIcon from "./../assets/icons/reactjs.png";
import openglIcon from "./../assets/icons/opengl.svg";
import pyqt5Icon from "./../assets/icons/pyqt5.png";

const skillsSet = [
    {
        skill: "C",
        icon: cIcon,
    },
    {
        skill: "C++",
        icon: cppIcon,
    },
    {
        skill: "Python",
        icon: pythonIcon,
    },
    {
        skill: "JavaScript",
        icon: javascriptIcon,
    },
    {
        skill: "HTML",
        icon: htmlIcon,
    },
    {
        skill: "CSS",
        icon: cssIcon,
    },
    {
        skill: "MySQL",
        icon: mysqlIcon,
    },
    {
        skill: "Block-Chain",
        icon: blockchainIcon,
    },
    {
        skill: "ElectronJS",
        icon: electronjsIcon,
    },
    {
        skill: "ReactJS",
        icon: reactjsIcon,
    },
    {
        skill: "OpenGL",
        icon: openglIcon,
    },
    {
        skill: "PyQt5",
        icon: pyqt5Icon,
    },
];

class SkillsSet extends React.Component {
    render() {
        return (
            <div className="skills-set-wrapper" id="skills">
                <div className="skills-set-header">
                    Tools & Techniques <span>I am familiar with</span>
                </div>
                <div className="skills-set-content-wrapper">
                    <Skills skillsSet={skillsSet} />
                </div>
            </div>
        );
    }
}

export default SkillsSet;
