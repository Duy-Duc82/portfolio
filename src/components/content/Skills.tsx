import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
    const frontendSkills = [
        { name: 'HTML', value: 75 },
        { name: 'CSS', value: 85 },
        { name: 'JavaScript', value: 80 },
        { name: 'React', value: 90 },
    ];

    const backendSkills = [
        { name: 'Node.js', value: 80 },
        { name: 'Express.js', value: 75 },
        { name: 'MongoDB', value: 70 },
        { name: 'SQL', value: 85 },
    ];

    return (
        <div className="arlo_tm_section" id="skills">
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    {/* Frontend Skills */}
                    <div className="inner_wrap">
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Frontend Skills</h4>
                            </div>
                            <p>These are my frontend development skills.</p>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                {frontendSkills.map((skill, index) => (
                                    <div className="progress_item" key={index}>
                                        <span>{skill.name}</span>
                                        <ProgressBar
                                            completed={skill.value}
                                            bgColor="#000"
                                            height="10px"
                                            animateOnRender
                                            isLabelVisible={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="inner_wrap" style={{ marginTop: '50px' }}>
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Backend Skills</h4>
                            </div>
                            <p>These are my backend development skills.</p>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                {backendSkills.map((skill, index) => (
                                    <div className="progress_item" key={index}>
                                        <span>{skill.name}</span>
                                        <ProgressBar
                                            completed={skill.value}
                                            bgColor="#000"
                                            height="10px"
                                            animateOnRender
                                            isLabelVisible={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
