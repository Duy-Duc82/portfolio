import ProgressBar from '@ramonak/react-progress-bar';

const Skills = () => {
    const frontendSkills = [
        { name: 'React / Vite / TypeScript', value: 90 },
        { name: 'Ant Design / Ant Design Pro', value: 80 },
        { name: 'Tailwind CSS', value: 75 },
    ];

    const backendSkills = [
        { name: 'Java 21 / Spring Boot', value: 85 },
        { name: 'Spring Security + JWT', value: 82 },
        { name: 'NestJS', value: 80 },
        { name: 'MongoDB / PostgreSQL', value: 78 },
    ];

    const dataSkills = [
        { name: 'Kafka / Spark Streaming / PySpark', value: 75 },
        { name: 'Elasticsearch / Kibana', value: 70 },
        { name: 'Superset / Streamlit', value: 68 },
        { name: 'Docker Compose', value: 70 },
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

                    {/* Data / Big Data Skills */}
                    <div className="inner_wrap" style={{ marginTop: '50px' }}>
                        <div className="leftbox">
                            <div className="arlo_tm_mini_title_holder">
                                <h4>Data / Big Data Skills</h4>
                            </div>
                            <p>These are my data engineering skills.</p>
                        </div>
                        <div className="rightbox">
                            <div className="progress_bar_wrap_total">
                                {dataSkills.map((skill, index) => (
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
