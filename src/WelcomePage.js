import './WelcomePage.css';
import {ReactComponent as Welcome} from './WELCOME.svg';
import {ReactComponent as WelcomeBack} from './WELCOME back.svg';

import {ReactComponent as AboutImage} from './about nav.svg';
import {ReactComponent as ProjectImage} from './ProjectImage.svg';
import {ReactComponent as WeirdImage} from './WeirdImage.svg';
import {ReactComponent as ResumeImage} from './ResumeImage.svg';
import {ReactComponent as WriteImage} from './WriterImage.svg';

import NavSelect from './NavSelect';

const WelcomePage = () => {
    const selectors = [
        {color: '#E3E1E1', svgName: ProjectImage, id: 1},
        {color: '#FA9595', svgName: ResumeImage, id: 2},
        {color: '#221818', svgName: AboutImage, id: 3},
        {color: '#E02727', svgName: WeirdImage, id: 4},
        {color: '#DAABFA', svgName: WriteImage, id: 5}
    ];

    return (
        <div className="welcome-page">
            <h1 className='subTitle'>THE SQUARE GIVES YOU A HEARTY</h1>
            <div className='containerTitles'>
            <WelcomeBack className='backTitle' />
            <NavSelect selectors = {selectors}/>
            <Welcome className='frontTitle' />
        </div>

        </div>
    );
}

export default WelcomePage;
