import './WelcomePage.css';
import {ReactComponent as Welcome} from './WELCOME.svg';
import {ReactComponent as WelcomeBack} from './WELCOME back.svg';
import NavSelect from './NavSelect';

const WelcomePage = () => {
    const selectors = [
        {color: '#E3E1E1', id: 1},
        {color: '#FA9595', id: 2},
        {color: '#221818', id: 3},
        {color: '#E02727', id: 4},
        {color: '#DAABFA', id: 5}
    ];

    return (
        <div className='containerTitles'>
            <WelcomeBack className='backTitle' />
            <NavSelect selectors = {selectors}/>
            <Welcome className='frontTitle' />
        </div>
    );
}

export default WelcomePage;
