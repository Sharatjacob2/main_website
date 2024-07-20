import { useEffect, useRef, useState } from 'react';
import './TitleEffect.css';
import { CSSTransition } from 'react-transition-group';


const TitleEffect = (props) => {

    const title = props.title;
    document.body.classList.add('hide-scrollbars');

    const [showElement, setShowElement] = useState(false);

    const handleClick = () => {
        setShowElement(true);
    };

    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            handleClick();
        }
    }, []); // Empty dependency array ensures this runs only once after the initial render


    return (
        <div ref={elementRef} className="transition-cover">
        <CSSTransition in={showElement} timeout={500} classNames="fade" unmountOnExit>
        <div className='starter' >
                    <title.back className='backTitle' />
                    <title.centre className='centreImage' style={{ top: `${title.top}vw`, left: `${title.left}vw`, right: `${title.right}vw`, width: `${title.width}vw`, height: `${title.height}vw` }} />
                    <title.front className='frontTitle' style={{ top: `${title.titleTop}vw` }} />
                    <div className="underline-title" style={{ display: title.display }}></div>
        </div>
        </CSSTransition>
        </div>
    );
}

export default TitleEffect;