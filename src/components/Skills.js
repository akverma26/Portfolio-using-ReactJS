import React from "react";

class Skills extends React.Component {
    render() {
        return this.props.skillsSet.map((skill) => {
            return (
                <div className="skill-wrapper">
                    <div className="skill-icon">
                        <img src={skill.icon} alt={skill.skill}></img>
                    </div>
                    <div className="skill-name">{skill.skill}</div>
                </div>
            );
        });
    }
}

export default Skills;
