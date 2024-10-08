import './mobileMenu.css';

import { ReactComponent as AboutImage } from '../landingPage/iconsLandingPage/AboutImage.svg';
import { ReactComponent as ProjectImage } from '../landingPage/iconsLandingPage/ProjectImage.svg';
import { ReactComponent as WeirdImage } from '../landingPage/iconsLandingPage/WeirdImage.svg';
import { ReactComponent as ResumeImage } from '../landingPage/iconsLandingPage/ResumeImage.svg';
import { ReactComponent as WriteImage } from '../landingPage/iconsLandingPage/WriterImage.svg';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';



const MobileMenu = () => {

    const mobileSelectors = [
        { title: "projects", color: '#D7263D', svgName: ProjectImage, id: 1 },
        { title: "resume", color: '#F46036', svgName: ResumeImage, id: 2 },
        { title: "about", color: '#2E294E', svgName: AboutImage, id: 3 },
        { title: "weird", color: '#1B998B', svgName: WeirdImage, id: 4 },
        { title: "blog", color: '#C5D86D', svgName: WriteImage, id: 5 }
    ];

    const [showElement, setShowElement] = useState(false);

    const handleClick = () => {
        setShowElement(true);
    };

    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            handleClick();
        }
    }, []); // Empty dependency array ensures this runs only once after the initial render


    return (
        <div ref={elementRef} className="mobile-menu-transition">
        <CSSTransition in={showElement} timeout={800} classNames="fade" unmountOnExit>
        <div className="mobile-menu">
            {mobileSelectors.map((mobileSelector) => (
                <NavLink to={`/${mobileSelector.title}`} key={`mobile-${mobileSelector.id}`}>
                    <div className="mobile-menu-section" style={{ backgroundColor: mobileSelector.color }}>
                        {mobileSelector.id % 2 === 0 ? (
                            <>
                                <div className="section-sphere" style={{marginLeft: '10vw'}}>
                                    <mobileSelector.svgName className='section-icon-image' />
                                </div>
                                <p className="section-name" style={{marginRight: '10vw'}}>{mobileSelector.title}</p>
                            </>
                        ) : (
                            <>
                                <p className="section-name" style={{marginLeft: '10vw'}}>{mobileSelector.title}</p>
                                <div className="section-sphere" style={{marginRight: '10vw'}}>
                                    <mobileSelector.svgName className='section-icon-image' />
                                </div>
                            </>
                        )}
                    </div>
                </NavLink>
            ))}
        </div>
        </CSSTransition>
        </div>
    );
}

export default MobileMenu;