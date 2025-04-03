import { Button, Modal } from 'antd';
import { useState } from 'react';

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataProject = [
        {
            icon: 'img/svg/camera-diaphragm.svg',
            title: 'To do website',
            shortDescription:
                'A simple to do website using React and Ant Design',
            detail: {
                Description: 'To do website using React and Ant Design',
                Technology: 'React, Ant Design, CSS',
                Member: '1',
                Role: 'Frontend Developer',
                Github: '',
            },
        },
        {
            icon: 'img/svg/new-tab.svg',
            title: 'Web Design',
            shortDescription: 'A modern web design project',
            detail: {
                Description: 'Web design project with responsive layout',
                Technology: 'HTML, CSS, JavaScript',
                Member: '2',
                Role: 'UI/UX Designer',
                Github: '',
            },
        },
        {
            icon: 'img/svg/layers.svg',
            title: 'Branding',
            shortDescription: 'A branding project for a startup',
            detail: {
                Description: 'Branding project with logo design and guidelines',
                Technology: 'Adobe Illustrator, Photoshop',
                Member: '3',
                Role: 'Graphic Designer',
                Github: '',
            },
        },
    ];

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>My Project</h3>
                            <span>Completed projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProject.map((project, index) => (
                                    <li key={index}>
                                        <div className="inner">
                                            <div className="icon">
                                                <img
                                                    className="svg"
                                                    src={project.icon}
                                                    alt={project.title}
                                                />
                                            </div>
                                            <div className="title_service">
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    {project.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
