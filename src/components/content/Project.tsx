import { Modal } from 'antd';
import { JSX, useState } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaArrowRight } from 'react-icons/fa';

interface IProjectDetail {
    Description: string;
    Technology: string;
    Member: string;
    Role: string;
    Demo?: string;
    Github?: string;
}

interface IProject {
    icon: JSX.Element;
    title: string;
    shortDescription: string;
    detail: IProjectDetail;
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject | null>(
        null
    );

    const showModal = (project: IProject) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const dataProject: IProject[] = [
        {
            icon: <FaReact size={64} color="#007bff" />,
            title: 'To do website',
            shortDescription:
                'A simple to do website using React and Ant Design',
            detail: {
                Description: 'To do website using React and Ant Design',
                Technology: 'React, Ant Design, CSS',
                Member: '1',
                Role: 'Frontend Developer',
                Demo: 'https://react.hoidanit.com.vn/',
                Github: 'https://github.com/haryphamdev/react-ts-vite',
            },
        },
        {
            icon: <FaHtml5 size={64} color="#e34c26" />,
            title: 'Web Design',
            shortDescription: 'A modern web design project',
            detail: {
                Description: 'Web design project with responsive layout',
                Technology: 'HTML, CSS, JavaScript',
                Member: '2',
                Role: 'UI/UX Designer',
            },
        },
        {
            icon: <FaCss3Alt size={64} color="#1572b6" />,
            title: 'Branding',
            shortDescription: 'A branding project for a startup',
            detail: {
                Description: 'Branding project with logo design and guidelines',
                Technology: 'Adobe Illustrator, Photoshop',
                Member: '3',
                Role: 'Graphic Designer',
            },
        },
    ];

    return (
        <>
            <Modal
                title={selectedProject?.title || 'Project Details'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                maskClosable={false}
            >
                {selectedProject && (
                    <ul>
                        <li>
                            Description: {selectedProject.detail.Description}
                        </li>
                        <li>Technology: {selectedProject.detail.Technology}</li>
                        <li>
                            Number of member: {selectedProject.detail.Member}
                        </li>
                        <li>Role: {selectedProject.detail.Role}</li>
                        {selectedProject.detail.Demo && (
                            <li>
                                Demo:
                                <a
                                    href={selectedProject.detail.Demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {selectedProject.detail.Demo}
                                </a>
                            </li>
                        )}
                        {selectedProject.detail.Github && (
                            <li>
                                Github:
                                <a
                                    href={selectedProject.detail.Github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {selectedProject.detail.Github}
                                </a>
                            </li>
                        )}
                    </ul>
                )}
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
                                                <div className="icon project-icon">
                                                    {project.icon}
                                                </div>
                                            </div>
                                            <div className="title_service">
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    {project.shortDescription}
                                                </p>
                                            </div>
                                            <div
                                                className="view_detail"
                                                style={{ padding: '5px 0' }}
                                            >
                                                <span
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() =>
                                                        showModal(project)
                                                    }
                                                >
                                                    <FaArrowRight />
                                                    &nbsp; Xem Chi Tiết
                                                </span>
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
