import TitleEffect from "../TitleEffect";
import {ReactComponent as ResumeF} from './RESUME f.svg';
import {ReactComponent as ResumeB} from './RESUME b.svg';
import {ReactComponent as ResumeCentre} from './Resume Centre.svg';
import './Resume.css';


const Resume = () => {
    const title = {front: ResumeF, back: ResumeB, centre: ResumeCentre, top: -270, left: 200, width: 900, height: 900};

    return (
        <div className="Resume-Page" style={{backgroundColor: '#F46036'}}>
            <TitleEffect title ={title}/>
    </div>

      );
}
 
export default Resume;