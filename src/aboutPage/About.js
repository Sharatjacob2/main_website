import TitleEffect from "../TitleEffect";
import {ReactComponent as AboutF} from './ABOUT f.svg';
import {ReactComponent as AboutB} from './ABOUTb.svg';
import {ReactComponent as Sharat} from './SharatAboutPage.svg';
import './About.css';
import Footer from "../footer/Footer";

const About = () => {
    const title = {front: AboutF, back: AboutB, centre: Sharat, color: '#2E294E', top: -9.375, right: 15.625, display: 'none'};

    return ( 
        <div className="About-Page" style={{backgroundColor: '#2E294E'}}>
              <TitleEffect title ={title}/>
              <div className="desc-para-1">
                <p className="para-1">If you'ever watched this video on exploding hamsters in microwaves, there's this lovely snippet of info the video creator Tom Scott mentions about a different generation of scientists. scientists scientists scientists scientists If you'ever watched this video on exploding hamsters in microwaves, there's this lovely snippet of info the video creator Tom Scott mentions about a different generation of scientists. scientists scientists scientists scientists</p>
              </div>
              <div className="para-1-image"><Sharat style={{height: '400px', width: '300px'}}/></div>   
              <Footer color = {'#7F74C6'}/>           
        </div>
     );
}
 
export default About;