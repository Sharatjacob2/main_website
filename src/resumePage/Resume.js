import TitleEffect from "../TitleEffect";
import { ReactComponent as ResumeF } from './RESUME f.svg';
import { ReactComponent as ResumeB } from './RESUME b.svg';
import { ReactComponent as ResumeCentre } from './Resume Centre Test.svg';
import { ReactComponent as DownloadIcon } from './Download Icon.svg';
import { ReactComponent as PageOne} from './PageOne.svg';
import { ReactComponent as PageTwo} from './PageTwo.svg';
import { ReactComponent as PageThree} from './PageThree.svg';
import PageHeader from "../utils/PageHeader";



import './Resume.css';
import Footer from "../footer/Footer";


const Resume = () => {
    document.body.classList.remove('hide-scrollbars');

    const title = { front: ResumeF, back: ResumeB, centre: ResumeCentre, top: -21.094, left: -11.875, width: 55.313, height: 55.313 };

    return (
        <div className="Resume-Page" style={{ backgroundColor: '#c44e2d' }}>
            <TitleEffect title={title} />
                  <PageHeader
        title="A PROFESSIONAL HISTORY"
        subtitle="Last revised · July 2026"
        accentColor="#7F74C6"
      />
            <a href="/Sharat Resume.pdf" download="Sharat Resume.pdf" className="download">
                <button className="download-button">
                    <DownloadIcon className="download-icon" />
                    <p className="downloadtext">Download CV</p>
                </button>
            </a>
            
            <PageOne className="pageone"/>
            <PageTwo className="pageone"/>
            <PageThree className="pageone"/>
            <Footer color = {'#e08257'}/>
        </div>

    );
}

export default Resume;