import React from "react";
import SocialLinks from "./SocialLinks";

import "./../assets/css/footer.css";

import linkedinIcon from "./../assets/icons/linkedin.svg";
import githubIcon from "./../assets/icons/github.svg";
import instagramIcon from "./../assets/icons/instagram.svg";
import twitterIcon from "./../assets/icons/twitter.svg";

const socialLinks = [
    {
        platform: "Linkedin",
        icon: linkedinIcon,
        link: "https://www.linkedin.com/in/akverma26/",
    },
    {
        platform: "GitHub",
        icon: githubIcon,
        link: "https://github.com/akverma26",
    },
    {
        platform: "Instagram",
        icon: instagramIcon,
        link: "https://www.instagram.com/kumar_ankit26/",
    },
    {
        platform: "Twitter",
        icon: twitterIcon,
        link: "https://twitter.com/ankit_kumar26",
    },
];

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="social-media-wrapper">
                    <SocialLinks socialLinks={socialLinks} />
                </div>
                <div className="right-side">Ankit Kumar Verma</div>
            </div>
        );
    }
}

export default Footer;
