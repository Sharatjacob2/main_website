import { useEffect, useRef, useState } from 'react';
import './TitleEffect.css';
import { CSSTransition } from 'react-transition-group';


const TitleEffect = (props) => {

    const title = props.title;

    const [showElement, setShowElement] = useState(false);

    const handleClick = () => {
        setShowElement(true);
    };

    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            handleClick();            
        }

    }); 


    return (
        <div ref={elementRef} className="transition-cover">
        <CSSTransition in={showElement} timeout={500} classNames="fade" unmountOnExit>
        <div className='starter' >
                    <title.back className='backTitle' />
                    <title.centre className='centreImage' style={{ top: `${title.top}vw`, left: `${title.left}vw`, right: `${title.right}vw`, width: `${title.width}vw`, height: `${title.height}vw` }} />
                    <title.front className='frontTitle' />
                    <div className="underline-title"></div>
        </div>
        </CSSTransition>
        </div>
    );
}

export default TitleEffect;