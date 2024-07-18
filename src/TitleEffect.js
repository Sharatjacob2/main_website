import './TitleEffect.css';
import {ReactComponent as Welcome} from './WELCOME.svg';
import {ReactComponent as WelcomeBack} from './WELCOME back.svg';
import {ReactComponent as Sharat} from './Sharat 2.svg';


function TitleEffect({title}) {
    return(
        <div className='containerTitles'>
        <WelcomeBack className='backTitle'/>
        <Sharat className='centreImage'/>
        <div className='tempDiv'></div>
        <Welcome className='frontTitle'/>
        </div>
    );
}

export default TitleEffect;