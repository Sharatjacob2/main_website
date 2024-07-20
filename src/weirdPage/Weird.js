import TitleEffect from "../TitleEffect";
import {ReactComponent as WeirdF} from './WEIRD f.svg';
import {ReactComponent as WeirdB} from './WEIRD b.svg';
import {ReactComponent as WeirdCentre} from './Weird Test Scentre.svg';
import './Weird.css';

const Weird = () => {
    const title = {front: WeirdF, back: WeirdB, centre: WeirdCentre, left: 34.906, top: -7.375, width: 30, height: 30};

    return (
        <div className="Weird-Page" style={{backgroundColor: '#1B998B'}}>
            <TitleEffect title ={title}/>
    </div>
      );
}
 
export default Weird;