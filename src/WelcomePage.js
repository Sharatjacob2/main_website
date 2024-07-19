import './WelcomePage.css';
import { ReactComponent as Welcome } from './WELCOME.svg';
import { ReactComponent as WelcomeBack } from './WELCOME back.svg';

import { ReactComponent as AboutImage } from './iconsLandingPage/AboutImage.svg';
import { ReactComponent as ProjectImage } from './iconsLandingPage/ProjectImage.svg';
import { ReactComponent as WeirdImage } from './iconsLandingPage/WeirdImage.svg';
import { ReactComponent as ResumeImage } from './iconsLandingPage/ResumeImage.svg';
import { ReactComponent as WriteImage } from './iconsLandingPage/WriterImage.svg';

import NavSelect from './NavSelect';
import { useState } from 'react';

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
    }

    return (
        <div className="welcome-page">
            <h1 className='subTitle'>THE SQUARE GIVES YOU A HEARTY</h1>
            <div className='containerTitles'>
                <WelcomeBack className='backTitle' />
                <NavSelect selectors={selectors} onSelectorChange = {handleSelectorChange}/>
                <Welcome className='frontTitle' />
            </div>
            <div className={`main-sphere ${colorValue === 'white' ? '':'clicked'}`} style={{backgroundColor:colorValue}}></div>
        </div>
    );
}

export default WelcomePage;
