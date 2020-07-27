import React from "react";
import "./../assets/css/featured-project.css";

class FeaturedProject extends React.Component {
    render() {
        return (
            <div className="featured-project-wrapper" id="projects">
                <div className="featured-project-header">
                    Featured Project <span>My recent Projects</span>
                </div>
                <div className="featured-project-content-wrapper">
                    <div className="title">Voting System using BlockChain</div>
                    <div className="description">
                        <li>
                            Developed front end UI using HTML, CSS, JavaScript
                            and AJAX is used for creating asynchronous request.
                        </li>
                        <li>
                            Server side scripting is done using Django
                            framework.
                        </li>
                        <li>
                            Blockchain is used to hold the records of the
                            transactions.
                        </li>
                    </div>
                    <div className="links">
                        <a
                            href="https://vote.pythonanywhere.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="button">View Demo</div>
                        </a>
                        <a
                            href="https://github.com/akverma26/Voting-System-using-Block-Chain-Technology"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="button">View Source Code</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProject;
