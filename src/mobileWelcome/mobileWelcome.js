import './mobileWelcome.css';
import { ReactComponent as TwiceF } from './TWICE NAMED f.svg';
import { ReactComponent as TwiceB } from './TWICE NAMED b.svg';
import { ReactComponent as Centre } from './mobile Start Image.svg';
import { NavLink } from 'react-router-dom';

const MobileWelcome = () => {

    document.body.classList.add('hide-scrollbars');

    return (
        <div className="mobile-welcome">
            <div className="mobile-start-text">honestly, desktop is a better view for this but I’m so glad
                you came, so welcome to the personal website of</div>
            <div className="mobile-text-and-image">
                <TwiceB className='mobile-backTitle titles' />
                <Centre className='mobile-centreImage' />
                <TwiceF className='mobile-frontTitle titles' />
            </div>
            <NavLink to='/projects'>
            <div className="mobile-explore">
                <p>explore</p>
            </div>

            </NavLink>
        </div>
    );
}

export default MobileWelcome;
