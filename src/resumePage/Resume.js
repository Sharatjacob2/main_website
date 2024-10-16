import TitleEffect from "../TitleEffect";
import { ReactComponent as ResumeF } from './RESUME f.svg';
import { ReactComponent as ResumeB } from './RESUME b.svg';
import { ReactComponent as ResumeCentre } from './Resume Centre Test.svg';
import { ReactComponent as DownloadIcon } from './Download Icon.svg';
import PageOne from './pageone.png';
import PageTwo from './pagetwo.png';

import './Resume.css';
import Footer from "../footer/Footer";

const Resume = () => {
    document.body.classList.remove('hide-scrollbars');

    const title = { front: ResumeF, back: ResumeB, centre: ResumeCentre, top: -21.094, left: -11.875, width: 55.313, height: 55.313 };

    return (
        <div className="Resume-Page" style={{ backgroundColor: '#F46036' }}>
            <TitleEffect title={title} />
            <a href="/Sharat Resume.pdf" download="Sharat Resume.pdf" className="download">
                <button className="download-button">
                    <DownloadIcon className="download-icon" />
                    <p className="downloadtext">Download Resume</p>
                </button>
            </a>
            <img src={PageOne} className="pageone" alt="page one"/>
            <img src ={PageTwo} className="pageone" alt="page two"/>
            <Footer color = {'#2E294E'}/>
        </div>

    );
}

export default Resume;