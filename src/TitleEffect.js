import './TitleEffect.css';

const TitleEffect = (props) => {
    
    const title = props.title;
    document.body.classList.add('hide-scrollbars');
    return(
        <div className='starter'>
        <title.back className='backTitle'/>
        <title.centre className='centreImage' style={{top: `${title.top}`, left: `${title.left}`, right: `${title.right}`, width: `${title.width}`, height: `${title.height}`}}/>
        <title.front className='frontTitle' style={{top: `${title.titleTop}`}}/>
        <div className="underline-title" style={{display: title.display}}></div>
        </div>
    );
}

export default TitleEffect;