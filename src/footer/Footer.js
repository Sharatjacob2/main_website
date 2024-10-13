import { ReactComponent as Instagram} from './Instagram.svg';
import { ReactComponent as LinkedIn} from './LinkedIn.svg';
import { ReactComponent as Twitter} from './Twitter.svg';
import { ReactComponent as Mail} from './Mail.svg';
import './Footer.css';
const Footer = (props) => {
    const color = props.color;
    return ( 
        <div className="footer" style={{ backgroundColor: color }}>
            <Mail className='footericons'/>
            <LinkedIn className='footericons'/>
            <Instagram className='footericons'/>
            <Twitter className='footericons'/>
        </div>
     );
}
 
export default Footer;