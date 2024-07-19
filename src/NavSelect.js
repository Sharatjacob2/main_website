import './NavSelect.css';

const NavSelect = (props) => {
    const selectors = props.selectors; 
    console.log(selectors);

    return ( 
        <div className="nav-selectors">
        {selectors.map((selector) => (
        <div className="nav-select">
            <div className="sphere" style={{backgroundColor: selector.color}}>
                <div className="small-sphere">
                <selector.svgName className='nav-icon'/>
                </div>
            </div>
            <div className="rectangle" style={{backgroundColor: selector.color}}></div>
        </div>
    ))}
        </div>
     );
}
 
export default NavSelect;