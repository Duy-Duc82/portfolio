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

    const openProjectLink = (project: IProject) => {
        if (project.detail.Github) {
            window.open(project.detail.Github, '_blank', 'noopener,noreferrer');
        }
    };

    const dataProject: IProject[] = [
        {
            icon: <FaReact size={64} color="#007bff" />,
            title: 'BidSphere (Online Auction Platform)',
            shortDescription:
                'Nền tảng đấu giá trực tuyến full-stack: Spring Boot + React, WebSocket realtime, escrow, auto-bid.',
            detail: {
                Description:
                    'Nền tảng đấu giá trực tuyến full-stack mô phỏng quy trình đấu giá: quản lý vòng đời sản phẩm & phiên đấu giá, đặt giá thủ công và auto-bid, ví & giao dịch sau đấu giá (escrow), phân quyền theo vai trò, thông báo realtime qua WebSocket.',
                Technology:
                    'Backend: Java 21, Spring Boot 3.5.6, Spring Security + JWT, Spring Data JPA, MapStruct, Lombok, Spring WebSocket (STOMP/SockJS), Scheduling, Spring Mail, Cloudinary, Testing (Spring Boot Test/H2). Frontend: React 18, TypeScript, Vite, React Router, Axios (interceptors), SockJS/STOMP, Tailwind CSS/CSS modules, Radix UI, React Toastify, React Joyride.',
                Member: '5',
                Role: 'Full-stack Developer (tham gia phát triển cả frontend React và backend Spring Boot theo mô hình module)',
                Github: 'https://github.com/Duy-Duc82/IT4409-BidSphere',
            },
        },
        {
            icon: <FaReact size={64} color="#61dafb" />,
            title: 'NiceJob (IT Job Portal)',
            shortDescription:
                'Hệ thống tuyển dụng IT full-stack: candidate site + admin/recruiter, RBAC, JWT + refresh token.',
            detail: {
                Description:
                    'Hệ thống tuyển dụng IT full-stack gồm giao diện ứng viên và trang admin/nhà tuyển dụng quản trị dữ liệu. Chức năng: đăng ký/đăng nhập, xem công ty & việc làm, nộp CV; admin quản lý users/companies/jobs/resumes/roles/permissions. Backend chuẩn hóa response, pagination/filter/sort, upload file, JWT + refresh token, RBAC theo permission, soft delete.',
                Technology:
                    'Frontend: React 18, TypeScript, Vite, Ant Design + Ant Design Pro, Redux Toolkit, Axios (refresh token), React Router, SCSS modules, Dayjs/Lodash/query-string, React Quill. Backend: NestJS 9, TypeScript, MongoDB + Mongoose, Passport (Local/JWT), bcryptjs, cookie-parser, Multer upload, RBAC guard, class-validator/ValidationPipe, api-query-params, Helmet, Throttler, Swagger, soft-delete-plugin-mongoose, mail scaffold (nodemailer/handlebars).',
                Member: '2',
                Role: 'Full-stack Developer (NestJS backend + React frontend)',
                Github: 'https://github.com/Duy-Duc82/nicejob',
            },
        },
        {
            icon: <FaCss3Alt size={64} color="#1572b6" />,
            title: 'E-Commerce Lambda Architecture',
            shortDescription:
                'Nền tảng phân tích dữ liệu lớn cho e-commerce theo Lambda Architecture, có ML pipeline.',
            detail: {
                Description:
                    'Nền tảng phân tích dữ liệu lớn cho e-commerce: ingestion qua Kafka, realtime Spark Streaming (đẩy Elasticsearch), batch ETL/ML bằng PySpark (đẩy Postgres DW), dashboard qua Kibana/Superset/Streamlit. Bài toán ML: trend analysis, anomaly detection, price forecast, fraud detection.',
                Technology:
                    'Kafka, Spark Streaming, PySpark, Redis, Elasticsearch + Kibana, MinIO (S3), PostgreSQL, Apache Superset, Streamlit, Docker Compose, Python 3.12+, Java 17+ (cho Spark).',
                Member: '1',
                Role: 'Data Engineer / Big Data Engineer',
                Github: 'https://github.com/Duy-Duc82/ecommerce-lambda-architecture',
            },
        },
        {
            icon: <FaHtml5 size={64} color="#e34c26" />,
            title: 'optimal-transport_KPG',
            shortDescription:
                'Repo nghiên cứu/thực nghiệm UDA (Unsupervised Domain Adaptation) với Office-Home dataset.',
            detail: {
                Description:
                    'Repo nghiên cứu/thực nghiệm cho bài toán UDA, có hướng dẫn chạy thí nghiệm (Office-Home dataset) và script để tái tạo kết quả. Code có tham chiếu/borrow từ repo khác (RSDA).',
                Technology:
                    'Python (research code), shell scripts, Office-Home dataset (external).',
                Member: '1',
                Role: 'Researcher / ML Engineer',
                Github: 'https://github.com/Duy-Duc82/optimal-transport_KPG',
            },
        },
        {
            icon: <FaReact size={64} color="#007bff" />,
            title: 'to-do-app-react',
            shortDescription:
                'Project React tạo bằng Vite template để phát triển SPA (HMR, ESLint, React plugin).',
            detail: {
                Description:
                    'Project React tạo bằng Vite template, cấu hình nền tảng để phát triển SPA (HMR, ESLint rules, React plugin).',
                Technology: 'React, Vite, JavaScript.',
                Member: '1',
                Role: 'Frontend Developer',
                Github: 'https://github.com/Duy-Duc82/to-do-app-react',
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
                width={900}
                className="project-detail-modal"
            >
                {selectedProject && (
                    <ul className="project-detail-list">
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
                            <h3>Các project của tôi</h3>
                            <span>Completed projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProject.map((project, index) => (
                                    <li key={index}>
                                        <div
                                            className="inner project-card"
                                            role="link"
                                            tabIndex={0}
                                            onClick={() =>
                                                openProjectLink(project)
                                            }
                                            onKeyDown={event => {
                                                if (
                                                    event.key === 'Enter' ||
                                                    event.key === ' '
                                                ) {
                                                    event.preventDefault();
                                                    openProjectLink(project);
                                                }
                                            }}
                                        >
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
                                                    onClick={event => {
                                                        event.stopPropagation();
                                                        showModal(project);
                                                    }}
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
