import TitleEffect from "../TitleEffect";
import {ReactComponent as ResumeF} from './RESUME f.svg';
import {ReactComponent as ResumeB} from './RESUME b.svg';
import {ReactComponent as ResumeCentre} from './Resume Centre.svg';
import './Resume.css';


const Resume = () => {
    const title = {front: ResumeF, back: ResumeB, centre: ResumeCentre, top: -21.094, left: -21.875, width: 70.313, height: 70.313};

    return (
        <div className="Resume-Page" style={{backgroundColor: '#F46036'}}>
            <TitleEffect title ={title}/>
    </div>

      );
}
 
export default Resume;