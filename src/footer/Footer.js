import { ReactComponent as Instagram } from './Instagram.svg';
import { ReactComponent as LinkedIn } from './LinkedIn.svg';
import { ReactComponent as Twitter } from './Twitter.svg';
import { ReactComponent as Mail } from './Mail.svg';
import './Footer.css';

const FooterIcon = (props) => {
    const { link, svgName: SvgIcon } = props.item;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <SvgIcon className="footericons"/>
        </a>
    );
}

const Footer = (props) => {
    const color = props.color;
    const footericonslist = [
        {link: "https://mail.google.com/mail/?view=cm&to=sharatjacob2@gmail.com", svgName: Mail},
        {link: "https://www.linkedin.com/in/sharat-jacob-jacob/", svgName: LinkedIn},
        {link: "https://www.instagram.com/sharatj_2/", svgName: Instagram},
        {link: "https://x.com/sharatj_2", svgName: Twitter},
    ]
    return (
        <div className="footer" style={{ backgroundColor: color }}>
            {footericonslist.map((footericon) => (
                <FooterIcon item = {footericon}/>
            ))}
        </div>
    );
}

export default Footer;