import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './mobileWelcome.css';
import { ReactComponent as TwiceF } from './TWICE NAMED f.svg';
import { ReactComponent as TwiceB } from './TWICE NAMED b.svg';
import { ReactComponent as Centre } from './mobile Start Image.svg';


const MobileWelcome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) {
                navigate('/');
            }
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    }, [navigate]);


    return (
        <div className="mobile-welcome">
            <p className="mobile-start-text">honestly, desktop is a better view for this but I’m so glad
                you came, so welcome to the personal website of</p>
            <div className="mobile-text-and-image">
                <TwiceB className='mobile-backTitle titles' />
                <Centre className='mobile-centreImage' />
                <TwiceF className='mobile-frontTitle titles' />
            </div>
        </div>
    );
}

export default MobileWelcome;
