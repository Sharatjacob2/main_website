import TitleEffect from "../TitleEffect";
import { ReactComponent as ResumeF } from './RESUME f.svg';
import { ReactComponent as ResumeB } from './RESUME b.svg';
import { ReactComponent as ResumeCentre } from './Resume Centre Test.svg';
import { ReactComponent as DownloadIcon } from './Download Icon.svg';
import { ReactComponent as PageOne} from './Figma_Resume.svg';
import { ReactComponent as PageTwo} from './pagetwo.svg';

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
            <PageOne className="pageone"/>
            <PageTwo className="pageone"/>
            <Footer color = {'#2E294E'}/>
        </div>

    );
}

export default Resume;