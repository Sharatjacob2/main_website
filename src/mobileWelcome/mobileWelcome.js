import './mobileWelcome.css';
import { ReactComponent as TwiceF } from './TWICE NAMED f.svg';
import { ReactComponent as TwiceB } from './TWICE NAMED b.svg';
import { ReactComponent as Centre } from './mobile Start Image.svg';
import MobileMenu from '../mobileMenu/mobileMenu';
import { useState } from 'react';

const MobileWelcome = () => {

    document.body.classList.add('hide-scrollbars');

    const [isContentVisible, setContentVisible] = useState(false);

    const handleButtonClick = () => {
      setContentVisible(true);
    };

    return (
        <div className="mobile-welcome">
            <div className="mobile-start-text">honestly, desktop is a better view for this but I’m so glad
                you came, so welcome to the personal website of</div>
            <div className="mobile-text-and-image">
                <TwiceB className='mobile-backTitle titles' />
                <Centre className='mobile-centreImage' />
                <TwiceF className='mobile-frontTitle titles' />
            </div>
            <div className="mobile-explore" onClick={handleButtonClick}>
                <p>explore</p>
            </div>
            {isContentVisible && <MobileMenu />}
        </div>
    );
}

export default MobileWelcome;
