import TitleEffect from "../TitleEffect";
import {ReactComponent as WeirdF} from './WEIRD f.svg';
import {ReactComponent as WeirdB} from './WEIRD b.svg';
import {ReactComponent as WeirdCentre} from './Weird Test Scentre.svg';
import {ReactComponent as WeirdLoader} from './Weird Loader.svg';
import './Weird.css';
import Footer from "../footer/Footer";

const WeirdItem = (props) => {

    const {svgNames: SvgIcon, description} = props.item;
    return (
        <div className="weird-item">
            <SvgIcon className="weird-image"/>
            <div className="weird-desc">{description}</div>
        </div>
      );
}
 

const Weird = () => {
    const title = {front: WeirdF, back: WeirdB, centre: WeirdCentre, left: 34.906, top: -5.8, width: 30, height: 30};
    document.body.classList.remove('hide-scrollbars');
    const weirditems = [
        {svgNames: WeirdLoader, description: "a collection of pixel art made by coloring cells in  Google Sheet"},
        {svgNames: WeirdLoader, description: "a collection of pixel art made by coloring cells in  Google Sheet"},
    ]
    return (
        <div className="Weird-Page" style={{backgroundColor: '#1B998B'}}>
            <TitleEffect title ={title}/>
            {weirditems.map((weirditem) => (
                <WeirdItem item = {weirditem} />
            ))}
            <Footer color = {'#062A26'}/>

    </div>
      );
}
 
export default Weird;