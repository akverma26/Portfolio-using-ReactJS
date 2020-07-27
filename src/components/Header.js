import React from "react";
import "./../assets/css/header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <span>
                        <b>Ankit</b> Kumar Verma
                    </span>
                </div>
                <div className="navigation-wrapper">
                    <a href="#projects" className="link">
                        Projects
                    </a>
                    <a href="#skills" className="link">
                        Skills
                    </a>
                    <a href="#contact" className="link">
                        Contact
                    </a>
                    <a href="uploads/resume.pdf" className="link">
                        CV/Resume
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
