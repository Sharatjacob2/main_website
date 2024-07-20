import TitleEffect from "../TitleEffect";
import {ReactComponent as ProjectF} from './PROJECTS f.svg';
import {ReactComponent as ProjectB} from './PROJECTS b.svg';
import {ReactComponent as ProjectCentre} from './Projects Centre.svg';
import './Project.css';


const Project = () => {
    const title = {front: ProjectF, back: ProjectB, centre: ProjectCentre, top: -180, left: 850, width: 800, height: 700};

    return (
        <div className="Projects-Page" style={{backgroundColor: '#D7263D'}}>
            <TitleEffect title ={title}/>
        </div>
    );
}

export default Project;