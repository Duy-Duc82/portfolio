import desktopLogo from 'assets/img/logo/123.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActiveTab] = useState<string>('home');

    useEffect(() => {
        const { hash } = window.location;

        if (hash) {
            const tab = hash.replace('#', '');
            setActiveTab(tab);

            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    const handleClickTab = (
        tab: string,
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        setActiveTab(tab);

        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab;
            }, 1000);
        }
    };
    return (
        <>
            <div
                className={
                    props.hideLeftPart === true
                        ? 'arlo_tm_leftpart_wrap opened'
                        : 'arlo_tm_leftpart_wrap '
                }
            >
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#">
                            <img src={desktopLogo} alt="desktop-logo" />
                        </a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li>
                                <a
                                    href="#home"
                                    className={
                                        activeTab === 'home' ? 'active' : ''
                                    }
                                    onClick={(
                                        event: React.MouseEvent<
                                            HTMLAnchorElement,
                                            MouseEvent
                                        >
                                    ) => handleClickTab('home', event)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={
                                        activeTab === 'about' ? 'active' : ''
                                    }
                                    onClick={(
                                        event: React.MouseEvent<
                                            HTMLAnchorElement,
                                            MouseEvent
                                        >
                                    ) => handleClickTab('about', event)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={
                                        activeTab === 'skills' ? 'active' : ''
                                    }
                                    onClick={(
                                        event: React.MouseEvent<
                                            HTMLAnchorElement,
                                            MouseEvent
                                        >
                                    ) => handleClickTab('skills', event)}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#project"
                                    className={
                                        activeTab === 'project' ? 'active' : ''
                                    }
                                    onClick={(
                                        event: React.MouseEvent<
                                            HTMLAnchorElement,
                                            MouseEvent
                                        >
                                    ) => handleClickTab('project', event)}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={
                                        activeTab === 'contact' ? 'active' : ''
                                    }
                                    onClick={(
                                        event: React.MouseEvent<
                                            HTMLAnchorElement,
                                            MouseEvent
                                        >
                                    ) => handleClickTab('contact', event)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li>
                                    <a
                                        href="https://web.facebook.com/duc.duy.080205/"
                                        target="_blank"
                                    >
                                        <FaFacebookSquare />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://github.com/Duy-Duc82"
                                        target="_blank"
                                    >
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {!isMobile && (
                        <a
                            className={
                                props.hideLeftPart
                                    ? 'arlo_tm_resize opened'
                                    : 'arlo_tm_resize'
                            }
                            href="#"
                            onClick={e => {
                                e.preventDefault();
                                props.setHideLeftPart(!props.hideLeftPart);
                            }} //toggle
                        >
                            <i
                                className={
                                    props.hideLeftPart
                                        ? 'xcon-angle-left opened'
                                        : 'xcon-angle-left'
                                }
                            ></i>
                        </a>
                    )}
                </div>
            </div>
        </>
    );
};

export default LeftPart;
