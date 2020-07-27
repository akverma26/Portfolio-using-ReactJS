import React from "react";
import ProfilePic from "./../assets/images/profile_pic.png";
import "./../assets/css/header-intro.css";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            profilePicHeight: "300px",
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({
            profilePicHeight:
                Math.max(Math.min((window.innerWidth * 300) / 1900, 400), 300) +
                "px",
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        return (
            <div className="head-intro-wrapper">
                <div className="profile-img-wrapper">
                    <img
                        src={ProfilePic}
                        alt="akverma26"
                        style={{ height: this.state.profilePicHeight }}
                    ></img>
                </div>
                <div className="short-info">
                    <div className="greeting">Hi there, I'm</div>
                    <div className="name">Ankit Kumar Verma.</div>
                    <div className="work-tag">Full-Stack-Developer.</div>
                    <div className="email">
                        Contact:{" "}
                        <a href="mailto:akverma0026@google.com?Subject=Portfolio Mail Contact Request">
                            akverma0026@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
