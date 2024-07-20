import './WelcomePage.css';
import { ReactComponent as Welcome } from './WELCOME.svg';
import { ReactComponent as WelcomeBack } from './WELCOME back.svg';

import { ReactComponent as AboutImage } from './iconsLandingPage/AboutImage.svg';
import { ReactComponent as ProjectImage } from './iconsLandingPage/ProjectImage.svg';
import { ReactComponent as WeirdImage } from './iconsLandingPage/WeirdImage.svg';
import { ReactComponent as ResumeImage } from './iconsLandingPage/ResumeImage.svg';
import { ReactComponent as WriteImage } from './iconsLandingPage/WriterImage.svg';

import NavSelect from './NavSelect';
import { useEffect, useRef, useState } from 'react';

const WelcomePage = () => {
    const selectors = [
        { title: "projects", color: '#D7263D', svgName: ProjectImage, id: 1 },
        { title: "resume", color: '#F46036', svgName: ResumeImage, id: 2 },
        { title: "about", color: '#2E294E', svgName: AboutImage, id: 3 },
        { title: "weird", color: '#1B998B', svgName: WeirdImage, id: 4 },
        { title: "blog", color: '#C5D86D', svgName: WriteImage, id: 5 }
    ];

    const [colorValue, setColorValue] = useState('white');
    const handleSelectorChange = (colorValue) => {
        setColorValue(colorValue);
        setTopPosition(0);
    }

    const firstElementRef = useRef(null);
    const secondElementRef = useRef(null);

    const [topPosition, setTopPosition] = useState(0);

    const positionSecondElement = () => {
        if (firstElementRef.current) {
            const firstElementRect = firstElementRef.current.getBoundingClientRect();
            const diff = (firstElementRef.current.clientHeight)/2;
            const circleDiff = (secondElementRef.current.clientHeight)/2;
            setTopPosition(firstElementRect.top + diff- circleDiff/1.2);
        }
    };

    useEffect(() => {
        positionSecondElement();
        // Reposition on window resize
        window.addEventListener('resize', positionSecondElement);
        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', positionSecondElement);
        };
    }, []);

    return (
        <div className="welcome-page">
            <h1  className='subTitle'>THE SQUARE GIVES YOU A HEARTY</h1>
            <div className='containerTitles'>
                <WelcomeBack ref={firstElementRef} className='Welcome-backTitle' />
                <NavSelect selectors={selectors} onSelectorChange={handleSelectorChange} />
                <Welcome className='Welcome-frontTitle' />
            </div>
            <div ref={secondElementRef} className={`main-sphere ${colorValue === 'white' ? '' : 'clicked'}`} style={{ backgroundColor: colorValue, top:`${topPosition}px`}}></div>
        </div>
    );
}

export default WelcomePage;
