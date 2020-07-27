import React from "react";

class SocialLinks extends React.Component {
    render() {
        return this.props.socialLinks.map((socialLink) => {
            return (
                <a className="link" href={socialLink.link}>
                    <img src={socialLink.icon} alt={socialLink.platform} />
                </a>
            );
        });
    }
}

export default SocialLinks;
