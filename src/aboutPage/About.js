import TitleEffect from "../TitleEffect";
import {ReactComponent as AboutF} from './ABOUT f.svg';
import {ReactComponent as AboutB} from './ABOUT b.svg';
import {ReactComponent as Sharat} from './Sharat 2.svg';
import './About.css';

const About = () => {
    const title = {front: AboutF, back: AboutB, centre: Sharat, color: '#2E294E', top: -9.375, right: 15.625, display: 'none', titleTop: 7.813};

    return ( 
        <div className="About-Page" style={{backgroundColor: '#2E294E'}}>
              <TitleEffect title ={title}/>
        </div>
     );
}
 
export default About;