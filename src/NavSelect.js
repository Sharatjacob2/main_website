import { useState } from 'react';
import './NavSelect.css';

const NavSelect = (props) => {
    const selectors = props.selectors; 

    const [selectorId, setSelectorId] = useState(0);
    const transitionClick = (selector) => {
        console.log(selectorId);
        setSelectorId(selector.id);
        props.onSelectorChange(selector.color);    
    }

    return ( 
        <div className="nav-selectors">
        {selectors.map((selector) => (
        <div className={`nav-select nav-select-${selector.id}`} key="selector.id" onClick={() => {transitionClick(selector)}}>
            <div className="sphere" style={{backgroundColor: selector.color}}>
                <div className="small-sphere">
                <selector.svgName className='nav-icon'/>
                </div>
            </div>
            <div className="nav-title">{selector.title}</div>
            <div className="rectangle" style={{backgroundColor: selector.color}}></div>
        </div>
    ))}
        </div>
     );
}
 
export default NavSelect;