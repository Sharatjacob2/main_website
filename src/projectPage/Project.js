import TitleEffect from "../TitleEffect";
import {ReactComponent as ProjectF} from './PROJECTS f.svg';
import {ReactComponent as ProjectB} from './PROJECTS b.svg';
import {ReactComponent as ProjectCentre} from './Projects Centre.svg';
import './Project.css';
import Footer from "../footer/Footer";


const Project = () => {
    const title = {front: ProjectF, back: ProjectB, centre: ProjectCentre, top: -14.063, right: 0, width: 62.5, height: 54.688};

    return (
        <div className="Projects-Page" style={{backgroundColor: '#D7263D'}}>
            <TitleEffect title ={title}/>
            <Footer color = {'#2E294E'}/>

        </div>
    );
}

export default Project;